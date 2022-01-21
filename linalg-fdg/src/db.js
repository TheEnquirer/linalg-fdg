import { useReducer, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import update from "react-addons-update";

import { supabase_url, supabase_pubkey } from './secrets';
import data from './data';
//data.nodes = data.nodes.map(v => ({ id: v.id, content: v.content, group: v.group }))
//console.log(JSON.stringify(data))

//setTimeout(() => console.log(data), 1000);

const client = createClient(supabase_url, supabase_pubkey);
data.nodes.forEach(n => addNode(n));
data.links.forEach(n => addLink(n));

/////////////////////////////////////////////////////
// PUSH CHANGES TO DB
/////////////////////////////////////////////////////

export async function addNode(obj) {
    const { d, e } = await client.from('nodes').insert([
        {
            id: obj.id,
            group: obj.group,
            content: obj.content,
        }
    ]);
    if (e) throw e;
    return d;
}

export async function updateNode(obj) {
    console.log('updating node', obj)
    // TODO: untested
    const { d, e } = await client
        .from('nodes')
        .update({
            group: obj.group,
            content: obj.content,
        })
        .match({ id: obj.id })
    if (e) throw e;
    return d;
}

export async function addLink(obj) {
    console.log('addLink', obj)
    // TODO: untested
    const { d, e } = await client.from('links').insert([
        {
            source: obj.source,
            target: obj.target,
            value: obj.value,
            Content: obj.Content,
        }
    ]);
    if (e) throw e;
    return d;
}

export async function updateLink(obj) {
    // TODO: untested
    const { d, e } = await client
        .from('nodes')
        .update({
            value: obj.value,
            Content: obj.Content,
        })
        .match({ source: obj.source, target: obj.target })
    if (e) throw e;
    return d;
}

/////////////////////////////////////////////////////
// REACT TO DB CHANGES (haha get it? bc its react?? help)
/////////////////////////////////////////////////////

function useDatabase() {
    function reducer(state, action) {
        console.log('reducing', state, action)
        switch (action.eventType) {
            case "INSERT": return update(state, { [action.table]: { $push: [action.new] } });
            case "UPDATE":
                switch (action.table) {
                    case "nodes": return { ...state, nodes: state.nodes.map(v => v.id == action.old.id ? action.new : v) };
                    case "links": return { ...state, links: state.links.map(v =>
                        (v.source == action.old.source && v.target == action.old.target) ?
                        action.new : v
                    ) };
                }
        }
        console.log('after reduce', state)
        return state;
    }
    const [ data_state, dispatch ] = useReducer(reducer, { nodes: await client.from('nodes').select(), links: await client.from('links').select() });

    useEffect(() => {
        // https://reactjs.org/docs/hooks-custom.html
        //const subscriptions = client
        //    .from('nodes').on('INSERT', handleNodeInsert)
        //                  .on('UPDATE', handleNodeUpdate)
        //    .from('edges').on('INSERT', handleEdgeInsert)
        //                  .on('UPDATE', handleEdgeUpdate)
        //    .subscribe();
        //
        const subscriptions = client.from('*').on('*', dispatch).subscribe();

        //const subscriptions = client
        //    .from('nodes')
        //    .on('*', (e) => {
        //        console.log('aonetkoenuhxrygxbenhuxbrceidxnebuxrcdeuxrcd')
        //        dispatch(e)
        //    }).subscribe();
        console.log('subscrobe')

        //return () => { client.removeSubscription(subscriptions); };
    });

    return data_state;
}

export default useDatabase;

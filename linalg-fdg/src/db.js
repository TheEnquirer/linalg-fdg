import { useReducer, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import update from "react-addons-update";

import { supabase_url, supabase_pubkey } from './secrets';
import data from './data';
//data.nodes = data.nodes.map(v => ({ id: v.id, content: v.content, group: v.group }))

const client = createClient(supabase_url, supabase_pubkey);
//client.from('links').delete().match({}).then(console.log);    // VERY DANGEROUS
//client.from('nodes').delete().match({}).then(console.log);    // VERY DANGEROUS
//data.nodes.forEach(n => addNode(n));
//data.links.forEach(n => addLink(n));

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
    if (typeof obj.source !== 'string') obj.source = obj.source.id;
    if (typeof obj.target !== 'string') obj.target = obj.target.id;
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
    if (typeof obj.source !== 'string') obj.source = obj.source.id;
    if (typeof obj.target !== 'string') obj.target = obj.target.id;
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
    const [ data_state, dispatch ] = useReducer(reducer, { nodes: [], links: [] });
    //const [ data_state, dispatch ] = useReducer(reducer, data);

    useEffect(() => {
        const subscriptions = client.from('*').on('*', dispatch).subscribe();
        //return () => { client.removeSubscription(subscriptions); };
    });

    useEffect(async () => {
        const inserter = table => obj => { dispatch({ eventType: "INSERT", table, new: obj }) }
        await client.from('nodes').select().then(t => t.body.forEach(inserter('nodes')));
        //await client.from('links').select().then(t => t.body.forEach(console.log));
        //await client.from('links').select().then(t => t.body.forEach(obj => inserter('links')({ ...obj, source: JSON.parse(obj.source).id, target: JSON.parse(obj.target).id })));
        await client.from('links').select().then(t => t.body.forEach(inserter('links')));
    }, []);
    console.log('data state', data_state);

    return data_state;
}

export default useDatabase;




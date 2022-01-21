import { useReducer, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

import data from './data';
import { supabase_url, supabase_pubkey } from './secrets';

const client = createClient(supabase_url, supabase_pubkey);

/////////////////////////////////////////////////////
// PUSH CHANGES TO DB
/////////////////////////////////////////////////////

export async function addNode(obj) {
    // TODO: impl
}

export async function updateNode(delta) {
    // TODO: impl
}

export async function addEdge(obj) {
    // TODO: impl
}

export async function updateEdge(delta) {
    // TODO: impl
}

/////////////////////////////////////////////////////
// REACT TO DB CHANGES (haha get it? bc its react?? help)
/////////////////////////////////////////////////////

function useDatabase() {
    function reducer(state, action) {
        console.log('reducer', state, action);
    }
    const [ data_state, dispatch ] = useReducer(reducer, data);

    useEffect(() => {
        // https://reactjs.org/docs/hooks-custom.html
        //const subscriptions = client
        //    .from('nodes').on('INSERT', handleNodeInsert)
        //                  .on('UPDATE', handleNodeUpdate)
        //    .from('edges').on('INSERT', handleEdgeInsert)
        //                  .on('UPDATE', handleEdgeUpdate)
        //    .subscribe();
        const subscriptions = client.from('*').on('*', dispatch).subscribe();

        return () => { client.removeSubscription(subscriptions); };
    });

    return data_state;
}

export default useDatabase;

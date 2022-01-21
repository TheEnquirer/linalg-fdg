import { useState, useEffect } from 'react';

import data from './data';

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
    const [ data_state, set_data ] = useState(data);

    useEffect(() => {
        // https://reactjs.org/docs/hooks-custom.html
        return () => { /* unsubscribe */ }
    });

    return data_state;
}

export default useDatabase;


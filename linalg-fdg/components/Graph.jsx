import { useRef, useCallback, useState } from 'react';
import { ForceGraph3D } from 'react-force-graph'

const DD = {
    "nodes": [
	{
	    "id": "Linear Independence",
	    "group": 1,
	    "content":  "# Linear Independence \n A list of vectors is linearly independent if the only way to create a linear combination equal to zero is to set all constants multuplying the vectors to zero."
	},

	{
	    "id": "Linear Dependence",
	    "group": 1,
	    "content":  "# Linear Dependence \n A list of vectors is linearly dependent if a linear combination with not all coefficients equal to 0 results"
	},
    ],
    "links": [

	{
	    "source": "Linear Independence",
	    "target": "Linear Dependence",
	    "value": 1,
	    "Content":  ""
	},
    ]
}

const Graph = (props) => {
    //fetch('../datasets/miserables.json').then(res => res.json()).then(data => {
    //const FocusGraph = () => {

    const fgRef = useRef();
    const handleClick = useCallback(node => {
	// Aim at node from outside it
	const distance = 40;
	const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);

	fgRef.current.cameraPosition(
	    { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
	    node, // lookAt ({ x, y, z })
	    3000  // ms transition duration
	);
    }, [fgRef]);

    return (
	<>
	    {/*<ForceGraph3D
		ref={fgRef}
		graphData={DD}
		nodeLabel="id"
		nodeAutoColorBy="group"
		onNodeClick={handleClick}
	    />*/}
	</>
    )
};

export default Graph;

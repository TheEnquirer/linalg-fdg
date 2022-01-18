import './App.css';
import { useState, useRef, useCallback } from 'react';
import ForceGraph3D from 'react-force-graph-3d';

function App() {

    const data = { "nodes": [ { "id": "Linear Independence", "group": 1, "content":  "# Linear Independence \n A list of vectors is linearly independent if the only way to create a linear combination equal to zero is to set all constants multiplying the vectors to zero." }, { "id": "Linear Dependence", "group": 1, "content":  "# Linear Dependence \n A list of vectors is linearly dependent if there is a linear combination with not all coefficients equal to 0 that can result in a combination equal to 0." }, ], "links": [ { "source": "Linear Independence", "target": "Linear Dependence", "value": 1, "Content":  "Linear Independence and Linear Dependence are opposite terms dealing with the same concept of unique information. A Linearly Independent list contains vectors that each provide some form of new information, whereas in a Linearly Dependent list there are vectors that provide only repetitive information: they are in the span of the other vectors." }, ] }

    const fgRef = useRef();
    const handleClick = useCallback(node => {
	const distance = 40;
	const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);
	fgRef.current.cameraPosition(
	    { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
	    node, // lookAt ({ x, y, z })
	    3000  // ms transition duration
	);
    }, [fgRef]);

    return (
	<div className="">
	    <ForceGraph3D
		ref={fgRef}
		graphData={data}
		nodeLabel="id"
		nodeAutoColorBy="group"
		onNodeClick={handleClick}
	    />
	</div>
    );
}

export default App;

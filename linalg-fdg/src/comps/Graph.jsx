import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../App.css';
import { useState, useRef, useCallback } from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import ModalContent from './ModalContent';

const style = {
    position: 'absolute',
    //top: '50%',
    //left: '88%',
    top: '3rem',
    right: "3rem",
    bottom: '3rem',
    minWidth: "40%",
    width: "40%",
    //transform: 'translate(-50%, -50%)',
    //width: '20%',
    //height: '95%',
    //height: '80%',
    bgcolor: 'background.paper',
    border: '0px solid #000',
    borderRadius: "8px",
    outline: "none",
    backgroundColor: "#202024",
    //boxShadow: 24,
    p: 4,
};

const data = { "nodes": [ { "id": "Linear Independence", "group": 1, "content":  "# Linear Independence \n A list of vectors is linearly independent if the only way to create a linear combination equal to zero is to set all constants multiplying the vectors to zero." }, { "id": "Linear Dependence", "group": 1, "content":  "# Linear Dependence \n A list of vectors is linearly dependent if there is a linear combination with not all coefficients equal to 0 that can result in a combination equal to 0." }, ], "links": [ { "source": "Linear Independence", "target": "Linear Dependence", "value": 1, "Content":  "Linear Independence and Linear Dependence are opposite terms dealing with the same concept of unique information. A Linearly Independent list contains vectors that each provide some form of new information, whereas in a Linearly Dependent list there are vectors that provide only repetitive information: they are in the span of the other vectors." }, ] }

const Graph = (props) => {
    const [open, setOpen] = useState(false);
    const [curNode, setCurNode] = useState(null);
    const handleOpen = (e) => {
	setCurNode(e)
	setOpen(true);
    }
    const handleClose = (e) => { setOpen(false) }

    const fgRef = useRef();
    const handleClick = useCallback(node => {
	//console.log(node)
	handleOpen(node);
	const distance = 40;
	const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);
	fgRef.current.cameraPosition(
	    { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
	    node, // lookAt ({ x, y, z })
	    1000  // ms transition duration
	);
    }, [fgRef]);

    return (
	<>
	    <ForceGraph3D
		ref={fgRef}
		graphData={data}
		nodeLabel="id"
		nodeAutoColorBy="group"

		onNodeClick={handleClick}
		nodeResolution={50}
		//linkWidth={0.1}
		//linkCurvature={0.1}
		linkDirectionalParticles={1}
		linkDirectionalParticleResolution={12}
		//nodeColor={'#d65d0e'}
		//nodeAutoColorBy={'red'}
		//backgroundColor={'#303030'}
		//backgroundColor={'#1d2021'}
		//backgroundColor={'red'}
		//nodeColor={'blue'}
	    />
	    <div>
		<Modal
		    aria-labelledby="transition-modal-title"
		    aria-describedby="transition-modal-description"
		    open={open}
		    onClose={handleClose}
		    closeAfterTransition
		    BackdropComponent={Backdrop}
		    BackdropProps={{
			timeout: 500,
		    }}
		>
		    <Fade in={open}>
			<Box sx={style}>
			    <ModalContent node={curNode} />
			</Box>
		    </Fade>
		</Modal>
	    </div>
	</>
    );
}

export default Graph;

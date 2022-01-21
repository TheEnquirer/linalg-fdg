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
import Searcher from './Searcher';
import data from '../data'

const style = {
    position: 'absolute',
    top: '3rem',
    right: "3rem",
    bottom: '3rem',
    minWidth: "40%",
    width: "40%",
    bgcolor: 'background.paper',
    border: '0px solid #000',
    borderRadius: "8px",
    outline: "none",
    backgroundColor: "#202024",
    //p: 4,
};

const searchStyle = {
    position: 'absolute',
    top: '4rem',
    width: "35rem",
    height: "6rem",
    left: "0",
    right: "0",
    margin: "auto",

    bgcolor: 'background.paper',
    border: '0px solid #000',
    borderRadius: "8px",
    outline: "none",
    backgroundColor: "#202024",
    //boxShadow: 24,
    //p: 4,
};



const Graph = (props) => {
    const [open, setOpen] = useState(false);
    const [searching, setSearching] = useState(false);
    const [curNode, setCurNode] = useState(null);
    const handleOpen = (e) => {
	//console.log(e)
	setCurNode(e)
	setOpen(true);
    }
    const handleClose = (e) => { setOpen(false) }

    const handleSearchStart = (e) => { setSearching(true) }
    const handleSearchEnd = (e) => { setSearching(false) }

    const fgRef = useRef();

    const getNodeFromName = (name) => {
	let nodes = fgRef.current.scene().children[3].children
	for (const node of nodes) {
	    if (node.__graphObjType == 'node') {
		if (node.__data.id == name) {
		    return node.__data
		}
	    }
	}
    }

    const focusNode = useCallback(node => {
	handleOpen(node);
	const distance = 40;
	const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);
	fgRef.current.cameraPosition(
	    { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio },
	    node,
	    1000
	);
    }, [fgRef]);

    const handleClick = useCallback(node => {
	//focusNode(node)
	handleSearchStart()
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
		scene={(e) => {
		    console.log(e)
		}}
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
		<Modal
		    aria-labelledby="transition-modal-title"
		    aria-describedby="transition-modal-description"
		    open={searching}
		    onClose={handleSearchEnd}
		    closeAfterTransition
		    BackdropComponent={Backdrop}
		    BackdropProps={{
			timeout: 200,
		    }}
		>
		    <Fade in={searching}>
			<Box sx={searchStyle}>
			    {/*<ModalContent node={curNode} />*/}
			    <Searcher />
			</Box>
		    </Fade>
		</Modal>
	    </div>
	</>
    );
}

export default Graph;

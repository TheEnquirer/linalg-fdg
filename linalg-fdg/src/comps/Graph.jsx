import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../App.css';
import { useState, useRef, useCallback, useEffect } from 'react';
import { withShortcut, ShortcutProvider, ShortcutConsumer } from 'react-keybind'
import ForceGraph3D from 'react-force-graph-3d';
import ModalContent from './ModalContent';
import Searcher from './Searcher';
import NodeAdder from './NodeAdder';

//import data from '../data'
import useData, { addNode, updateNode, addLink, updateLink } from '../db';
import staticData from '../data';
//import data from '../data'
//import data, { addNode, updateNode, addEdge, updateEdge } from '../db';
import { BsSearch } from 'react-icons/bs';
import { IoIosAdd as IoAdd } from 'react-icons/io';

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
    p: 4,
};

const searchStyle = {
    position: 'absolute',
    top: '4rem',
    width: "35rem",
    height: "5rem",
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

const addStyle = {
    width: "30rem",
    height: "30rem",

    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    bgcolor: 'background.paper',
    border: '0px solid #000',
    borderRadius: "8px",
    outline: "none",
    backgroundColor: "#202024",
    //boxShadow: 24,
    p: 4,
};


const Graph = (props) => {
    const [open, setOpen] = useState(false);
    const [searching, setSearching] = useState(false);
    const [curNode, setCurNode] = useState(null);

    //const data = useData();
    const [data, setData] = useState({"nodes": [], "links": []});

    useEffect(() => {
	let onlyNodes = structuredClone(staticData)
	onlyNodes.links = []

	setTimeout(() => setData(onlyNodes), 200);
	setTimeout(() => setData(staticData), 600);
    }, []);

    const [adding, setAdding] = useState(false);
    const handleOpen = (e) => {
	//console.log(e)
	setCurNode(e)
	setOpen(true);
    }
    const handleClose = (e) => { setOpen(false) }

    const handleSearchStart = (e) => { setSearching(true) }
    const handleSearchEnd = (e) => { setSearching(false) }

    const handleAddEnd = (node) => { 
	//console.log(node)
	setAdding(false) 
    }

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
	focusNode(node)
	//handleSearchStart()
    }, [fgRef]);

    const launchAddNode = () => {
	setAdding(true)
    }

    const handleKeyDown = (e) => {
	console.log(e)
	if (e.ctrlKey && e.which == 69) {
	    launchAddNode();
	}
	if ((e.ctrlKey && e.which === 75) || (e.metaKey && e.which == 75)) {
	    setSearching(true)
	}
    }


    const handleSearchSubmit = (name) => {
	handleClose()
	handleSearchEnd()
	//focusNode(getNodeFromName(name))
	setTimeout(function(){
	    focusNode(getNodeFromName(name))
	}, 187);
    }

    const handleLinkNav = (name) => {
	handleClose()
	setTimeout(function(){
	    focusNode(getNodeFromName(name))
	}, 250);
    }

    const handleNodeAddition = (node) => {
	setAdding(false)
	//console.log(node)
	addNode(node)
    }

    const handleNodeUpdate = (node) => {
	//console.log(node)
	updateNode(node)
    }

    useEffect(() => {
	document.addEventListener("keydown", handleKeyDown.bind(this))
    }, [])

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
		//nodeAutoColorBy={'red'} backgroundColor={'#303030'}
		//backgroundColor={'#1d2021'}
		//backgroundColor={'red'}
		//nodeColor={'blue'}
	    />
	    <div>
		<div className="flex flex-row fab space-x-5">
		    <div 
			className="flex flex-row items-center justify-center" 
			onClick={() => setSearching(true)}
		    > 
			<BsSearch className="mr-1"/>
			<span className="rounded-sm bg-zinc-700" style={{paddingLeft: "2px", paddingRight: "2px"}}>
			    {"<C-k>"}
			</span>
		    </div>
		    <div 
			className="flex flex-row items-center justify-center" 
			onClick={() => setAdding(true)}
		    > 
			<IoAdd className="mr-1" style={{
			    fontSize: "13px",
			}}/>
			<span className="rounded-sm bg-zinc-700" style={{paddingLeft: "2px", paddingRight: "2px"}}>
			    {"<C-e>"}
			</span>
		    </div>

		</div>
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
			    <ModalContent node={curNode} nav={handleLinkNav} handleNodeUpdate={handleNodeUpdate} data={data}
				handleLinkSubmit={(v) => {
				    addLink(v)
				}}
			    />
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
			    <Searcher
				handleSearchSubmit={handleSearchSubmit}
				data={data}
			    />
			</Box>
		    </Fade>
		</Modal>
		<Modal
		    aria-labelledby="transition-modal-title"
		    aria-describedby="transition-modal-description"
		    open={adding}
		    onClose={handleAddEnd}
		    closeAfterTransition
		    BackdropComponent={Backdrop}
		    BackdropProps={{
			timeout: 200,
		    }}
		>
		    <Fade in={adding}>
			<Box sx={addStyle}>
			    {/*<ModalContent node={curNode} />*/}
			    <NodeAdder handleNodeAddition={handleNodeAddition}/>
			</Box>
		    </Fade>
		</Modal>
	    </div>
	</>
    );
}

export default Graph;

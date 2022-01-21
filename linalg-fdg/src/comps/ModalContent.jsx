import { useState, useRef, useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
//import { oneDark } from '@codemirror/theme-one-dark';
//import { materialDarker } from '@codemirror/material-darker';
import '../App.css';
import data from '../data'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { BiExpandAlt } from 'react-icons/bi';
import { BsArrowReturnRight, BsArrowBarRight } from 'react-icons/bs';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ModalContent = (props) => {
    //console.log(Object.keys(props.node), props.node, "the content??")
    //console.log(props.node.content)
    const [ev, setEv] = useState(props.node.content)
    const [name, setName] = useState(props.node.id)
    const [group, setGroup] = useState(String(props.node.group))
    const getLinks = () => {
	let links = data['links'].filter((v) =>
	    {
		if (v.source.id == props.node.id || v.target.id == props.node.id) {
		    return v
		}
	    }
	)
	return links
    }

    return (
	<div className="h-full overflow-auto border-0 border-red-400">
	    <div className="">
		    <p className="pb-4 pl-0 text-xl font-bold text-gray-100">
		<div className="flex flex-row">
			<div className="flex flex-row items-center">
			    <p className="mr-4" >Vertex </p>
			    <CodeMirror
				value={name}
				editable={false}
				theme={'dark'}
				onChange={(e) => {
				    setName(e)
				}}
				extensions={[
				    markdown({ base: markdownLanguage, codeLanguages: languages })
				]}

			    /> 
			</div>
		</div>
		    </p>
		{/*<hr />
		<br />*/}
		<CodeMirror
		    value={ev}
		    theme={'dark'}
		    onChange={(e) => {
			setEv(e)
		    }}
		    extensions={[
			markdown({ base: markdownLanguage, codeLanguages: languages })
		    ]}

		/>
		<div className="flex flex-row items-center mt-3">
		    <p className="mr-2 text-gray-100"> Group: </p>
		    <CodeMirror
			value={group}
			theme={'dark'}
			width={"10rem"}
			onChange={(e) => {
			    setGroup(e)
			}}
			extensions={[
			    markdown({ base: markdownLanguage, codeLanguages: languages })
			]}

		    />
		    <div className="items-center justify-center p-2 ml-4 text-sm font-bold text-center text-gray-300 align-middle rounded bg-slate-700 hover:bg-slate-600 transition"
			    onClick={() => {
				props.handleNodeUpdate(
				    { 
					id: name,
					group: group,
					content: ev,
				    }
				)
			    }}>
			    Push Changes
			</div>
		</div>
	    </div>
	    <p className="pb-4 pl-0 mt-4 text-xl font-bold text-gray-100">
		Edges
	    </p>
	    {getLinks().map((i, idx) => {
		return (
		    <div className="mb-3" key={idx}>
			<Accordion sx={{
			    //border: "1px solid red",
			    background: "#313140",
			    //color: "#f9f9f9",
			    color: "#d7d7ee",
			    fontWeight: "700",
			}}>
			    <AccordionSummary
				expandIcon={<BiExpandAlt className="text-gray-100"/>}
				aria-controls="panel1a-content"
				id="panel1a-header"
				sx={{
				    paddingTop: "10px",
				    paddingBottom: "10px",
				}}
			    >
				<div className="flex flex-row">
				    <BsArrowReturnRight className="mt-1 mr-1"/>
				    <p className="pl-1 pr-1 rounded-sm hover:bg-gray-700 transition-all"
					onClick={() => {
					    props.nav(i.source.id)
					}}
				    >{i.source.id}</p>
				    <BsArrowBarRight className="mt-0 ml-4 mr-5 text-2xl"/>
				    <p className="pl-1 pr-1 rounded-sm hover:bg-gray-700 transition-all"
					onClick={() => {
					    props.nav(i.target.id)
					}}
				    >{i.target.id}</p>
				</div>
			    </AccordionSummary>
			    <AccordionDetails>
				<div className="-mt-4 font-normal">
				    <CodeMirror
					value={i.Content}
					theme={'dark'}
					//onChange={(e) => {
					//    setEv(e)
					//}}
					extensions={[
					    markdown({ base: markdownLanguage, codeLanguages: languages })
					]}

				    />
				{/*{i.Content}*/}
				</div>
			    </AccordionDetails>
			</Accordion>
		    </div>
		)
	    })}
	</div>
    );
}

export default ModalContent;

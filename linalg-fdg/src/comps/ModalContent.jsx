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
    const getLinks = () => {
	let links = data['links'].filter((v) =>
	    {
		if (v.source.id == props.node.id || v.target.id == props.node.id) {
		    return v
		}
	    }
	)
	//console.log(links)
	return links
    }

    return (
	<div className="h-full overflow-auto border-0 border-red-400">
	    <div className="">
		<p className="text-gray-100 pb-4 pl-0 font-bold text-xl">
		Vertex
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
	    </div>
	    <p className="text-gray-100 pb-4 pl-0 font-bold text-xl mt-4">
		Edges
	    </p>
	    {getLinks().map((i) => {
		return (
		    <div className="mb-3">
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
				    {i.source.id}
				    <BsArrowBarRight className="mr-5 ml-5 mt-0 text-2xl"/>
				    {i.target.id}
				</div>
			    </AccordionSummary>
			    <AccordionDetails>
				<div className="font-normal -mt-4">
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

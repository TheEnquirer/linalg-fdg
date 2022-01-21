import { useState, useRef, useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import '../App.css';
import data from '../data'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { BiExpandAlt } from 'react-icons/bi';
import { BsArrowReturnRight, BsArrowBarRight } from 'react-icons/bs';

const NodeAdder = (props) => {
    const [name, setName] = useState("Vertex Name")
    const [group, setGroup] = useState("1")
    const [content, setContent] = useState("# Title \nThe content of the vertex!")

    return (
	<div className="flex flex-col h-full overflow-auto border-0 border-red-400 space-y-4">
	    <div className="flex flex-row items-center justify-center w-full border-0 space-x-4">
		<p className="font-bold text-gray-100">Name: </p>
		<CodeMirror
		    value={name}
		    theme={'dark'}
		    width={"15rem"}
		    onChange={(e) => { setName(e) }} 
		    extensions={[ markdown({ base: markdownLanguage, codeLanguages: languages }) ]}
		/>
	    </div>
	    <div className="flex flex-row items-center justify-center w-full border-0 space-x-4">
		<p className="font-bold text-gray-100">Group: </p>
		<CodeMirror
		    value={group}
		    theme={'dark'}
		    width={"15rem"}
		    onChange={(e) => { setName(e) }} 
		    extensions={[ markdown({ base: markdownLanguage, codeLanguages: languages }) ]}
		/>
	    </div>
	    <div className="flex flex-col items-center justify-center w-full border-0 space-x-4">
		<p className="font-bold text-gray-100">Content: </p>
	    </div>
		<CodeMirror
		    value={content}
		    theme={'dark'}
		    //width={"15rem"}
		    onChange={(e) => { setContent(e) }} 
		    extensions={[ markdown({ base: markdownLanguage, codeLanguages: languages }) ]}
		/>
	    <div className="flex items-center justify-center">
		<div
		    className="p-2 mb-2 text-gray-200 bg-indigo-900 rounded-lg pr-7 pl-7 hover:bg-indigo-800 transition-all"
		    onClick={() => {
			props.handleNodeAddition({
			    id: name,
			    group: group,
			    content: content
			})
		    }}
		>Save</div>
	    </div>
	</div>
    );
}

export default NodeAdder;

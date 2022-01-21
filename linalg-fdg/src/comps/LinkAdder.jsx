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
import TextField from '@mui/material/TextField';
//import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { matchSorter } from 'match-sorter';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import Popper from '@mui/material/Popper';
import { useTheme, styled } from '@mui/material/styles';



const StyledPopper = styled(Popper)({
    [`& .${autocompleteClasses.listbox}`]: {
	backgroundColor: "#30303d",
	paddingLeft: "1rem",
	paddingTop: "1rem",
    },
});

const useFocus = () => {
    const htmlElRef = useRef(null)
    const setFocus = () => {
	//console.log(htmlElRef)
	htmlElRef.current &&  htmlElRef.current.focus()
    }

    return [ htmlElRef, setFocus ] 
}
const LinkAdder = (props) => {
    const [inputRef, setInputFocus] = useFocus()
    const [inpVal, setInpVal] = useState(null)
    const [linkContent, setLinkContent] = useState("")
    const [submittable, setSubmittable] = useState(false)
    const [target, setTargetNode] = useState(null)
    let dataOptions = props.data.nodes.map((n) => { return { title: n.id, node: n } })
    //console.log(dataOptions.map(v => v.title))
    //console.log(props.source)

    return (
	<div className="flex flex-col items-center justify-center h-full border-0 border-red-500">
	    {setInputFocus()}
	    <div className="mb-4 font-bold text-gray-100">
		Source: {props.source.id}
	    </div>
	    <Autocomplete
		disablePortal
		PopperComponent={StyledPopper}
		autoComplete={true}
		autoHighlight={true}
		onChange={(e, v) => {
		    setTargetNode(v.title)
		    //console.log(e, v.title)
		}}
		onKeyDown={(e) => {
		    setTargetNode(e.target.value)
		    console.log(e.target.value, "the valueee")
		    if (e.code == "Enter") {
			setTimeout(function(){
			    //console.log(e.target.value)
			    if (dataOptions.map(v => v.title).includes(e.target.value)) {
				//props.handleLinkSubmit(e.target.value)
				setSubmittable(true)
				setTargetNode(e.target.value)
			    }
			}, 0);
		    }
		}}

		id="combo-box-demo"
		autoFocus
		options={dataOptions}
		getOptionLabel={(option) => option.title}
		sx={{ 
		    width: "100%",
		    pl: 2,
		    pr: 2,
		    marginTop: "-0.4rem",
		    color: "white !important",
		    '& .MuiAutocomplete-endAdornment': {
			display: "none"
		    },
		    '& .MuiAutocomplete-root': {
			color: "white"
		    },
		    '& .MuiAutocomplete-input': {
			color: "#f5f5f5"
		    },
		    '& .MuiAutocomplete-inputRoot': {
			color: "#f5f5f5"
		    },
		    '& .MuiAutocomplete-paper': { color: "#f5f5f5"
		    },
		    //backgroundColor: "red",
		}}

		classes={{
		    //border: "1px solid red !important",
		}}
		renderInput={(params) => (
		    <TextField {...params} 
			label="Edge target" 
			//color="#ffffff"
			autoFocus={true}
			margin="normal"
			sx={{
			    //color: "white !important",
			    //border: "none"
			}}
			ref={inputRef}
		    />
		)}
		renderOption={(props, option, { inputValue }) => {
		    const matches = match(option.title, inputValue);
		    const parts = parse(option.title, matches);

		    return (
			<div className="h-full m-0 text-gray-300">
			    <li {...props} className="mb-2">
				<div>
				    {parts.map((part, index) => (
					<span
					    key={index}
					    style={{
						fontWeight: part.highlight ? 700 : 400,
					    }}
					>
					    {part.text}
					</span>
				    ))}
				</div>
			    </li>
			</div>
		    );
		}}
	    />
	    <div className="mt-4 font-bold text-gray-100"> 
		Edge content
	    </div>

	    <CodeMirror
		value={linkContent}
		theme={'dark'}
		width={"24.2rem"}
		onChange={(e) => {
		    setLinkContent(e)
		}}
		extensions={[
		    markdown({ base: markdownLanguage, codeLanguages: languages })
		]}
		className="mt-4"
	    />
	    <div className="flex items-center justify-center mt-5">
		<div
		    className="p-2 mb-2 text-gray-200 bg-indigo-900 rounded-lg pr-7 pl-7 hover:bg-indigo-800 transition-all"
		    onClick={() => {
			console.log(dataOptions.map(v => v.title), target)
			if (dataOptions.map(v => v.title).includes(target)) {
			    console.log("sugmitt")
			    props.handleLinkSubmit({
				"source": props.source.id,
				"target": target,
				"value": 1,
				"Content":  linkContent
			    })
			}
		    }}
		>Add</div>
	    </div>
	</div>
    );
}

export default LinkAdder;

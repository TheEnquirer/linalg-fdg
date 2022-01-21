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
	//border: '1px solid red',
	backgroundColor: "#30303d",
	//marginTop: "1rem",
	paddingLeft: "1rem",
	paddingTop: "1rem",
	//borderRadius: "12px",
	//border: "12px solid red",
	//borderStyle: "outset",
	//boxSizing: 'border-box',
	'& ul': {
	    //padding: 0,
	    //margin: 0,
	},
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
const Searcher = (props) => {
    const filterOptions = (options, { inputValue }) => matchSorter(options, inputValue);
    const [inputRef, setInputFocus] = useFocus()
    const [inpVal, setInpVal] = useState("hii")
    //const [m, setM] = useState()
    let dataOptions = data.nodes.map((n) => { return { title: n.id, node: n } })

    return (
	<div className="flex items-center justify-center h-full border-0 border-red-500">
	    {setInputFocus()}
	    <Autocomplete
		disablePortal
		PopperComponent={StyledPopper}
		value={inpVal}
		onChange={(event, newValue) => {
		    setInpVal(newValue);
		}}
		onKeyDown={(e) => {
		    if (e.code == "Enter") {
			let ms = []
			for (const i of dataOptions) {
			    console.log(match(i.title, inpVal))
			}
			//console.log(m)
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
			label="Search" 
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
	</div>
    );
}

export default Searcher;

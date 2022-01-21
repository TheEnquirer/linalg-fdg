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
	console.log(htmlElRef)
	htmlElRef.current &&  htmlElRef.current.focus()
    }

    return [ htmlElRef, setFocus ] 
}
const Searcher = (props) => {
    const filterOptions = (options, { inputValue }) => matchSorter(options, inputValue);
    const [inputRef, setInputFocus] = useFocus()

    return (
	<div className="flex items-center justify-center h-full border-0 border-red-500">
	    {setInputFocus()}
	    <Autocomplete
		disablePortal
		PopperComponent={StyledPopper}
		//filterOptions={filterOptions}
		id="combo-box-demo"
		autoFocus
		options={top100Films}
		getOptionLabel={(option) => option.title}
		sx={{ 
		    width: "100%",
		    pl: 2,
		    pr: 2,
		    marginTop: "-0.4rem",
		    //outline: "red",
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




const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King', year: 2003, },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
];

import { useState, useRef, useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { oneDark } from '@codemirror/theme-one-dark';

const ModalContent = (props) => {
    //console.log(Object.keys(props.node), props.node, "the content??")
    //console.log(props.node.content)
    const [ev, setEv] = useState(props.node.content)

    return (
	<div className="h-full border-2 border-red-400">
	    {/*{props.node.content}*/}
	    <CodeMirror
		value={ev} 
		theme={oneDark}
		//className="h-full"
		onChange={(e) => {
		    setEv(e)
		}}
		extensions={[
		    markdown({ base: markdownLanguage, codeLanguages: languages })
		]} 
	    />
	</div>
    );
}

export default ModalContent;

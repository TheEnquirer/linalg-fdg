import { useState, useRef, useCallback } from 'react';

const ModalContent = (props) => {
    //console.log(Object.keys(props.node), props.node, "the content??")
    //console.log(props.node.content)

    return (
	<div>
	    {props.node.content}
	</div>
    );
}

export default ModalContent;

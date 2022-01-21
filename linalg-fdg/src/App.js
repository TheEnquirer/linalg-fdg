import './App.css';
import { useState, useRef, useCallback } from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import { withShortcut, ShortcutProvider, ShortcutConsumer } from 'react-keybind'
import Graph from './comps/Graph';


function App() {

    return (
	<div className="">
	    <Graph />
	</div>
    );
}

export default App;

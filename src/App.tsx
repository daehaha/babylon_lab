import { useState } from 'react'
import './App.css'
import EnterPano from './scene/EnterPano';


import * as BABYLON from 'babylonjs';
function App() {
	const [visible, setVisible] = useState(false);
	const handler = () => setVisible(true);
	const closeHandler = () => {
		setVisible(false);
		console.log("closed");
	};







	return (
		<>
			<h1 className="text-3xl font-bold underline">
				Hello world:)
			</h1>
			<div className='w-full h-full bg-red-100'>
				This is red line
			</div>
			<EnterPano />

		</>
	)
}

export default App

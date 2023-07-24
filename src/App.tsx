import { useState } from 'react'
import './App.css'
import EnterPano from './scene/EnterPano';
import { AdvancedDynamicTexture } from '@babylonjs/gui/2D';
import { Button as BTN } from '@babylonjs/gui/2D';
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
				<EnterPano></EnterPano>
			</div>


		</>
	)
}

export default App

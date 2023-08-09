import { useState } from 'react'
import './App.css'
import EnterScene from './world/EnterScene';

function App() {
	const [visible, setVisible] = useState(false);
	const handler = () => setVisible(true);
	const closeHandler = () => {
		setVisible(false);
	};

	return (
		<>
			<div className="fixed right-10">  this is tell</div>
			<EnterScene />

		</>
	)
}

export default App

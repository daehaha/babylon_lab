import { useState } from 'react'
import './App.css'
import EnterScene from './world/EnterScene';

function App() {
	const [visible, setVisible] = useState(false);
	const handler = () => setVisible(true);
	const closeHandler = () => {
		setVisible(false);
		console.log("closed");
	};

	return (
		<>
			<dia className="fixed right-10">  this is tell</dia>
			<EnterScene />

		</>
	)
}

export default App

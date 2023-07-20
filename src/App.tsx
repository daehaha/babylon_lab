import { useState } from 'react'
import './App.css'
import Button from '@nextui-org/react/button';
import EnterPano from './scene/EnterPano';
import { Modal, Text } from '@nextui-org/react';
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
			<Button auto shadow onPress={handler}>
				Open modal
			</Button>

			<Modal
				closeButton
				aria-labelledby="modal-title"
				open={visible}
				onClose={closeHandler}
			>
				<Modal.Header>
					<Text id="modal-title" size={18}>
						Welcome to
						NextUI
					</Text>
				</Modal.Header>
				<Modal.Body>
					<div>Tihs is modal!</div>
				</Modal.Body>
				<Modal.Footer>
					<Button auto flat color="error" onPress={closeHandler}>
						Close
					</Button>
					<Button auto onPress={closeHandler}>
						Sign in
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default App

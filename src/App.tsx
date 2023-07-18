import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@nextui-org/react/button';
import EnterScene from './scene/EnterScene';
function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<h1 className="text-3xl font-bold underline">
				Hello world!
			</h1>
			<div className='w-full h-full'>

				<EnterScene></EnterScene>
			</div>
			<Button>Click me</Button>

		</>
	)
}

export default App
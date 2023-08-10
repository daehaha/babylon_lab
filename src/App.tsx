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
			<div className="fixed left-20 top-20">


				<div className="card w-96 bg-base-100 shadow-xl ">
					<figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
					<div className="card-body">
						<h2 className="card-title">Shoes!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div className="card-actions justify-end">
							<button className="btn btn-primary">Buy Now</button>
						</div>
					</div>
				</div>

			</div>

			<div className="w">
				<EnterScene />
				이렇게 .. 긴방이 지나면 !
				이 비기가 흐르고 나면
			</div>

		</>
	)
}

export default App

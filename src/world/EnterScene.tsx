import React, { useState } from "react";
import "@babylonjs/loaders/glTF";
import S_A from './scene/S_A'
import S_B from './scene/S_B'
import SL1PBR from './scene/SL1PBR'
import SceneContainer from './SceneContainer'

const EnterPano = () => {
	const A = SL1PBR();
	const B = S_B();
	const [scene, SetScene] = useState(A);
	const clickMe = () => {
		SetScene(B);
		console.log(scene);

	}

	return (
		<div>
			<SceneContainer antialias onSceneReady={scene.onSceneReady} onRender={scene.onRender} id="my-canvas" key={scene} />
		</div>
	);
}

export default EnterPano;

import React, { useState } from "react";
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder, SceneLoader } from "@babylonjs/core";
import SceneComponent from 'babylonjs-hook';
import * as BABYLON from 'babylonjs';
import { GUI } from "@babylonjs/core";
import SimpleBox from '../unit/SimpleBox'
import SimpleButton from '../unit/SimpleButton'
import { AdvancedDynamicTexture, Button } from '@babylonjs/gui/2D';
import "@babylonjs/loaders/glTF";
import S_A from './S_A'
import S_B from './S_B'
import SceneBasic from './SceneBasic'


const EnterPano = () => {
	const A = S_A();
	const B = S_B();
	const [scene, SetScene] = useState(A);
	const clickMe = () => {
		SetScene(B);
		console.log(scene);

	}

	return (
		<div>
			<SceneBasic antialias onSceneReady={scene.onSceneReady} onRender={scene.onRender} id="my-canvas" key={scene} />
			<button onClick={clickMe} className="mt-5" >This my button</button>
		</div>
	);
}

export default EnterPano;

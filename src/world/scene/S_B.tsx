import * as Babylon from "@babylonjs/core";
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder, SceneLoader } from "@babylonjs/core";
import SimpleBox from '../object/SimpleBox'
import SimpleButton from '../object/SimpleButton'
import { AdvancedDynamicTexture, Button } from '@babylonjs/gui/2D';
import "@babylonjs/loaders/glTF";
import "@babylonjs/loaders/glTF";
const S_B = () => {
	let box: any;
	const onSceneReady = (scene) => {
		var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2, Math.PI / 2, 5, BABYLON.Vector3.Zero(), scene);
		const canvas = scene.getEngine().getRenderingCanvas();
		camera.attachControl(canvas, true);
		camera.inputs.attached.mousewheel.detachControl();
		const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
		light.intensity = 0.7;
		//box = MeshBuilder.CreateBox("box", { size: 2 }, scene);
		//box.position.y = 3;
		//MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
		//add 360 dom 
		var dome = new BABYLON.PhotoDome(
			"testdome",
			"/panolens/2.png",
			{
				resolution: 64,
				size: 4000,
				useDirectMapping: false
			},
			scene
		);
		dome.fovMultiplier = 2.0;


		var advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI");
		let btn = SimpleButton();
		advancedTexture.addControl(btn);
		const result = SceneLoader.ImportMeshAsync(null, "/glb/", "logo.glb", scene);
	};
	const onRender = (scene) => {

	};
	return {
		onSceneReady,
		onRender
	}
}

export default S_B;

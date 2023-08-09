import * as BABYLON from 'babylonjs';
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder, SceneLoader } from "@babylonjs/core";
import SimpleBox from '../object/SimpleBox'
import SimpleButton from '../object/SimpleButton'
import { AdvancedDynamicTexture, Button } from '@babylonjs/gui/2D';
import "@babylonjs/loaders/glTF";
import "@babylonjs/loaders/glTF";
const S_A = () => {
	let box: any;
	const onSceneReady = (scene) => {
		var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2, Math.PI / 2, 5, BABYLON.Vector3.Zero(), scene);
		const canvas = scene.getEngine().getRenderingCanvas();
		camera.attachControl(canvas, true);
		camera.noRotationConstraint = true;
		camera.lowerAlphaLimit = Math.PI / 2;
		camera.upperAlphaLimit = Math.PI / 2;
		camera.lowerBetaLimit = Math.PI / 4;
		camera.upperBetaLimit = Math.PI / 4;
		camera.lowerRadiusLimit = 5;
		camera.upperRadiusLimit = 50;


		const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
		box = SimpleBox(scene);
		box.position.y = -5;
		light.intensity = 0.7;


		var dome = new BABYLON.PhotoDome(
			"testdome",
			"/panolens/main.jpg",
			{
				resolution: 64,
				size: 4000,
				useDirectMapping: false
			},
			scene
		);
		dome.fovMultiplier = 2.0;


		let logo: any;
		const result = SceneLoader.ImportMeshAsync(null, "/glb/", "logo.glb", scene).then((result) => {
			logo = result.meshes[0];
			logo.position.z = -1;
			logo.position.y = 5;
			logo.rotation.y = BABYLON.Tools.ToRadians(90);
		});




	};

	const onRender = (scene) => {
		let camera = scene.getCameraByName("camera");

		if (camera.radius > 70) camera.radius = 70; if (camera.radius < 5) camera.radius = 5;
	};
	return {
		onSceneReady,
		onRender
	}
}

export default S_A;

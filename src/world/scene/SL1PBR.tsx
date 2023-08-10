import * as BABYLON from "@babylonjs/core";
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder, SceneLoader } from "@babylonjs/core";
import SimpleBox from '../object/SimpleBox'
import SimpleButton from '../object/SimpleButton'
import { AdvancedDynamicTexture, Button } from '@babylonjs/gui/2D';
import "@babylonjs/loaders/glTF";
const SL1PBR = () => {
	let box: any;
	const onSceneReady = (scene) => {
		var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2, Math.PI / 2, 5, BABYLON.Vector3.Zero(), scene);
		const canvas = scene.getEngine().getRenderingCanvas();
		// Set horizontal rotation limits (alpha)
		camera.lowerAlphaLimit = Math.PI / 4; // Adjust as needed
		camera.upperAlphaLimit = (Math.PI * 3) / 4; // Adjust as needed
		// Set vertical rotation limits (beta)
		camera.lowerBetaLimit = 0.1; // Adjust as needed
		camera.upperBetaLimit = Math.PI / 1.5; // Adjust as needed
		// Set radius limits
		camera.lowerRadiusLimit = 5;
		camera.upperRadiusLimit = 50;
		camera.attachControl(canvas, true);
		camera.inputs.attached.mousewheel.detachControl();


		box = SimpleBox(scene);
		box.position.y = -5;
		//add interction

		var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 0.2, scene);
		sphere.position.x = 2;
		sphere.actionManager = new BABYLON.ActionManager(scene);
		sphere.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, function() {
			console.log("clicked");
		}));


		//add sky box 
		var environment = scene.createDefaultEnvironment({
			createSkybox: false,
		});


	};

	const onRender = (scene) => {
		if (box !== undefined) {
			const deltaTimeInMillis = scene.getEngine().getDeltaTime();
			const rpm = 10;
			//	box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
		}
	};
	return {
		onSceneReady,
		onRender
	}
}

export default SL1PBR;

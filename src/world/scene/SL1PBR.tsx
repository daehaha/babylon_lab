import * as BABYLON from 'babylonjs';
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder, SceneLoader } from "@babylonjs/core";
import SimpleBox from '../object/SimpleBox'
import SimpleButton from '../object/SimpleButton'
import { AdvancedDynamicTexture, Button } from '@babylonjs/gui/2D';
import "@babylonjs/loaders/glTF";
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
		camera.upperBetaLimit = Math.PI / 2.5; // Adjust as needed

		// Set radius limits
		camera.lowerRadiusLimit = 5;
		camera.upperRadiusLimit = 50;



		camera.attachControl(canvas, true);
		camera.inputs.attached.mousewheel.detachControl();
		box = SimpleBox(scene);
		box.position.y = -5;



		scene.createDefaultEnvironment({ createGround: false, createSkybox: false });
		scene.activeCamera.alpha = Math.PI / 2;
		var light = new BABYLON.SpotLight(
			"spot",
			new BABYLON.Vector3(0, 2.8, 0),
			new BABYLON.Vector3(0, -1, 0),
			BABYLON.Tools.ToRadians(160),
			1,
			scene
		);
		light.intensity = 100;




		//add sky box 
		var environment = scene.createDefaultEnvironment({
			createSkybox: false,
		});

		var skyMaterial = new BABYLON.StandardMaterial("skybox", scene);
		skyMaterial.backFaceCulling = false;
		skyMaterial.reflectionTexture = new BABYLON.CubeTexture("/cubemap/box", scene);
		skyMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
		skyMaterial.diffuseColor = new BABYLON.Color3(1, 1, 1);
		skyMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
		skyMaterial.reflectionTexture.level = 1.4;




		var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", { size: 1000.0 }, scene);
		skybox.material = skyMaterial;
		// add post processing 
		var pipeline = new BABYLON.DefaultRenderingPipeline(
			"defaultPipeline",
			true, // HDR will be set to true automatically if supported by the engine, or false otherwise
			scene,
			scene.cameras // Add the camera(s) that you want the post-process to affect
		);

		// Adjust pipeline settings
		pipeline.imageProcessing.exposure = 1.0; // Increase the exposure value to make the scene brighter
		pipeline.imageProcessing.contrast = 1.0; // Default value, adjust as needed
		pipeline.imageProcessing.toneMappingEnabled = true; // Enable tone mapping for HDR effects
		pipeline.imageProcessing.toneMappingType = BABYLON.ImageProcessingConfiguration.TONEMAPPING_ACES; // Use ACES tone mapping for a more realistic look

		// Adjust the environment intensity to make reflections brighter
		scene.environmentIntensity = 2.0;



		let logo: any;
		const result = SceneLoader.ImportMeshAsync(null, "/glb/", "logo-pbr.glb", scene).then((result) => {
			logo = result.meshes[0];
			logo.position.z = -1;
			logo.position.y = 5;

		});

		//add box
		var shape = BABYLON.MeshBuilder.CreateBox("shape", {}, scene);
		var shapeMaterial = new BABYLON.StandardMaterial("mat", scene);
		shapeMaterial.backFaceCulling = true;
		shapeMaterial.reflectionTexture = new BABYLON.CubeTexture("/cubemap/box", scene);
		shapeMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.CUBIC_MODE;
		shapeMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
		shapeMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
		shape.material = shapeMaterial;
		shape.rotation.y = Math.PI / 8;
		shape.rotation.x = -Math.PI / 8;


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

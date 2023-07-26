import React from "react";
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder } from "@babylonjs/core";
import SceneComponent from 'babylonjs-hook';
import * as BABYLON from 'babylonjs';
let box: any;

const onSceneReady = (scene) => {
	// This creates and positions a free camera (non-mesh)
	const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
	// This targets the camera to scene origin
	camera.setTarget(Vector3.Zero());
	const canvas = scene.getEngine().getRenderingCanvas();
	// This attaches the camera to the canvas
	camera.attachControl(canvas, true);
	// This creates a light, aiming 0,1,0 - to the sky (non-mesh)
	const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

	// Default intensity is 1. Let's dim the light a small amount
	light.intensity = 0.7;

	// Our built-in 'box' shape.
	box = MeshBuilder.CreateBox("box", { size: 2 }, scene);

	// Move the box upward 1/2 its height
	box.position.y = 10;

	// Our built-in 'ground' shape.
	MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
	var skybox = BABYLON.Mesh.CreateBox("skyBox", 100.0, scene);
	var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	skyboxMaterial.backFaceCulling = false;
	skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("/panolens/1.jpg", scene);
	skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
	skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	skyboxMaterial.disableLighting = true;
	skybox.material = skyboxMaterial;


};

/**
 * Will run on every frame render.  We are spinning the box on y-axis.
 */
const onRender = (scene) => {
	if (box !== undefined) {
		const deltaTimeInMillis = scene.getEngine().getDeltaTime();

		const rpm = 10;
		box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
	}
};

const EnterScene = () => (
	<div>
		<SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} id="my-canvas" />
	</div>
);

export default EnterScene;

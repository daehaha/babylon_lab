import React from "react";
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder } from "@babylonjs/core";
import SceneComponent from 'babylonjs-hook';
import * as BABYLON from 'babylonjs';
let box: any;

const onSceneReady = (scene) => {
	var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2, Math.PI / 2, 5, BABYLON.Vector3.Zero(), scene);

	const canvas = scene.getEngine().getRenderingCanvas();
	// This attaches the camera to the canvas
	camera.attachControl(canvas, true);
	camera.inputs.attached.mousewheel.detachControl();
	// This creates a light, aiming 0,1,0 - to the sky (non-mesh)
	const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

	// Default intensity is 1. Let's dim the light a small amount
	light.intensity = 0.7;
	// Our built-in 'box' shape.
	box = MeshBuilder.CreateBox("box", { size: 2 }, scene);
	// Move the box upward 1/2 its height
	box.position.y = 3;
	// Our built-in 'ground' shape.
	MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
	//add 360 dom 
	var dome = new BABYLON.PhotoDome(
		"testdome",
		"/panolens/1.jpg",
		{
			resolution: 64,
			size: 2000,
			useDirectMapping: false
		},
		scene
	);
	dome.fovMultiplier = 2.0;
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

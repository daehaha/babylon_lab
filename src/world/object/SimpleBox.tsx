import * as BABYLON from "@babylonjs/core";
const SimpleBox = (scene) => {
	let box;
	let mat = new BABYLON.StandardMaterial("mat", scene);
	mat.diffuseColor = new BABYLON.Color3(1, 0, 0);
	box = BABYLON.MeshBuilder.CreateBox(
		"newBox",
		{ height: 5, width: 3, depth: 2 },
		scene
	);
	box.material = mat;
	box.position = new BABYLON.Vector3(0, 1, 0);

	box.actionManager = new BABYLON.ActionManager(scene);
	box.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function() {
		console.log("clicked");
	}));


	return box;
};

export default SimpleBox;

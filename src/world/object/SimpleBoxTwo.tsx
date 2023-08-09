import * as BABYLON from "babylonjs";

const SimpleBoxTwo = (scene) => {
	let bot: any;
	const result = SceneLoader.ImportMeshAsync(null, "/glb/", "bot_box.glb", scene).then((result) => {
		bot = result.meshes[0];
		bot.isPickable = true;
		bot.position.z = -1;
		bot.position.y = -2;

		bot.actionManager = new BABYLON.ActionManager(scene);
		// Add a pointer down action to the action manager
		//
		box.actionManager = new BABYLON.ActionManager(scene);
		box.actionManager.registerAction(
			new BABYLON.ExecuteCodeAction(
				BABYLON.ActionManager.OnPickTrigger, () => {
					console.log("click Event");

				}


			));
	});
	return result;
};

export default SimpleBoxTwo;

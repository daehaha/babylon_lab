import * as GUI from "@babylonjs/gui";
import * as BABYLON from "@babylonjs/core";

const Btn_normal = () => {
	var advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
	var button = GUI.Button.CreateImageOnlyButton("but", "https://i.imgur.com/WWzizlq.png");
	button.width = "100px";
	button.height = "100px";
	button.color = "transparent"
	button.image.detectPointerOnOpaqueOnly = true;
	button.children[0].detectPointerOnOpaqueOnly = true;
	button.onPointerUpObservable.add(function() {
		alert("you did it!");
	});
	advancedTexture.addControl(button);
	return button;
}

export default Btn_normal;

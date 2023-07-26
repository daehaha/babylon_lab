import { AdvancedDynamicTexture, Button } from '@babylonjs/gui/2D';
const SimpleButton = () => {
	var button = Button.CreateSimpleButton("but1", "hey!");
	button.width = 0.2;
	button.height = 0.4;
	button.color = "white";
	button.fontSize = 20;
	button.background = "green";
	button.onPointerUpObservable.add(function() {
		alert("you did it!");
	});
	return button;
}

export default SimpleButton;

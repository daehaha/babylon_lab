import { useEffect, useRef } from "react";
import { Engine, Scene } from "@babylonjs/core";


function LoadingScreen() {
	return (
		<div className="loadingScreen">
			<div className="loadingText">
				<h1>Loading</h1>
				<hr />
				<h3>Experiencing Problems? Contact us at support@hastiludes.com</h3>
			</div>
		</div>
	);
};
function customLoadingScreen() {
	console.log("customLoadingScreen creation")
}
customLoadingScreen.prototype.displayLoadingUI = function() {
	console.log("customLoadingScreen loading")
	return (
		<LoadingScreen />
	)
};
customLoadingScreen.prototype.hideLoadingUI = function() {
	console.log("customLoadingScreen loaded")
	return (
		<LoadingScreen style={{ display: 'none' }} />
	)
};
var loadingScreen = customLoadingScreen();




const SceneContainer = ({ antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady, ...rest }) => {
	const reactCanvas = useRef(null);

	// set up basic engine and scene
	useEffect(() => {
		const { current: canvas } = reactCanvas;

		if (!canvas) return;

		const engine = new Engine(canvas, antialias, engineOptions, adaptToDeviceRatio);

		engine.loadingScreen = loadingScreen;

		const scene = new Scene(engine, sceneOptions);
		if (scene.isReady()) {
			onSceneReady(scene);
		} else {
			scene.onReadyObservable.addOnce((scene) => onSceneReady(scene));
		}

		engine.runRenderLoop(() => {
			if (typeof onRender === "function") onRender(scene);
			scene.render();
		});

		const resize = () => {
			scene.getEngine().resize();
		};

		if (window) {
			window.addEventListener("resize", resize);
		}

		return () => {
			scene.getEngine().dispose();

			if (window) {
				window.removeEventListener("resize", resize);
			}
		};
	}, [antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady]);

	return <canvas ref={reactCanvas} {...rest} />;
};

export default SceneContainer;

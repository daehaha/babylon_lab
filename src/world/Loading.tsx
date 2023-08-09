
interface ILoadingScreen {
	//What happens when loading starts
	displayLoadingUI: () => void;
	//What happens when loading stops
	hideLoadingUI: () => void;
	//default loader support. Optional!
	loadingUIBackgroundColor: string;
	loadingUIText: string;
}
class Loading implements ILoadingScreen {
	//optional, but needed due to interface definitions
	public loadingUIBackgroundColor: string
	constructor(public loadingUIText: string) { }
	public displayLoadingUI() {
		alert(this.loadingUIText);
	}

	public hideLoadingUI() {
		alert("Loaded!");
	}
}

const customLoading = () => {
	return (
		<div>This is custom loading</div>
	)
}

export const customLoading;

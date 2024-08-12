import PrimaryView from '../view/PrimaryView';

export default class BasicController{

	private primaryScreen: PrimaryView = new PrimaryView();
    
	public startSystem():void {
		this.primaryScreen.getFirstScreen();
	}

}
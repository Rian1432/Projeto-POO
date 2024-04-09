import PrimaryScreen from '../view/PrimaryScreen';
import DesktopController from './DesktopController'; 

export default class BasicController{

	private primaryScreen: PrimaryScreen = new PrimaryScreen(new DesktopController());
    
	public startSystem():void {
		this.primaryScreen.getFirstScreen();
	}

}
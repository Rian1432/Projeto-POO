import PrimaryView from '../views/PrimaryView';
import ComputersView from '../views/ComputersView';
import DesktopController from './DesktopController';

export default class BasicController{

	private primaryScreen: PrimaryView = new PrimaryView(this);
	computersView: ComputersView = new ComputersView(new DesktopController());
    
	public startSystem():Promise<void> {
		return this.primaryScreen.getFirstScreen();
	}

	getComputerView ():Promise<void> {
		return this.computersView.getView();
	}

}
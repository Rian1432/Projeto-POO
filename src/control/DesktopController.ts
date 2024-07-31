import Datacenter from '../db/Datacenter';
import Desktop from '../model/Desktop';

export default class DesktopController{

	private db: Datacenter = new Datacenter(); 

	public getNewDesktop(): Desktop{
		return new Desktop();
	}

	public registerDesktop(computer: Desktop){
		this.db.addDesktop(computer);
	}

	public getDesktops(): Desktop[]{
		return this.db.getDesktops();
	}
}

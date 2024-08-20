import Desktop from '../model/Desktop';
import {DesktopService} from '../services/desktopService/DesktopService';
import {DesktopInterface} from '../services/desktopService/DesktopInterface';

export default class DesktopController{

	private desktopService:DesktopService = new DesktopService();

	public getNewDesktop(): Desktop{
		return new Desktop();
	}

	public async registerDesktop(computer: Desktop){
		return this.desktopService.create(computer);
	}

	public async getDesktops(): Promise<DesktopInterface[]> {
		return this.desktopService.index();
	}
	
	public async removeDesktop(desktop:DesktopInterface):Promise<DesktopInterface> {
		return this.desktopService.delete(desktop.id);
	}
}

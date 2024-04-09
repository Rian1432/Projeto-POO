import Datacenter from '../db/Datacenter';
import Desktop from '../model/Desktop';

export default class FoodController{

	private datacenter: Datacenter = new Datacenter(); 

	public getNewDesktop(): Desktop{
		return new Desktop();
	}

	public registerNewFood(computer: Desktop){
		this.datacenter.addNewDesktop(computer);
	}

	public listAllFoods(): void{
		console.log(this.datacenter.desktopList);
	}

}
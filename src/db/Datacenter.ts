import Desktop from '../model/Desktop';
import Laptop from '../model/Laptop';
import Order from '../model/Order';
import Sale from '../model/Sale';
import Seller from '../model/Seller';

export default class DataCenter {
	sellerList:Seller[] = [];
	desktopList:Desktop[] = [];
	laptopList:Laptop[] = [];
	saleList:Sale[] = [];
	OderList:Order[] = [];

	addNewDesktop(newDesktop:Desktop):void {
		this.desktopList.push(newDesktop);
	}
}
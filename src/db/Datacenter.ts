import Desktop from '../model/Desktop';
// import Laptop from '../model/Laptop';
// import Sale from '../model/Sale';
// import Seller from '../model/Seller';

export default class DataCenter {
	private desktopList:Desktop[] = [];
	// private sellerList:Seller[] = [];
	// private laptopList:Laptop[] = [];
	// private saleList:Sale[] = [];

	public getDesktops():Desktop[] {
		return this.desktopList;
	}

	public addDesktop(newDesktop:Desktop):void {
		this.desktopList.push(newDesktop);
	}

	public removeDesktop(desktop:Desktop):void {
		const desktopIndex = this.desktopList.indexOf(desktop);

		if(desktopIndex !== -1) {
			this.desktopList.splice(desktopIndex, 1);
		}
	}

	// public getLaptops():Laptop[] {
	// 	return this.laptopList;
	// }
	//
	// public addLaptop(newLaptop:Laptop):void {
	// 	this.laptopList.push(newLaptop);
	// }
	//
	// public removeLaptop(laptop:Laptop):void {
	// 	const laptopIndex = this.laptopList.indexOf(laptop);
	// 	if(laptopIndex !== -1) {
	// 		this.laptopList.splice(laptopIndex, 1);
	// 	}
	// }
	//
	// public getSellers():Seller[] {
	// 	return this.sellerList;
	// }
	//
	// public addSeller(newSeller:Seller):void {
	// 	this.sellerList.push(newSeller);
	// }
	//
	// public removeSeller(seller:Seller):void {
	// 	const sellerIndex = this.sellerList.indexOf(seller);
	// 	if(sellerIndex !== -1) {
	// 		this.sellerList.splice(sellerIndex, 1);
	// 	}
	// }
	//
	// public getSales():Sale[] {
	// 	return this.saleList;
	// }
	//
	// public addSale(newSale:Sale):void {
	// 	this.saleList.push(newSale);
	// }
	//
	// public removeSale(sale:Sale):void {
	// 	const saleIndex = this.saleList.indexOf(sale);
	// 	if(saleIndex !== -1) {
	// 		this.saleList.splice(saleIndex, 1);
	// 	}
	// }
}
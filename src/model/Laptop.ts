import Computer from './Computer';

export default class Laptop extends Computer {
	private screenSize:number;
  
	getScreenSize():number {
		return this.screenSize;
	}

	setScreenSize(size:number):void {
		this.screenSize = size;
	}
}

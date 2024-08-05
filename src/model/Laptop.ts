import Computer from './Computer';
import {useTypesEnum} from '../enums/UseTypes';

export default class Laptop extends Computer {
	private screenSize:number;

	constructor(modelName:string = '', price:number = 0, useType:useTypesEnum = useTypesEnum.Basic) {
		super(modelName, price, useType);
		this.screenSize = 15.6;
	}
  
	getScreenSize():number {
		return this.screenSize;
	}

	setScreenSize(size:number):void {
		this.screenSize = size;
	}
}

import Computer from './Computer';
import { useTypesEnum } from '../enums/UseTypes';

export default class Desktop extends Computer{
	private withMonitor:boolean;
	private withPeripherals:boolean;

	constructor(modelName:string = '', price:number = 0, useType:useTypesEnum = useTypesEnum.Basic) {
		super(modelName, price, useType);
		this.withMonitor = false;
		this.withPeripherals = false;
	}

	public isWithMonitor():boolean {
		return this.withMonitor;
	}

	public setIfHaveMonitor(hasMonitor:boolean):void {
		this.withMonitor = hasMonitor;
	}

	public isWithPeripherals():boolean {
		return this.withPeripherals;
	}

	public setIfHavePeripherals(hasPeripherals:boolean):void {
		this.withPeripherals = hasPeripherals;
	}
}
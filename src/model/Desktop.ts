import Computer from './Computer';
import { useTypesEnum } from '../enums/UseTypes';

export default class Desktop extends Computer{
	private withMonitor:boolean;
	private withPeripherals:boolean;

	constructor(modelName:string = '', price:number = 0, useType?:useTypesEnum, withMonitor?:boolean) {
		super(modelName, price, useType);

		if(withMonitor) {
			this.withMonitor = withMonitor;
		} else {
			this.withMonitor = false;
		}

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

	getComputerInfo(): string {
		return `
		ID: ${this.getId()}
		Nome: ${this.getModelName()}
		Preço: ${this.getPrice()}
		Tipo de uso: ${this.getUseType()}
		Tipo de computador: Computador de mesa
		`;
	}
}
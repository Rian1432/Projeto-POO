import { v4 as uuidv4 } from 'uuid';
import { useTypesEnum } from '../enums/UseTypes';

export default abstract class Computer {
	private readonly id:string;
	private modelName:string;
	private price:number;
	private useType:useTypesEnum;

	protected constructor(modelName:string, price:number, useType?:useTypesEnum) {
		this.id = uuidv4();
		this.modelName = modelName;
		this.price = price;

		if (useType) {
			this.useType = useType;
		} else {
			this.useType = useTypesEnum.Basic;
		}
	}

	public getId():string {
		return this.id;
	}

	public getModelName():string {
		return this.modelName;
	}

	public setModelName(modelName:string):void {
		this.modelName = modelName;
	}

	public getPrice():number {
		return this.price;
	}

	public setPrice(price:number):void {
		this.price = price;
	}

	public getUseType():useTypesEnum {
		return this.useType;
	}
   
	public setUseType(useType: useTypesEnum):void {
		this.useType = useType;
	}
}

export default class Computer {
	private id:number;
	private modelName:string;
	private price:number;
	private useType:useTypes;

	constructor(){
	}

	public getId():number {
		return this.id;
	}

	public setId(id:number):void {
		this.id = id;
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

	public getUseType():useTypes {
		return this.useType;
	}
   
	public setUseType(useType:useTypes):void {
		this.useType = useType;
	}
}

enum useTypes {
  'Basic'= 'basic',
  'Performance' = 'performance',
  'Gamer' = 'gamer',
}
import { v4 as uuidv4 } from 'uuid';

export default class Sale {
	private readonly id:string;
	private saleOrderId:number;
	private createdAt:Date;

	public constructor(saleOrderId:number) {
		this.id = uuidv4();
		this.saleOrderId = saleOrderId;
		this.createdAt = new Date();
	}

	public getId():string {
		return this.id;
	}

	public getSaleOrderId():number {
		return this.saleOrderId;
	}

	public setSaleOrderId(saleOrderId:number):void {
		this.saleOrderId = saleOrderId;
	}

	public getCreatedAt():Date {
		return this.createdAt;
	}

	public setCreatedAt(newDate:Date):void {
		this.createdAt = newDate;
	}
}
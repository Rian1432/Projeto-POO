export default class Sale {
	private id:number;
	private saleOrderId:number;
	private createdAt:Date;

	public constructor() {
		this.createdAt = new Date();
	}

	public getId():number {
		return this.id;
	}

	public setId(id:number):number {
		return this.id = id;
	}

	public getSaleOrderId():number {
		return this.saleOrderId;
	}

	public setSaleOrderId(saleOrderId:number):number {
		return this.saleOrderId = saleOrderId;
	}

	public setCreatedAt():Date {
		return this.createdAt;
	}
}
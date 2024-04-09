export default class Seller {
	private id:number;
	private name:string;
	private role:string;

	private getId():number {
		return this.id;
	}

	private setId(id:number):void {
		this.id = id;
	}

	private getName():string {
		return this.name;
	}

	private setName(name:string):void{
		this.name = name;
	}

	private getRole():string {
		return this.role;
	}

	private setRole(role:string):void{
		this.role = role;
	}
}
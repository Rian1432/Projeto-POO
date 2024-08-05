import { v4 as uuidv4 } from 'uuid';

export default class Seller {
	private readonly id:string;
	private name:string;
	private role:string;

	constructor(name:string, role:string) {
		this.id = uuidv4();
		this.name = name;
		this.role = role;
	}

	private getId():string {
		return this.id;
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
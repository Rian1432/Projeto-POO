export default class Client {
	private id:number;
	private name:string;
	private cpf:string;
	private birthDate:string;

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

	private getCpf():string {
		return this.cpf;
	}

	private setCpf(cpf:string):void{
		this.cpf = cpf;
	}

	private getBirthDate():string {
		return this.birthDate;
	}

	private setBirthDate(birthDate:string):void{
		this.birthDate = birthDate;
	}
}
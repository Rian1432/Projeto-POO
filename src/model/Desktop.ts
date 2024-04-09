import Computer from './Computer';

export default class Desktop extends Computer{
	private withMonitor:boolean;
	private withPeripherals:boolean;

	constructor() {
		super();
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
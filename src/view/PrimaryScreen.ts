import promptSync from 'prompt-sync';
import DesktopController from '../control/DesktopController';
import Desktop from '../model/Desktop';

export default class PrimaryScreen{

	private DesktopController: DesktopController;

	constructor(DesktopController: DesktopController){
		this.DesktopController = DesktopController;
	}
	private prompt = promptSync();

	public getFirstScreen():void {
        
       
		let showScreen: boolean = false;
		while (!showScreen) {
			const choice = this.prompt('Escolha:\n1 - Computadores\n2 - Vendedores\n3 - Sair');
              
			switch (choice) {
			case '1':
				this.registerDesktop(this.DesktopController.getNewDesktop());
				break;
        
			case '2':
				console.log('digitou 2');
                
				break;
			case '3':
				showScreen = true;
				break;
			default:
				console.log('Invalid answer!');
			}
		}
      

	}

	public registerDesktop(Desktop: Desktop): void{
		const name = this.prompt('Digite o nome do modelo');
		Desktop.setModelName(name);
		this.DesktopController.registerDesktop(Desktop);
		console.log(this.DesktopController.getDesktops());
	}
}
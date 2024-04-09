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
			const choice = this.prompt('Escolha:\n1 - Cadastro Comida\n2 - Listar\n3 - Sair');
              
			switch (choice) {
			case '1':
				const Desktop: Desktop = this.DesktopController.getNewDesktop();
				this.registerFood(Desktop);
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

	public registerFood(Desktop: Desktop): void{
		const name = this.prompt('Digite o nome do produto alimentício');
		Desktop.setModelName(name);
		this.DesktopController.registerNewFood(Desktop);
		this.DesktopController.listAllFoods();
	}
}
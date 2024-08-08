import promptSync from 'prompt-sync';
import DesktopController from '../control/DesktopController';
import ComputersView from './ComputersView';

export default class PrimaryScreen{

	private prompt = promptSync({sigint: true});
	private computersView: ComputersView = new ComputersView(new DesktopController());

	constructor(){
	}

	public getFirstScreen():void {

		let showScreen: boolean = true;
		while (showScreen) {
			const choice = this.prompt('Escolha:\n 1 - Computadores\n 2 - Vendedores\n 3 - Vendas\n 4 - Sair\n Opção escolhida: ');

			switch (choice) {
			case '1':
				this.computersView.getView();
				break;

			case '2':
				console.log('digitou 2');
				break;

			case '3':
				console.log('digitou 3');
				break;

			case '4':
				showScreen = false;
				break;

			default:
				console.log('Resposta inválida!');
			}
		}
	}
}
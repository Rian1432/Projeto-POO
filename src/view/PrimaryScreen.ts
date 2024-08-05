import promptSync from 'prompt-sync';
import DesktopController from '../control/DesktopController';
import Desktop from '../model/Desktop';
import { useTypesEnum } from '../enums/UseTypes';

export default class PrimaryScreen{

	private DesktopController: DesktopController;
	private prompt = promptSync({sigint: true});

	constructor(DesktopController: DesktopController){
		this.DesktopController = DesktopController;
	}

	public getFirstScreen():void {

		let showScreen: boolean = true;
		while (showScreen) {
			const choice = this.prompt('Escolha:\n1 - Computadores\n2 - Vendedores\n3 - Sair\n Opção escolhida: ');

			switch (choice) {
			case '1':
				this.registerDesktop(this.DesktopController.getNewDesktop());
				break;

			case '2':
				console.log('digitou 2');
				break;

			case '3':
				showScreen = false;
				break;

			default:
				console.log('Resposta inválida!');
			}
		}
	}

	public registerDesktop(Desktop: Desktop): void{
		const name = this.prompt('Digite o nome do modelo: ');
		const price = parseInt(this.prompt('Digite o preço: '));

		Desktop.setModelName(name);
		Desktop.setPrice(price);
		Desktop.setUseType(useTypesEnum.Basic);

		this.DesktopController.registerDesktop(Desktop);
		console.log(this.DesktopController.getDesktops());
	}
}
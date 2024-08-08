import promptSync from 'prompt-sync';
import DesktopController from '../control/DesktopController';
import Desktop from '../model/Desktop';
import {useTypesEnum} from '../enums/UseTypes';

export default class ComputersView  {
	private prompt = promptSync({sigint: true});

	constructor(private DesktopController: DesktopController) {
	}

	public getView () {
		let showScreen: boolean = true;
		while (showScreen) {
			const choice = this.prompt('Escolha:\n 1 - criar computador\n 2 - listar computadores\n 3 - Sair\n Opção escolhida: ');

			switch (choice) {
			case '1':
				this.registerDesktop(this.DesktopController.getNewDesktop());
				break;

			case '2':
				this.showDesktops();
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
		this.showDesktops();
	}

	public showDesktops():void {
		console.log(this.DesktopController.getDesktops());
	}
}
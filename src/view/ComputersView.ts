import DesktopController from '../control/DesktopController';
import Desktop from '../model/Desktop';
import {input, select} from '@inquirer/prompts';
import {useTypesEnum} from '../enums/UseTypes';

export default class ComputersView  {

	constructor(private desktopController: DesktopController) {
	}

	public async getView ():Promise<void> {

		let showScreen: boolean = true;
		while (showScreen) {

			const answer = await select({
				message: 'Selecione uma opção:',
				choices: [
					{	name: 'criar computador', value: '1'},
					{	name: 'Ver lista de computadores', value: '2'},
					{ name: 'Voltar', value: '3'},
				],
			});

			switch (answer) {
			case '1':
				await this.registerDesktop(this.desktopController.getNewDesktop());
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

	public async registerDesktop(Desktop: Desktop): Promise<void>{
		const name = await input({message:'Digite o nome do modelo: '});
		const price = await input({message:'Digite o preço: '});
		const useType = await select({
			message: 'Qual o tipo de uso deste computador?',
			choices: [
				{	name: 'Uso básico', value: useTypesEnum.Basic},
				{ name: 'Uso performático',	value: useTypesEnum.Performance,},
				{ name: 'Uso gamer', value: useTypesEnum.Gamer},
			],
		});

		Desktop.setModelName(name);
		Desktop.setPrice(parseFloat(price));
		Desktop.setUseType(useType);

		this.desktopController.registerDesktop(Desktop);
		console.log(Desktop.getComputerInfo());
	}

	public showDesktops():void {
		console.log(this.desktopController.getDesktops());
	}
}
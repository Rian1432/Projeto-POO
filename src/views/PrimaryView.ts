import {select} from '@inquirer/prompts';
import BasicController from '../controllers/BasicController';

export default class PrimaryView {

	private basicController: BasicController;

	constructor(basicController:BasicController) {
		this.basicController = basicController;
	}

	public async getFirstScreen():Promise<void> {

		let showScreen: boolean = true;
		while (showScreen) {

			const answer = await select({
				message: 'Selecione uma opção: ',
				choices: [
					{
						name: 'Computadores',
						value: '1',
						description: 'Gerenciar estoque de computadores',
					},
					{
						name: 'Sair',
						value: '2',
					},
				],
			});

			switch (answer) {
			case '1':
				await this.basicController.getComputerView();
				break;

			case '2':
				showScreen = false;
				break;

			default:
				console.log('Resposta inválida!');
			}
		}
	}
}
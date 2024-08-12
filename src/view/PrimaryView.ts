import ComputersView from './ComputersView';
import {select} from '@inquirer/prompts';
import DesktopController from '../control/DesktopController';

export default class PrimaryView {

	private computersView: ComputersView = new ComputersView(new DesktopController());

	constructor(){
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
				await this.computersView.getView();
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
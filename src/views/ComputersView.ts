import DesktopController from '../controllers/DesktopController';
import Desktop from '../model/Desktop';
import {input, select, confirm} from '@inquirer/prompts';
import {useTypesEnum} from '../enums/UseTypes';
import {DesktopInterface} from '../services/desktopService/DesktopInterface';
import {SelectOptionsInterface} from '../Interfaces/SelectOptionsInterface';

export default class ComputersView  {

	constructor(private desktopController: DesktopController) {
	}

	public async getView ():Promise<void> {

		let showScreen: boolean = true;
		while (showScreen) {

			const selectAction = await select({
				message: 'Selecione uma opção:',
				choices: [
					{	name: 'criar computador', value: '1'},
					{	name: 'Ver lista de computadores', value: '2'},
					{	name: 'Deletar computador', value: '3'},
					{ name: 'Voltar', value: '4'},
				],
			});

			switch (selectAction) {
			case '1':
				await this.registerDesktop();
				break;

			case '2':
				await this.showDesktops();
				break;

			case '3':
				await this.removeDesktop();
				break;

			case '4':
				showScreen = false;
				break;

			default:
				console.log('Resposta inválida!');
			}
		}
	}

	public async registerDesktop(): Promise<void>{
		const newDesktop:Desktop = this.desktopController.getNewDesktop();

		const name = await input({message:'Digite o nome do modelo: '});
		const price = await input({message:'Digite o preço: '});
		const hasMonitor = await confirm({message: 'Ele possui periféricos?'});
		const hasPeripherals = await confirm({message: 'Ele possui monitor?'});
		const useType = await select({
			message: 'Qual o tipo de uso deste computador?',
			choices: [
				{	name: 'Uso básico', value: useTypesEnum.Basic},
				{ name: 'Uso performático',	value: useTypesEnum.Performance,},
				{ name: 'Uso gamer', value: useTypesEnum.Gamer},
			],
		});

		newDesktop.setModelName(name);
		newDesktop.setPrice(parseFloat(price));
		newDesktop.setUseType(useType);
		newDesktop.setIfHaveMonitor(hasMonitor);
		newDesktop.setIfHavePeripherals(hasPeripherals);

		this.desktopController.registerDesktop(newDesktop)
			.then(() => {
				console.log('O computador foi adicionado com sucesso!');
			})
			.catch((error) => {
				console.error(error);
			});
	}

	public async showDesktops():Promise<void> {
		try {
			const desktopList = await this.desktopController.getDesktops();
			console.log(desktopList);
		}
		catch (error) {
			console.log(error);
			return;
		}
	}

	public async removeDesktop():Promise<void> {
		const choices:SelectOptionsInterface<DesktopInterface>[] = [];
		let desktopList:DesktopInterface[];

		try {
			desktopList = await this.desktopController.getDesktops();
		}
		catch (error) {
			console.log(error);
			return;
		}

		desktopList.forEach((desktop) => {
			choices.push({
				name: `${desktop.modelName} - R$${desktop.price}`,
				value: desktop
			});
		});

		const selectAnswer = await select({
			message: 'Selecione uma opção:',
			choices: choices,
		});
		
		const confirmAnswer = await confirm({message: 'Deseja mesmo excluir este computador?'});

		if (confirmAnswer) {
			await this.desktopController.removeDesktop(selectAnswer);
		}
	}
}
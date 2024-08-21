import BaseService from '../shared/BaseService';
import {DesktopInterface} from './DesktopInterface';

export class DesktopService extends BaseService<DesktopInterface>{
	constructor() {
		super('/desktop');
	}

	async index(params?:{[key:string]: any}): Promise<DesktopInterface[]> {
		const list = await super.index(params);
		if (list.length === 0) {
			throw 'Não há nenhum computador cadastrado no momento!';
		}

		return list;
	}
}
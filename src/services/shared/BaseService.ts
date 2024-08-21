import {AxiosClient} from '../../infra/AxiosClient';
import axiosInstance from '../../infra/AxiosInstance';
import HttpClientInterface from '../../infra/HttpClientInterface';

export default class BaseService<T> {
	private readonly url: string;
	private fetch: HttpClientInterface;

	constructor(url: string) {
		this.url = url;
		this.fetch = new AxiosClient(axiosInstance);
	}

	public async index(params?:{[key:string]: any}): Promise<T[]> {
		const response:any = await this.fetch.get(this.url, params);
		return response.data;
	}

	public async create(data:any):Promise<T> {
		return this.fetch.post(this.url, data);
	}

	public async delete(id:string):Promise<T>{
		return this.fetch.delete(this.url + '/' + id);
	}
}
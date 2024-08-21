import HttpClientInterface from './HttpClientInterface';

export class AxiosClient implements HttpClientInterface {

	private instance:any;

	constructor(instance:any) {
		this.instance = instance;
	}

	public async get<T>(url: string, params?: {[key:string]: any}): Promise<T> {
		return this.instance.get(url, {params: params});
	}

	public async post<T>(url: string, data:T): Promise<T> {
		return this.instance.post(url, data);
	}

	public async put<T>(url: string, data:T): Promise<T> {
		return this.instance.put(url, data);
	}

	public async delete<T>(url: string): Promise<T> {
		return this.instance.delete(url);
	}
}
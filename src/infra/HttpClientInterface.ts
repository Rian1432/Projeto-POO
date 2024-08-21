export default interface HttpClientInterface {
  get<T>(url: string, params?: {[key:string]: string}): Promise<T>;
  post<T>(url: string, data: T): Promise<T>;
  put<T>(url: string, data: T): Promise<T>;
  delete<T>(url: string): Promise<T>;
};

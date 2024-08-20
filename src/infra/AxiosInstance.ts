import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'http://localhost:3000',
});

axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},

	(error) => {
		if (error.response && error.response.status === 404) {
			throw new Error(`${error.response.status} Rota não encontrada!`);
		}

		if (error.response && error.response.status === 500) {
			throw new Error(`${error.response.status} Erro no servidor, tente novamente mais tarde!`);
		}

		return Promise.reject(error);
	}
);

export default axiosInstance;

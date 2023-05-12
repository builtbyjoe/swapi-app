import { AxiosInstance } from 'axios';
import People from '../types/People';

class PeopleApiEndpoint {
    axiosClient: AxiosInstance;

    constructor(axiosClient: AxiosInstance) {
        this.axiosClient = axiosClient;
    }

    async getAll(page: number, searchTerm: string) {
        const response = await this.axiosClient.get<People>(`${import.meta.env.VITE_SWAPI_BASE_URL}/people/?page=${page}${searchTerm !== '' ? `&search=${searchTerm}` : ''}`);
        return response.data;
    }
}

export default PeopleApiEndpoint;

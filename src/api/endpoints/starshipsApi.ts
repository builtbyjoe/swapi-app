import { AxiosInstance } from 'axios';
import Starship from '../types/Starship';

class StarshipsApiEndpoint {
    axiosClient: AxiosInstance;

    constructor(axiosClient: AxiosInstance) {
        this.axiosClient = axiosClient;
    }

    async get(endpoint: string) {
        const response = await this.axiosClient.get<Starship>(endpoint);
        return response.data;
    }
}

export default StarshipsApiEndpoint;

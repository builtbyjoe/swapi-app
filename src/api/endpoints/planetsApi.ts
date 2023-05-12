import { AxiosInstance } from 'axios';
import Planet from '../types/Planet';

class PlanetsApiEndpoint {
    axiosClient: AxiosInstance;

    constructor(axiosClient: AxiosInstance) {
        this.axiosClient = axiosClient;
    }

    async get(endpoint: string) {
        const response = await this.axiosClient.get<Planet>(endpoint);
        return response.data;
    }
}

export default PlanetsApiEndpoint;

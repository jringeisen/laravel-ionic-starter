import axios from 'axios';
import { Preferences } from '@capacitor/preferences';


const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: true,
});

apiClient.interceptors.request.use(
    async request => {
        const token = await Preferences.get({key: 'token'});

        request.headers["Authorization"] = `Bearer ${token.value}`

        return request;
    }
)

export default apiClient;

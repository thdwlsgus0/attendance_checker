import { apiClient } from './apiClient'


export const userService = {
    getDogs: () => {
      return apiClient.get('/api/breeds/image/random');
    },
}
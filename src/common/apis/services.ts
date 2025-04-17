import { apiClient } from './apiClient'


export const userService = {
    getForm: (id: string) => {
      return apiClient.get(`/schedule/${id}`);
    },
}
// src/hooks/useUsers.ts
import { useQuery } from '@tanstack/react-query'
import { userService } from '../apis/services';

interface FormType {
    id: number;
    title: string;
    scheduledTime: string;
    formUrl: string;
}

export function useGetForm(id: string) {
  return useQuery<FormType, Error>({
    queryKey: ['form', id],
    queryFn: async () => {
      const response = await userService.getForm(id);
      return response as FormType;
    },
  })
}
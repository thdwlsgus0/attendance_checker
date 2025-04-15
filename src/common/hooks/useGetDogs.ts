// src/hooks/useUsers.ts
import { useQuery } from '@tanstack/react-query'
import { userService } from '../apis/services';

interface DogType {
    status: string;
    message: string;
}

export function useDogs() {
  return useQuery<DogType, Error>({
    queryKey: ['dogs'],
    queryFn: async () => {
      const response = await userService.getDogs();
      return response as DogType;
    },
  })
}
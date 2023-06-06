import { useQuery } from '@tanstack/react-query';
import apiClient from '../apiClient';
import { Product } from '../types/product';

export const useGetProductsQuery = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: async () => (await apiClient.get<Product[]>(`api/products`)).data,
  });

import { fetchProdutoById, fetchProdutosApi } from "../services/featchApiData";
import { useQuery } from '@tanstack/react-query'

export function useProdutosData() {
  const query = useQuery({
    queryFn: fetchProdutosApi,
    queryKey: ['produtos-data'],
  });
  return query;
}

export function useProdutosDataById(id) {
  const query = useQuery({
    queryFn: ()=>fetchProdutoById(id),
    queryKey: ['produtos-data-id',id],
  });
  return query;
}
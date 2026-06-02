
import axiosClient from "../utils/axios-client";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchProdutosApi = async (id = null) => {
  const url = id ? `${API_URL}/produtos/${id}` : `${API_URL}/produtos`;
  console.log({id, url})
  try{
    const response = await axiosClient.get(url)
    if (response.status !== 200)
        throw new Error("Erro ao carregar produtos!!");
    return response.data.data
  }catch(error){
    console.log(error)
  }finally{
    console.log("Exemplo com Axios!!")
  }
}
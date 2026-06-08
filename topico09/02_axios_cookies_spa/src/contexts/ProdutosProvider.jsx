/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import {axiosClient} from "../utils/axios-client";

const ProdutosContext = createContext({});

const ProdutosProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [error,setError] = useState(false);
  const resourceUrl = '/produtos'

  const loadProdutos = async (id = null) => {
    const url = resourceUrl + (id ? `/${id}` : '');
    try {
      const {data} = await axiosClient.get(url);
      const _data = data?.data;
      console.log({_data});

      if (!_data)
        throw new Error("Erro ao carregar produtos");

      Array.isArray(_data) && _data.reverse();
      setData(_data);
    } catch (error) {
      console.log(error);
      setError(error?.message)
    }
  };

  const addProduto = async (produto=null) => {
    try{
      if(!produto) throw Error("Produto não informado");
      console.log(`Cadastrar novo produto:`,{produto});
      const {data} = await axiosClient.post(resourceUrl, produto)
      if(!data) throw new Error("Erro ao atualizar produto");
      const _data = data?.data;
      const {message} = data;
     console.log({_data,message});
     loadProdutos()
     return message;
    }catch(error){
      console.error(error);
      return error?.response?.data?.message || "Erro ao atualizar produto";
    }
  };

  const editProduto = async (id, produto=null) => {
    try{
      console.log(`Atualizar Produto id: ${id}`,{produto});
      const {data} = await axiosClient.put(`${resourceUrl}/${id}`, produto)
      if(!data) throw new Error("Erro ao atualizar produto");
      const _data = data?.data;
      const {message} = data;
     console.log({_data,message});
     loadProdutos()
     return message;
    }catch(error){
      console.error(error);
      return error?.response?.data?.message || "Erro ao atualizar produto";
    }
  };

  const deleteProduto = async (id) => {
    alert(`Remove Produto id: ${id}`);
    const {data} = await axiosClient.delete(`${resourceUrl}${id}`);
    const {message} = data;
    console.log({message});
    loadProdutos()
    return message;
  };

  return (
    <ProdutosContext.Provider
      value={{
        data,
        error,
        loadProdutos,
        setData,
        addProduto,
        editProduto,
        deleteProduto,
      }}
    >
      {children}
    </ProdutosContext.Provider>
  );
};

export const useProdutosContext = ()=> useContext(ProdutosContext)
export default ProdutosProvider;

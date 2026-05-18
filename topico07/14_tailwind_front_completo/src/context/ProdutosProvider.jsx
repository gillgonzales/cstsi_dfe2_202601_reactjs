
import { createContext, useContext, useState } from "react";
// import { mockDataProducts } from "../mocks/mockData";
import mockProdutosJson from "../mocks/produtos.json"

const MAX_TIMEOUT = 500;
// const MOCKED_PRODUCTS = mockDataProducts.reverse();
const MOCKED_PRODUCTS = mockProdutosJson.reverse()

export const ProdutosContext = createContext({
  produto: {},
  listProdutos: [],
  setProduto: () => { },
  loadProdutos: () => { },
  filterProdutos: () => { },
  findProdutoById: () => { },
});

const ProdutosProvider = ({ children }) => {
  const [produto, setProduto] = useState({});
  const [listProdutos,setListProdutos] = useState([])

  const loadProdutos = () => {
    console.log("Provider")
    setTimeout(() =>setListProdutos(MOCKED_PRODUCTS), MAX_TIMEOUT);
  }

  const findById = (id) => {
    let produto = MOCKED_PRODUCTS.find(produto => produto.id === +id)
    setProduto(produto)
    return produto;
  }  

  const filterProdutos = (searchTerm) => {
    const filteredProducts = MOCKED_PRODUCTS.filter((product) => {
      return product.nome.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setListProdutos(filteredProducts)
  }

  return (
    <ProdutosContext.Provider
      value={{
        produto,
        listProdutos,
        setProduto,
        loadProdutos,
        filterProdutos,
        findProdutoById: findById,
      }}
    >
      {children}
    </ProdutosContext.Provider>
  );
};

export const useProdutoContext=()=>useContext(ProdutosContext);

export default ProdutosProvider;

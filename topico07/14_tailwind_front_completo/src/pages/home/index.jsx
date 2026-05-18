import { useEffect } from "react";
import { Cards } from "../../components/Card/Cards";
import { ProdutosContext, useProdutoContext } from "../../context/ProdutosProvider";

const Home = () => {

  const {loadProdutos,listProdutos} = useProdutoContext()

useEffect(()=>{
  loadProdutos()
},[])

  return (
    <div>
      <div className="w-full 2xl:max-w-screen-xl">
        <div className="mx-auto grid h-fit min-h-80 gap-x-8 gap-y-5 sm:w-fit sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-8">
          {!listProdutos
            ? <p>Carregando...</p>  
            :listProdutos.map((product, i) => (
              <Cards key={`prod_key_${i}`} item={product} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Home;

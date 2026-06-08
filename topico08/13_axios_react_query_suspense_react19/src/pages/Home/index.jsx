import { Suspense, use } from "react";
import { Cards } from "../../components/products/Cards";
import { useProdutosData } from "../../hooks/useProdutosData";

const ProdutosGrid = ({ produtos }) => {
  const data = use(produtos)
  return (
    <>
      <p>Total de Produtos: {data?.length}</p>
      <div className="mx-auto grid h-fit min-h-80 gap-x-8 gap-y-5 sm:w-fit sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-8">
        {data?.map((product, i) => (
          <Cards key={`prod_key_${i}`} item={product} />
        ))}
      </div>
    </>
  );
}

const Home = () => {

  const queryProdutoPromise = useProdutosData()

  return (
    <div>
      <div className="w-full 2xl:max-w-7xl">
        <Suspense fallback={<p>Carregando...</p>}>
          <ProdutosGrid produtos={queryProdutoPromise.promise} />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;

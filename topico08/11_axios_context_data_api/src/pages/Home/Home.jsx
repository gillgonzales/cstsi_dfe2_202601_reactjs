import "./home.css"
import { Suspense, use } from "react"
import { Cards } from "../../components/Cards/Cards";
import { useProdutosContext } from "../../contexts/ProdutosProvider";


const ShowCard = ({itensPromise})=>{
  const produtos = use(itensPromise)
  return produtos.map((product,key) => <Cards key={`card${key}`} item={product} />)
}

const Home = () => {
  const { loadProdutos } = useProdutosContext()
  return (
      <div className="home">
        <div className="products_grid_container">
          <Suspense fallback={<p>Carregando...</p>}>
            <ShowCard itensPromise={loadProdutos()}/>
          </Suspense>
        </div>
      </div>
  );
};

export default Home;

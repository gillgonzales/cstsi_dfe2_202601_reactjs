/* eslint-disable react-hooks/exhaustive-deps */
import "./home.css"
import { useEffect } from "react"
import { Cards } from "../../components/Cards/Cards";
import { useProdutosContext } from "../../contexts/ProdutosProvider";

const Home = () => {
  const { get, loadProdutos } = useProdutosContext()
  const data = get()

  useEffect(() => {
    loadProdutos()
  }, [])

  return (
      <div className="home">
        <div className="products_grid_container">
          {!data?.length
            ? <p>Carregando...</p>
            : data.map((product, key) => (
              <Cards key={`card${key}`} item={product} />
            ))
          }
        </div>
      </div>
  );
};

export default Home;

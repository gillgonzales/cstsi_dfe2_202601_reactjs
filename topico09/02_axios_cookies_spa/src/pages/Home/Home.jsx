import {useEffect} from "react"
import { Cards } from "../../components/Cards/Cards";
import { useProdutosContext } from "../../contexts/ProdutosProvider";
import { HomeGridContainer, HomeMainStyled } from "./home.styled";

const Home = () => {
  const { data, error, loadProdutos } = useProdutosContext()

  useEffect(() => {
    loadProdutos()
  }, [])

  return (
      <HomeMainStyled>
        <HomeGridContainer>
          {data?.length
            ? data.map((product, key) => (
              <Cards key={`card${key}`} item={product} />
            ))
            : error
              ? <p>{error}</p>
              : <p>Carregando...</p>
          }
        </HomeGridContainer>
      </HomeMainStyled>
  );
};

export default Home;

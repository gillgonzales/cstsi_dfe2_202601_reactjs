import { Suspense, use } from 'react'
import { Link, useParams } from "react-router";
import { Cards } from "../../components/products/Cards";
import "./show.css";
import { useProdutosContext } from "../../context/ProdutosProvider";


const ShowCard = ({ promiseProduto }) => {
  const produto = use(promiseProduto)
  console.log(produto)
  return <Cards key={`card${produto.id}`} item={produto} />
}

const Show = () => {

  const { findProduto } = useProdutosContext()
  const { id } = useParams()

  return (
    <div className='w-full h-1/2'>
      <div className="show__container">
        <Suspense fallback={<p>Carregando...</p>}>
          <ShowCard promiseProduto={ findProduto(id)} />
        </Suspense>
      </div>
      <hr />
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Show;
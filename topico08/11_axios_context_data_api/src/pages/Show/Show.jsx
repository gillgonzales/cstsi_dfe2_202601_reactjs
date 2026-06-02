/* eslint-disable react/prop-types */
import "./show.css"
import { Suspense, use } from "react"
import { Cards } from "../../components/Cards/Cards";
import { useProdutosContext } from "../../contexts/ProdutosProvider";
import { Link, useParams } from "react-router";

const ShowCard = ({promiseItem})=>{
    const produto = use(promiseItem)
    return <Cards key={`card${produto.id}`} item={produto} />
}

const Show = () => {
    const { findProduto } = useProdutosContext()
    const { id } = useParams()

    return (
        <div>
            <div className="home">
                <div className="show_grid_container">
                    <Suspense fallback={<p>Carregando...</p>} >
                        <ShowCard promiseItem={findProduto(id)}/>
                    </Suspense>
                </div>
                <Link to="/">Voltar</Link>
            </div>
        </div>
    );
};

export default Show;

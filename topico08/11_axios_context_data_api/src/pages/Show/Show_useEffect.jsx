import "./show.css"
import { useEffect, useState } from "react"
import { Cards } from "../../components/Cards/Cards";
import { useProdutosContext } from "../../contexts/ProdutosProvider";
import { Link, useParams } from "react-router";

const Show = () => {
    const { findProduto } = useProdutosContext()
    const { id } = useParams()

    const [produto, setProduto] = useState({})

    useEffect(() => {
        findProduto(id).then(produto=>setProduto(produto))
        // const loadProdutoById = async ()=>{
        //     setProduto(await findProduto(id))
        // }
        // loadProdutoById()
    }, [])

    return (
        <div>
            <div className="home">
                <div className="show_grid_container">
                    {!produto?.nome
                        ? <p>Carregando...</p>
                        : <Cards key={`card${id}`} item={produto} />
                    }
                </div>
                <Link to="/">Voltar</Link>
            </div>
        </div>
    );
};

export default Show;

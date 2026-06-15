import { useEffect } from "react"
import { Cards } from "../../components/Cards/Cards";
import { useProdutosContext } from "../../contexts/ProdutosProvider";
import { Link, useParams } from "react-router";
import { ShowContainer, ShowMainContent } from "./show.styled";

const Show = () => {
    const { data, loadProdutos } = useProdutosContext()
    const { id } = useParams()

    useEffect(() => {
       loadProdutos(id)
    }, [])

    return (
            <ShowMainContent>
                <ShowContainer>
                    {!data?.nome
                        ? <p>Carregando...</p>
                        : <Cards key={`card${id}`} item={data} />
                    }
                </ShowContainer>
                <Link to="/">Voltar</Link>
            </ShowMainContent>
    );
};

export default Show;

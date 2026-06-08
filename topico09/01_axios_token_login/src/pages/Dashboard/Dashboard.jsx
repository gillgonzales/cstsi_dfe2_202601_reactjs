import React, { useContext } from 'react'
import { ProdutosContext } from '../../contexts/ProdutosProvider'
import { useEffect } from 'react'

const Dashboard = () => {

  const { data, loadProdutos } = useContext(ProdutosContext)
  useEffect(() => {
    loadProdutos()
  }, [])
  return (<>
    <h2>Produtos Dashboard</h2>
    <div>
      <button className={"btn"}>
        Novo Produto
      </button>
    </div>
    {Array.isArray(data) && data?.length > 0
      ? <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Qtd</th>
                    <th>Importado</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {data.map((produto, key) => (
                    <tr key={`produto${key}`}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>{produto.preco}</td>
                        <td>{produto.qtd_estoque}</td>
                        <td>{produto.importado ? 'Sim' : 'Não'}</td>
                        <td>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      : <p>Carregando...</p>}
  </>

  )
}

export default Dashboard
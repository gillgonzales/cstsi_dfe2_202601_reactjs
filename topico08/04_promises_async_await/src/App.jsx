import { useRef, useState } from 'react'
import coffeLogo from './assets/js-coffe.svg'
import './App.css'


function App() {
  const [qtdCafeDisponivel, setQtdCafeDisponivel] = useState(2)
  const inputName = useRef(null)

  const fazerCafe = nome => new Promise((resolve, reject) => {
    if (qtdCafeDisponivel <= 0) {
      return reject(`${nome}, acabou o café!!!`)
    }
    console.log(`Preparando o café de ${nome} !!!`)
    
    setQtdCafeDisponivel(qtdCafeDisponivel - 1)

    setTimeout(() => {     
      resolve(`${nome} ! Seu café está pronto!!!`)
    }, 9000)
  })

  const solicitaCafe = async () => {
    const nome = inputName.current.value
    inputName.current.value = ''
    inputName.current.focus()
    try {
      const resultado = await fazerCafe(nome)//aguarda o retorno da promise
      console.log(resultado)//executa após a resolução da promise
      alert(resultado)
    } catch (error) {
      console.error(error)
      alert(`Desculpe ${nome}! Não podemos atender seu pedido agora. ${error}`)
    }finally{
      console.log(`Obrigado pela preferência ${nome}!!!`)
    }
  }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={coffeLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>Peça um Café!</h1>
      <div className="card">
      <input type='text' ref={inputName} placeholder='Seu nome!!'/>
      <hr/>
        <button
          disabled={qtdCafeDisponivel<=0?'disabled':''} 
          onClick={() => solicitaCafe()} >
          Pedir um Café!!!
        </button>
         {
          qtdCafeDisponivel<=0 &&
            <button onClick={() => console.log("Deve aumentar a qtd de cafe")} >
                Comprar mais grãos!!!
           </button>
        }
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

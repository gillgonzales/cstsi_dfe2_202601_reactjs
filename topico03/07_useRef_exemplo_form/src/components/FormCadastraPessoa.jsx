/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'

const FormCadastraPessoa = ({setPessoa, disabledButton}) => {

  const inputNomeRef = useRef(null)
  const inputAltRef = useRef(null)
  const inputPesoRef = useRef(null)

  const [isDisabledButton, setIsDisabledButton] = useState(disabledButton)


  useEffect(() => {
      console.log(inputNomeRef.current)
      if(inputNomeRef.current.value.trim() ==='')
        setIsDisabledButton(true)
  }, [])
  
  const verificaInputs =()=>{
    // if(inputNomeRef.current.value.trim() !=='')
    //     setIsDisabledButton(false)
    // else  
    //     setIsDisabledButton(true)
    console.log('verifica inputs')
    let disableButton  = inputNomeRef.current.value.trim() ===''
                        || (inputAltRef.current.value.trim() ==='')
                        || (inputPesoRef.current.value.trim() ==='')
    setIsDisabledButton(disableButton)
  }


   const cadastraPessoa = () => {
    const nome = inputNomeRef.current.value.trim()
    const nomeRegex = /^[A-Za-zÁÀÂÃÉÊÍÓÔÕÚÇáàâãéêíóôõúç\s]{3,}$/

    // valida apenas letras e espacos no nome
    if (!nomeRegex.test(nome)) return

      const nova_pessoa = {
        name: nome,
        peso: Number(inputPesoRef.current.value),
        altura: +inputAltRef.current.value
      }
      console.log(nova_pessoa);
      setPessoa(nova_pessoa)
    }

  console.log('render')

  return (
    <div>
      <form>
        <label>Nome:</label>
        <input ref={inputNomeRef}
          onChange={verificaInputs}
          type='text'
          name='nome'
          placeholder='Nome da Pessoa' />
        <br /><label>Altura:</label>
        <input 
          ref={inputAltRef}
          onChange={verificaInputs} 
          type='number' name='alt' step={.1}
          defaultValue={1.7} />
        <br /><label>Peso:</label>
        <input 
          ref={inputPesoRef}
          onChange={verificaInputs}
          type='number' name='peso' step={5}
          defaultValue={70} />
      </form>
       <button onClick={cadastraPessoa} 
            disabled={isDisabledButton}>Cadastrar</button>
    </div>
  )
}

export default FormCadastraPessoa

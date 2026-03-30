import { useState } from 'react';
import './App.css';
import CardImc from './components/CardImc/CardImcFit';
import FormCadastraPessoa from './components/FormCadastraPessoa';

function App() {

  const [pessoa, setPessoa] = useState(null)

  return (
    <>
      {/* {!pessoa && <FormCadastraPessoa setPessoa={setPessoa} disabledButton={pessoa}/>} */}
      <FormCadastraPessoa setPessoa={setPessoa} disabledButton={pessoa}/>
      {/* {!pessoa && <button onClick={cadastraPessoa}>Cadastrar</button>} */}
     {pessoa
        ? <><CardImc key="p3" pessoa={pessoa} /></>
        : <p>Cadastre uma Pessoa</p>
      }
    </>
  );
}

export default App;

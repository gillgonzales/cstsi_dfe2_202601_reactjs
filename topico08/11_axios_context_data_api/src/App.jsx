
import './styles/main.css'
import ProdutosProvider from './contexts/ProdutosProvider.jsx'
import {AppRoutes} from './routes/AppRoutes.jsx'

function App() {
  return <ProdutosProvider>
    <AppRoutes/>
  </ProdutosProvider>
}

export default App

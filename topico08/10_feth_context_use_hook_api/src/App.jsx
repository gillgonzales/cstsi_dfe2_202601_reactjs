import { AppRoutes } from './routes/AppRoutes'
import './styles/Main.css'

import ProdutosProvider from "./context/ProdutosProvider.jsx"

function App() {
  return <ProdutosProvider>
    <AppRoutes/>
  </ProdutosProvider>
}

export default App

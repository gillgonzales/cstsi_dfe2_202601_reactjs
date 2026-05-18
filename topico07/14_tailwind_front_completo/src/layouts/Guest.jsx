
import { Footer } from "../components/Footer/Footer.jsx"
import Header from "../components/Header/Header.jsx"
import { Navbar } from "../components/Navbar/Navbar.jsx"
import ProdutosProvider from "../context/ProdutosProvider.jsx"
import Home from "../pages/home"

function Guest() {
  return (
    <>
    <Navbar/>
    <Header/>
    <main className='flex w-full justify-center p-3 sm:p-10 '>
    <ProdutosProvider>
       <Home/>
    </ProdutosProvider> 
    </main>
    <Footer/>
    </>
  )
}

export default Guest
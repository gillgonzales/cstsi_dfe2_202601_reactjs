import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
} from 'react-router-dom';


const arraRoutes = [
  {
    path:"/",
    element:<App />
  },
  {
    path:"/test",
    element:<div><h1>Router instalado!</h1><a href="/">Voltar</a></div>
  }
]

const router = createBrowserRouter(
   createRoutesFromElements(
    <>
    <Route path={"/"} element={<App />} />
        <Route path={"/test"} element={
          <div>
            <h1>Router instalado!</h1>
            <Link to="/">Voltar(Link)</Link><hr/>
            <a href="/">Voltar(a)</a>
          </div>
        } />
      </>
   ))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

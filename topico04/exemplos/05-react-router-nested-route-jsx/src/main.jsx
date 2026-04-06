import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from 'react-router';
import Ola from './components/Ola/Ola.jsx';
import './index.css';

//Configuração de rotas com objetos
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: (
//       <div>
//         Exemplo de rotas aninhadas!
//         <hr />
//         <Outlet />
//       </div>
//     ),
//     children: [
//       {
//         path: '/',
//         element: <a href="/ola">Olá</a>,
//       },
//       {
//         path: '/ola',
//         element: <Ola />,
//       },
//       {
//         path: '/ola/:name',
//         element: <Ola />,
//       },
//     ],
//   },
// ]);


//Configuração Equivalente com Função e Componentes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <div>
          Exemplo de rotas aninhadas!
          <hr />
          <Outlet />
        </div>
      }
    >
      <Route path="/" element={<Link to="/ola">Olá</Link>} />
      <Route path="ola" element={<Ola />} />
      <Route path="ola/:name" element={<Ola />} />
    </Route>
  )
);

const AppRoutes = () =>(
  <BrowserRouter>
  <Routes>
     <Route
      path="/"
      element={
        <div>
          Exemplo de rotas aninhadas!
          <hr />
          <Outlet />
        </div>
      }
    >
      <Route path="/" element={<Link to="/ola">Olá</Link>} />
      <Route path="ola" element={<Ola />} />
      <Route path="ola/:name" element={<Ola />} />
    </Route>
  </Routes>
  </BrowserRouter>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <AppRoutes/>
  </StrictMode>
);

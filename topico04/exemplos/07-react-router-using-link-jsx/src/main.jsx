import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router';
import Ola from './components/Ola/Ola.jsx';
import './index.css';
import App from './App.jsx';



export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<App/>}
      >
        <Route path="/" element={<Link to="/ola">Olá</Link>} />
        <Route path="ola" element={<Ola />} />
        <Route path="ola/:name" element={<Ola />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);

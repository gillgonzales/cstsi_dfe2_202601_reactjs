import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Guest from "../layouts/Guest";
import Home from "../pages/Home/Home";
import Show from "../pages/Show/Show";
import DashLayout, { Private } from "../layouts/DashLayout";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro";
import Users from "../pages/Users/Users";
import Produtos from "../pages/Dashboard/Produtos/Produtos";
import FornecedoresPage from "../pages/fornecedores/FornecedoresPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Guest />}>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<Show />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/" element={<Private><DashLayout /></Private>}>
        <Route path="/dashboard" element={<Produtos/>} />
        <Route path="/users" element={<Users />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/fornecedores" element={<FornecedoresPage />} />
      </Route>
    </>
  )
);

export default router;

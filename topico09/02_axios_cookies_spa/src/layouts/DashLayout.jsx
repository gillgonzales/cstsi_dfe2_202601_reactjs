/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Navigate, Outlet, useNavigate } from "react-router";
import { useAuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router";
import { useEffect, useRef } from "react";
import { DefaultLogo, DefaultStyled, LogoutIcon } from "./layouts.styled";
import appLogo from "../assets/appLogo.svg";
import logoutIcon from "../assets/logout.svg";

export const Private=({children})=>{
 
  const {isLogged} = useAuthContext();
  
  if (!isLogged)  return <Navigate to="/login" />;
  return children;
}

export default function DashLayout() {
  const { user, logOut} = useAuthContext();
  console.log({ user });
  const navigate = useNavigate();
  
  const onLogout = async () => {
    await logOut()
    navigate("/login");
  };


  return (
    <DefaultStyled>
        <header>
          <DefaultLogo>
            <Link href="/">
              <img src={appLogo} />
            </Link>
          </DefaultLogo>
          <div>Bem vindo, {user?.name} !</div>
          <LogoutIcon>
            <a href="#" onClick={onLogout} >
                <img src={logoutIcon}/>
            </a>
          </LogoutIcon>
        </header>
        <main>
          <aside>
            <Link to="/dashboard">Produtos</Link>
            <Link to="/users">Users</Link>
            <Link to="/cadastro">Novo User</Link>
            <Link to="/fornecedores">Gerenciar Fornecedores</Link>
            <Link to="#">Menu</Link>
          </aside>
          <section>
            <Outlet />
          </section>
        </main>
    </DefaultStyled>
  );
}

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Navigate, Outlet, useNavigate } from "react-router";
import { useAuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import { DefaultLogo, DefaultStyled, LogoutIcon } from "./layouts.styled";
import appLogo from "../assets/appLogo.svg";
import logoutIcon from "../assets/logout.svg";

export const Private = ({ children }) => {

  const { isLogged } = useAuthContext();

  if (!isLogged) return <Navigate to="/login" />;
  if (isLogged instanceof Promise) return <Protected>{children}</Protected>
  return children;
}

export const Protected = ({ children }) => {
  const { isLogged } = useAuthContext();
  const [isProtected, setIsProtected] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogged) navigate('/login')
    if (isLogged === true) setIsProtected(isLogged)
  }, [isLogged])

  return (
    isProtected
      ? children
      : <DefaultStyled>
        <header>
          <DefaultLogo>
            <Link href="/">
              <img src={appLogo} />
            </Link>
          </DefaultLogo>
          <div>Dashboard</div>
        </header>
        <main>
          <section>
            <p>Verificando autenticação...</p>
          </section>
        </main>
      </DefaultStyled>
  );
}

export default function DashLayout() {
  const { user, logOut } = useAuthContext();
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
            <img src={logoutIcon} />
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

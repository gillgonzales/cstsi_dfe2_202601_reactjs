import { Link } from "react-router";
import "./404.css";
import { useTheme } from "../../contexts/ThemeProvider";

export default function NotFound() {

  const {theme} = useTheme()//useContext(ThemeContext)


  console.log({theme})

  return (
    <div className="notfound__container">
      <div className="notfound_panel">
        <h1 style={{color:theme==='dark'?'white':'inherit'}}> Página não Encontrada!!</h1>
        <p>
          Essa rota não existe ou o parâmetro enviado é inválido
        </p>
        <hr />
        <Link to="/"> Página Inicial!!!</Link>
      </div>
    </div>
  );
}
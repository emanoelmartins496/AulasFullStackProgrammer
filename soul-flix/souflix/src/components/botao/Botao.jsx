import { Link } from "react-router-dom"
import "./Botao.css"

function Botao({ mensagem, rota, cimaBaixo, lados, color}){
  return (
    <Link className={'bg-amarelo-s botao-amarelo-s padding'} to={rota}>
        {mensagem}
    </Link>
  )
}

export default Botao
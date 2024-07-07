import "./Cabecalho.css";

function Cabecalho(props) {
  const handleEntrarClick = () => {
    alert("Em desenvolvimento");
  };

  const handleSairClick = () => {
    alert("Em desenvolvimento");
  };

  return (
    <>
      <div className="cabecalho">
        <hr />
        {props.logado && <img width="25" src="/imagens/perfil.png" alt="Perfil" />}

        <p>
          {props.logado
            ? `Bem-vindo(a), ${props.nomeUsuario}!`
            : "Você está desconectado!"}
        </p>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Postagens</a></li>
            {props.logado && <li><a href="#">Meu perfil</a></li>}
            {props.logado && <li><a href="#" onClick={handleSairClick}>Sair</a></li>}
            {!props.logado && <li><a href="#" onClick={handleEntrarClick}>Entrar</a></li>}
          </ul>
        </nav>
        <hr />
      </div>
    </>
  );
}

export default Cabecalho;
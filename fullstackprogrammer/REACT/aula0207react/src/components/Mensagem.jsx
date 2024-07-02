import "./Mensagem.css";

function Mensagem() {
    const textoTitulo = "Batatinha quando nasce se esparrama pelo chão.";
    const nomeAutor = "Emanoel Santos";
    const linkImagem = "https://picsum.photos/200";

    return (
        <section className="mensagem-corpo">
            <h2 className="mensagem-titulo">{textoTitulo}</h2>
            <img src={linkImagem} alt="imagem da mensagem"/>
            <p className="paragrafo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Pariatur natus cupiditate et.
            </p>
            <small>Criado por: {nomeAutor}</small>
        </section> 
    );
}

export default Mensagem; 
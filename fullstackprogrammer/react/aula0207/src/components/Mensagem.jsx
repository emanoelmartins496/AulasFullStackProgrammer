import "./Mensagem.css";

function Mensagem(props) {
    return (
        <section className="mensagem-corpo">
            <h2 className="mensagem-titulo">{props.textoTitulo.toUpperCase()}</h2>
            <img src={props.linkImagem} alt="Imagem da mensagem"/>
            <p className="paragrafo">{props.paragrafo}</p>
            <small>Criado por: {props.nomeAutor}</small>
        </section>
    );
}

export default Mensagem;

<Mensagem
        textoTitulo="As batatas quando nascem se esparramam pelo chão"
        nomeAutor="J. Almir"
        paragrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        linkImagem="https://picsum.photos/200"
/>
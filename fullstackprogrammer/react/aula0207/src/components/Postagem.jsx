import "./Postagem.css";

function Postagem(props) {
    console.log(props);

    return (
        <article className="postagem">
            <h1>{props.titulo}</h1>
            <p>{props.desc}</p>
            <img src={props.linkImagem} />
        </article>
    );
}

export default Postagem;

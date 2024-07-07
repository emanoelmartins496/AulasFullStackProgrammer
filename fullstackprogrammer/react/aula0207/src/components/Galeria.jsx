import './Galeria.css';

function Galeria(props) {
  const valorDesconto = props.precoUnitario - (props.precoUnitario * (props.desconto / 100));

  return (
      <article className="galeria">
        <div className="imagem" style={{ backgroundImage: `url(${props.imagemUrl})` }}></div>
          <p className="titulo">{props.nome}</p>
          <div className="preco">
            {props.desconto > 0 &&
              <p className="preco-original">R$ {props.precoUnitario.toFixed(2)}</p>
            }
            <h4>R$ {props.desconto > 0 ? valorDesconto.toFixed(2) : props.precoUnitario.toFixed(2)}</h4>
            {props.desconto > 0 &&
              <p className="desconto">{props.desconto}% OFF</p>
            }
          </div>
          <p className="descricao">{props.descricao}</p>
      </article>
  );
}

export default Galeria;

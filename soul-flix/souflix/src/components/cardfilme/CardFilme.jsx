import { Badge, Button, Card, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import "./CardFilme.css"

function CardFilme({ titulo, descricao, assistido, genero, id, deletarFilmes, img }){
    const navigate = useNavigate()
    const placeholderImagem = "/imagecard.png"
    console.log(img)
  return (
    <Col xs={12} md={6} lg={4} className="mb-4 bg-s">
        <Card  key={id}>
        <Card.Img variant="top" src={img} className="image-card"/>
            <Card.Body className="bg-card-s font-branco-s">
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>
                    {descricao}
                </Card.Text>
                <div>
                    {assistido ? 
                        <span className="bg-amarelo-s font-preto-s display-block">Status: Assistido</span>:
                        <span className="bg-vermelho-s font-preto-s display-block">Status: Pendente</span>
                    }
                    <span className="bg-preto-s display-block">Gênero: {genero}</span>
                </div>
                <button 
                    className="bg-amarelo-s botao-amarelo-s padding"
                    onClick={ () => navigate(`/filmes/editar/${id}`)} >Editar
                </button>
                <button className="botao-vermelho-s padding" onClick={ () => deletarFilmes(id)}>Excluir</button>
            </Card.Body>
        </Card>
    </Col>    
  )
}

export default CardFilme
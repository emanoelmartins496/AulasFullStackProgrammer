import { Badge, Button, Card, Col } from "react-bootstrap"

function CardFilme({ titulo, descricao, assistido, genero, id, deletarFilmes }){
  return (
    <Col xs={12} md={6} lg={4} className="mb-4">
        <Card  key={id}>
            <Card.Img variant="top" src="/images/imagecard.png"/>
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>
                    {descricao}
                </Card.Text>
                <div>
                    {assistido ? 
                        <Badge bg="success">Concluído</Badge>:
                        <Badge bg="warning">Pendente</Badge>
                    }
                    <Badge bg="dark">{genero}</Badge>
                </div>
                <Button 
                    variant="dark" 
                    onClick={ () => navigate(`/filmes/editar/${id}`)} >Editar
                </Button>
                <Button variant="danger" onClick={ () => deletarFilmes(id)}>Excluir</Button>
            </Card.Body>
        </Card>
    </Col>    
  )
}

export default CardFilme
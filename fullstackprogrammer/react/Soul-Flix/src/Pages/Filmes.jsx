import { Badge, Button, Card, Container, Row } from "react-bootstrap"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { deleteFilme, addFilmesUsuario } from "../firebase/filmes"
import { useContext, useEffect, useState } from "react"
import Loader from "../Components/loader/Loader"
import toast from "react-hot-toast";
import { UsuarioContext } from "../contexts/UsuarioContext"
import Header from "../Components/header/Header"
import CardFilme from "../Components/cardfilme/CardFilme"


function Filmes(){
    const [ filmes, setFilmes]  = useState(null)
    //Recuperamos a informação do usuário (se está logado ou não)
    const usuario = useContext(UsuarioContext)
    const navigate = useNavigate()

    function carregarDados(){
        //o then devolve a lista de filmes da coleção

        addFilmesUsuario(usuario.uid).then( (resultados) => {
            setFilmes(resultados)
        })
    }

    function deletarFilmes(id){
        const deletar = confirm("Tem certeza ?")
        if(deletar){
            deleteFilme(id).then( () => {
                toast.success("tarefa excluída")
            })
            carregarDados()
        }
    }

    useEffect( () => {
        carregarDados()
    },[] )

    if(usuario === null){
        return <Navigate to="/login"/>
    }

  return (
    <>
        <Header></Header>
        <main>
            
            <Container>
                <h1>Seus filmes</h1>
                <hr />
                <Link className="btn btn-dark" to="/filmes/adicionarfilmes">Adicionar filme</Link>
                {
                    filmes ? <section className="mt-2 d-flex">
                        {filmes.map( (filme) => {
                        return <CardFilme 
                            id={filme.id}
                            titulo={filme.titulo}
                            descricao={filme.descricao}
                            assistido={filme.assistido}
                            genero={filme.genero}
                            deletarFilmes={deletarFilmes}
                        /> /*<Card  key={filme.id}>
                        <Card.Img variant="top" src="https://placehold.co/200x200" style={{ width: '200px' }}/>
                        <Card.Body>
                            <Card.Title>{filme.titulo}</Card.Title>
                            <Card.Text>
                                {filme.descricao}
                            </Card.Text>
                            <div>
                                {filme.assistido ? 
                                    <Badge bg="success">Concluído</Badge>:
                                    <Badge bg="warning">Pendente</Badge>
                                }
                                <Badge bg="dark">{filme.genero}</Badge>
                            </div>
                            <Button 
                                variant="dark" 
                                onClick={ () => navigate(`/filmes/editar/${filme.id}`)} >Editar
                            </Button>
                            <Button variant="danger" onClick={ () => deletarFilmes(filme.id)}>Excluir</Button>
                        </Card.Body>
                    </Card>*/
                        })}
                    </section> : <Loader/>
                }
            </Container>
        </main>
    </>
  )
}

export default Filmes
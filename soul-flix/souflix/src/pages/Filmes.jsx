import { Badge, Button, Card, Container, Row } from "react-bootstrap"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { deleteFilme, addFilmesUsuario } from "../firebase/filmes"
import { useContext, useEffect, useState } from "react"
import Loader from "../components/loader/Loader"
import toast from "react-hot-toast";
import { UsuarioContext } from "../contexts/UsuarioContext"
import Header from "../components/header/Header"
import CardFilme from "../components/cardfilme/CardFilme"
import Botao from "../components/botao/Botao"


function Filmes(){
    const [ filmes, setFilmes]  = useState(null)
    const usuario = useContext(UsuarioContext)
    const navigate = useNavigate()

    function carregarDados(){
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
                <h1 className="font-branco-s font-titulo-s">Seus <span className="font-amarelo-s">filmes</span></h1>
                <hr />
                {/*<Link className="bg-amarelo-s font-preto-s" to="/filmes/adicionarfilmes">Adicionar filme</Link>*/}
                <Botao 
                    mensagem="Adicionar Filmes"
                    rota="/filmes/adicionarfilmes"
                    color="black"
                />
                {
                    filmes ? <section className="d-flex my-5 row mx-md-n5">
                        {filmes.map( (filme) => {
                        return <CardFilme 
                            img={filme.imageUrl}
                            key={filme.id}
                            id={filme.id}
                            titulo={filme.titulo}
                            descricao={filme.descricao}
                            assistido={filme.assistido}
                            genero={filme.genero}
                            deletarFilmes={deletarFilmes}
                        /> 
                        })}
                    </section> : <Loader/>
                }
            </Container>
        </main>
    </>
  )
}

export default Filmes

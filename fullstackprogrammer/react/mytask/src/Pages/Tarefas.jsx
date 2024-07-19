import { Accordion, Badge, Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteTarefa, getfilmesUsuario } from "../firebase/filmes";
import { useContext, useEffect, useState } from "react";
import Loader from "../Components/Loader";
import toast from "react-hot-toast";
import { useNavigate, Navigate } from "react-router-dom";
import { UsuarioContext } from "../contexts/UsuarioContexts";

function filmes() {
  const [filmes, setfilmes] = useState(null);
  // Recuperamos a informação do usuário (se está logado ou não)
  const usuario = useContext(UsuarioContext);

  const navigate = useNavigate();

  function carregarDados() {
    // O then devolve a lista de filmes da coleção
    if(usuario) {
      getfilmesUsuario(usuario.uid).then((resultados) => {
        setfilmes(resultados);
      });
    }
  }

  function deletarTarefa(id) {
    // true -> apagar a tarefa, false -> não fazer nada
    const deletar = confirm("Tem certeza ?");
    if (deletar) {
      deleteTarefa(id).then(() => {
        toast.success("Tarefa removida com sucesso");
        // Trazer a lista de filmes atualizada
        carregarDados();
      });
    }
  }

  // Executar uma função quando o componente
  // é renderizado a primeira vez
  useEffect(() => {
    carregarDados();
  }, []);

  // Se o usuário não está logado
  if (usuario === null) {
    // Navegar para /login
    return <Navigate to="/login" />;
  }

  return (
    <main>
      <Container className="mt-5">
        <h1>Suas filmes</h1>
        <hr />
        <Link className="btn btn-dark" to="/filmes/adicionar">
          Adicionar tarefa
        </Link>
        {filmes ? (
          <section className="mt-2">
            {filmes.map((tarefa) => {
              return (
                <Card key={tarefa.id}>
                  <Card.Body>
                    <Card.Title>{tarefa.titulo}</Card.Title>
                    <Card.Text>{tarefa.descricao}</Card.Text>
                    <div className="mb-2">
                      {tarefa.concluido ? (
                        <Badge bg="success">Concluído</Badge>
                      ) : (
                        <Badge bg="warning">Pendente</Badge>
                      )}
                      <Badge bg="dark">{tarefa.categoria}</Badge>
                    </div>
                    <Button
                      variant="dark"
                      onClick={() => {
                        navigate(`/filmes/editar/${tarefa.id}`);
                      }}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => deletarTarefa(tarefa.id)}
                    >
                      Excluir
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </section>
        ) : (
          <Loader />
        )}
      </Container>
    </main>
  );
}

export default filmes;
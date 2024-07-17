import { Badge, Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteTarefa, getTarefasUsuario } from "../firebase/tarefas";
import { useContext, useEffect, useState } from "react";
import Loader from "../Components/Loader";
import toast from "react-hot-toast";
import { useNavigate, Navigate } from "react-router-dom";
import { UsuarioContext } from "../contexts/UsuarioContexts";

function Tarefas() {
  const [tarefas, setTarefas] = useState(null);

  //Recuperamos as informações do usuário logado
  const usuario = useContext(UsuarioContext);
  
  const navigate = useNavigate();

  function carregarDados() {
    if(usuario) {
      // O then devolve a lista de tarefas da coleção
      getTarefasUsuario(usuario.uid).then((resultados) => {
        setTarefas(resultados);
      });
    }
  }

  function deletarTarefa(id) {
    // true -> apagar a tarefa, false -> não fazer nada
    const deletar = confirm("Tem certeza ?");
    if(deletar) {
      deleteTarefa(id).then(() => {
        toast.success("Tarefa removida com sucesso");
        // Trazer a lista de tarefas atualizada
        carregarDados();
      });
    }
  }

  // Executar uma função quando o componente
  // é renderizado a primeira vez
  useEffect(() => {
    carregarDados();
  }, []);

  if(usuario === null) {

    return <Navigate to="/login" />;

  }

  return (
    <main>
      <Container className="mt-5">
        <h1>Suas tarefas</h1>
        <hr />
        <Link className="btn btn-dark" to="/tarefas/adicionar">
          Adicionar tarefa
        </Link>
        {tarefas ? (
          <section className="mt-2">
            {tarefas.map((tarefa) => {
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
                    <Button variant="dark" onClick={() => {
                      navigate(`/tarefas/editar/${tarefa.id}`);
                    }}>Editar</Button>
                    <Button variant="danger" onClick={() => deletarTarefa(tarefa.id)}>
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

export default Tarefas;
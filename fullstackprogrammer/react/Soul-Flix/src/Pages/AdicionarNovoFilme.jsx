import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addFilme } from "../firebase/filmes";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import Header from "../Components/header/Header";

function AdicionarNovoFilme() {
  const usuario = useContext(UsuarioContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function salvarTarefa(data) {
    // Os dados do formulário são passados para a função de inserir
    // Then => aguarda a inserção da tarefa para então exibir o toast
    data.idUsuario = usuario.uid
    addFilme(data)
      .then(() => {
        toast.success("Tarefa adicionada com sucesso!");
        // Redirecionar o usuário para /filmes
        navigate("/filmes");
      })
      .catch(() => {
        toast.error("Um erro aconteceu ao adicionar tarefa!");
      });
  }

  if(usuario === null){
    return <Navigate to="/login"/>
  }

  return (
    <>
    <Header></Header>
    <main>
      <form className="form-section" onSubmit={handleSubmit(salvarTarefa)}>
        <h1>Adicionar Filme</h1>
        <hr />
        <div>
          <label htmlFor="titulo">Título do filme</label>
          <input
            type="text"
            id="titulo"
            className="form-control"
            {...register("titulo", { required: true, maxLength: 200 })}
          />
          {errors.titulo && (
            <small className="invalid">Campo obrigatório</small>
          )}
        </div>
        <div>
          <label htmlFor="descricao">Descrição do filme</label>
          <textarea
            id="descricao"
            className="form-control"
            {...register("descricao", { required: true })}
          ></textarea>
          {errors.descricao && (
            <small className="invalid">Campo obrigatório</small>
          )}
        </div>
        <div>
          <label htmlFor="dataConclusao">Data</label>
          <input
            type="date"
            id="dataConclusao"
            className="form-control"
            {...register("dataConclusao")}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            id="assistido"
            className="form-check-input"
            {...register("assistido")}
          />
          <label htmlFor="concluido" className="form-check-label">
            Assistido?
          </label>
        </div>
        <div>
          <label htmlFor="categoria">Gênero</label>
          <select
            id="genero"
            className="form-select"
            {...register("genero")}
          >
            <option value="acao">Ação</option>
            <option value="drama">Drama</option>
            <option value="comedia">Comédia</option>
            <option value="ficcao">Ficção Científica</option>
            <option value="terror">Terror</option>
            <option value="outros">Outros</option>
          </select>
        </div>
        <Button variant="dark" className="w-100 mt-1" type="submit">
          Salvar filme
        </Button>
      </form>
    </main>
    </>
  );
}

export default AdicionarNovoFilme;


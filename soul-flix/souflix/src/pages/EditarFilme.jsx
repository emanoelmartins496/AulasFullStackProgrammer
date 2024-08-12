import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getFilme, updateFilme } from "../firebase/filmes";
import { useContext, useEffect } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import Header from "../components/header/Header";

function EditarFilme() {
    const usuario = useContext(UsuarioContext)
    const { id } = useParams()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const navigate = useNavigate();

  function carregarDado(){
    getFilme(id).then( (filme) => {
        if(filme){
            reset(filme) //os nomes do formulario tem que ser o mesmo do banco
        }else{
            navigate("/filmes")
        }
    } )
  }

  function atualizarFilme(data){
    //id da rota da página e data é objeto do formulário
    updateFilme(id, data).then( ()=>{
        toast.success("Filme atualizada!")
        navigate("/filmes")
    } )
  }

  useEffect(()=>{
    carregarDado()
  },[])

  if(usuario === null){
    return <Navigate to="/login"/>
  }

  return (
    <>
    <Header></Header>
    <main>
      <form className="form-section" onSubmit={handleSubmit(atualizarFilme)}>
        <h1>Editar Filme</h1>
        <hr />
        <div>
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            className="form-control"
            {...register("titulo", { required: true, maxLength: 200 })}
          />
          {errors.titulo && (
            <small className="invalid">O título é inválido!</small>
          )}
        </div>
        <div>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            className="form-control"
            {...register("descricao", { required: true })}
          ></textarea>
          {errors.descricao && (
            <small className="invalid">A descrição é inválida!</small>
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
            id="concluido"
            className="form-check-input"
            {...register("concluido")}
          />
          <label htmlFor="concluido" className="form-check-label">
            Concluído?
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
          Atualizar Filme
        </Button>
      </form>
    </main>
    </>
  );
}

export default EditarFilme;
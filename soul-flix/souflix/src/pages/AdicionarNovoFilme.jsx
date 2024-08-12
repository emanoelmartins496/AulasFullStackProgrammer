import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { cadastroFilme, addFilmesUsuario } from "../firebase/filmes";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import Header from "../components/header/Header";
import "./styles/AdicionarNovoFilme.css"

function AdicionarNovoFilme() {
  const usuario = useContext(UsuarioContext)
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function handleImagem(event){
    const imagePreview = URL.createObjectURL(event.target.files[0])
    setFile(event.target.files[0])
    setPreview(imagePreview)
  }
  
  function salvarFilme(data) {
    data.idUsuario = usuario.uid
    cadastroFilme(file,data)
      .then(() => {
        toast.success("Tarefa adicionada com sucesso!");
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
    <Header />
    <main>
      <form className="form-section mb-2 mt-2 p-3" onSubmit={handleSubmit(salvarFilme)}>
        <h1>Adicionar Filme</h1>
        <div className="preview">
            {file ? <img src={preview} alt="Imagem de upload" /> : "Upload imagem"}
          </div>
        <div>
          <input
            type="file"
            id="imageUrl"
            className="form-control"
            onChange={handleImagem}
          />
        </div>

        <div>
          <label htmlFor="titulo">Título do filme</label>
          <input
            type="text"
            id="titulo"
            className="form-control"
            {...register("titulo", { required: true})}
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
          <label htmlFor="assistido" className="form-check-label">
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
            <option value="Ação">Ação</option>
            <option value="Drama">Drama</option>
            <option value="Comedia">Comédia</option>
            <option value="ficção">Ficção Científica</option>
            <option value="Terror">Terror</option>
            <option value="Outros">Outros</option>
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


import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { cadastrarUsuario, entrarGoogle } from '../firebase/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import '../Styles/Cadastro.css';

function Cadastro() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  function cadastrar(data) {
    cadastrarUsuario(data.nome, data.email, data.senha)
      .then(() => {
        toast.success(`Bem-vindo(a)! ${data.nome}`);
        navigate('/filmes');
      })
      .catch((error) => {
        toast.error('Um erro aconteceu: ' + error.code);
      });
  }

  function handleEntrarGoogle() {
    entrarGoogle().then(() => {
      toast.success('Bem-vindo(a)!');
      navigate('/filmes');
    });
  }

  return (
    <main className="cadastro-container">
      <form className="form-section" onSubmit={handleSubmit(cadastrar)}>
      <img src="/images/faviIcon.png" width="200"/>
        <h1>Faça o seu cadastro</h1>
        <div>
          <input
            type="text"
            id="nome"
            className={`form-control ${errors.nome ? 'is-invalid' : ''}`}
            placeholder="Nome"
            {...register('nome', { required: true, maxLength: 150 })}
          />
          {errors.nome && <small className="invalid">O nome é inválido!</small>}
        </div>
        <div>
          <input
            type="email"
            id="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            placeholder="Informe o seu e-mail"
            {...register('email', { required: true })}
          />
          {errors.email && <small className="invalid">O email é inválido!</small>}
        </div>
        <div>
          <input
            type="password"
            id="senha"
            className={`form-control ${errors.senha ? 'is-invalid' : ''}`}
            placeholder="Informe uma senha"
            {...register('senha', { required: true, minLength: 6 })}
          />
          {errors.senha && <small className="invalid">A senha é inválida!</small>}
        </div>
        <div>
          <input
            type="password"
            id="confirmarSenha"
            className="form-control"
            placeholder="Confirme a sua senha"
          />
        </div>
        <Button variant="dark" className="mt-3 w-100" type="submit">
          Cadastrar
        </Button>
        <Button
          onClick={handleEntrarGoogle}
          variant="danger"
          className="mt-3 w-100"
          type="button"
        >
          Entrar com o Google
        </Button>
        <p className="mt-3">Já tem acesso? <a href="/login">Faça o login</a></p>
      </form>
    </main>
  );
}

export default Cadastro;

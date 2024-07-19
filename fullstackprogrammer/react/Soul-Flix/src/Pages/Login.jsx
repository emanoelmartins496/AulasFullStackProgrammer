import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { entrarGoogle, loginUsuario } from '../firebase/auth';
import '..//Styles/Login.css';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  function entrar(data) {
    loginUsuario(data.email, data.senha).then(() => {
      toast.success('Bem-vindo(a)!');
      navigate('/filmes');
    }).catch(() => {
      toast.error('Email e/ou senha incorreta!');
    });
  }

  function handleEntrarGoogle() {
    entrarGoogle().then(() => {
      toast.success('Bem-vindo (a)!');
      navigate('/filmes');
    });
  }

  function handleCadastrar() {
    navigate('/cadastro');
  }

  return (
    <main className="login-container">
      <form className="form-section" onSubmit={handleSubmit(entrar)}>
      <img src="/images/faviIcon.png" width="200"/>
        <h1>Login</h1>
        <div>
          <input
            type="email"
            id="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            placeholder="Email"
            {...register('email', { required: 'O email é obrigatório' })}
          />
          {errors.email && (
            <small className="invalid">{errors.email.message}</small>
          )}
        </div>
        <div>
          <input
            type="password"
            id="senha"
            className={`form-control ${errors.senha ? 'is-invalid' : ''}`}
            placeholder="Senha"
            {...register('senha', {
              required: 'A senha é obrigatória',
              minLength: { value: 6, message: 'Mínimo de 6 caracteres.' },
            })}
          />
          {errors.senha && (
            <small className="invalid">{errors.senha.message}</small>
          )}
        </div>
        <Button variant="dark" className="mt-3 w-100" type="submit">
          Entrar
        </Button>
        <Button
          onClick={handleEntrarGoogle}
          variant="danger"
          className="mt-3 w-100"
          type="button"
        >
          Entrar com o Google
        </Button>
        <p className="mt-3">Não tem uma conta? <Button variant="link" onClick={handleCadastrar}>Cadastre-se</Button></p>
      </form>
    </main>
  );
}

export default Login;

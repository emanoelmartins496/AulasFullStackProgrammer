import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { entrarGoogle, loginUsuario } from "../firebase/auth";
import "./styles/Login.css"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function entrar(data) {
    loginUsuario(data.email, data.senha).then(() => {
      toast.success("Bem-vindo(a)!");
      navigate("/filmes");
    }).catch(() => {
      toast.error("Email e/ou senha incorreta!");
    });
  }

  function handleEntrarGoogle() {
    entrarGoogle().then(() => {
      toast.success("Bem-vindo (a)!");
      navigate("/filmes");
    });
  }

  return (
    <main className="login-container">
      <form className="form-section" onSubmit={handleSubmit(entrar)}>
        <div className="box-logo">
          <img src="/faviIcon.png" width="150"/>
        </div>
        <h1>Login</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''} mb-2`}
            placeholder="Email"
            {...register('email', { required: 'O email é obrigatório' })}
          />
          {errors.email && (
            <small className="invalid">{errors.email.message}</small>
          )}
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            className={`form-control ${errors.senha ? 'is-invalid' : ''} mb-2`}
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
        <button className="mt-1 w-100 botao-azul-s font-branco-s" type="submit">
          Entrar
        </button>
        <Button
          onClick={handleEntrarGoogle}
          variant="danger"
          className="mt-1 w-100"
          type="button"
        >
          Entrar com o Google
        </Button>
        <Link className="w-100 text-center d-block mt-1 mb-2" to="/cadastro">ainda não possui conta ?</Link>
      </form>
    </main>
  );
}

export default Login;

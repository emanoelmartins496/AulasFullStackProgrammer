import { Button } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { cadastrarUsuario, entrarGoogle } from '../firebase/auth'
import toast from 'react-hot-toast'
import { useNavigate, Link } from 'react-router-dom'
import "./styles/Cadastro.css"

const Cadastro = () => {
  const { register, handleSubmit, formState: {errors} } = useForm()
  const navigate = useNavigate()

  function cadastrar(dados){
    cadastrarUsuario(dados.nome, dados.email, dados.senha).then( () => {
      toast.success("Bem-vindo (a)")
      navigate("/filmes")
    }).catch( (error) => {
      toast.error("Não foi possível logar" + error.code)
    })
    }

  function handleEntrarGoogle(){
    entrarGoogle().then( () => {
      toast.success("Seja bem vindo")
      navigate("/filmes")
    } )
  }

  return (
    <main className="login-container">
      <form className='form-section' onSubmit={handleSubmit(cadastrar)}>
        <div className="box-logo">
          <img src="/faviIcon.png" width="150"/>
        </div>
        <h1>Cadastro</h1>
        <div>
          <label htmlFor="nome">Nome</label>
          <input 
            type="text" 
            id="nome" 
            className={`form-control ${errors.email ? 'is-invalid' : ''} mb-1`} 
            {...register("nome")}
            {...register("nome", { required: true, maxLength: 150 })}
          /> 
          {errors.nome && <small className='invalid'>Nome inválido</small>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            className={`form-control ${errors.email ? 'is-invalid' : ''} mb-1`}  
            {...register("email")}
            {...register("email", { required: true })}
          />
          {errors.email && <small className='invalid'>Email inválido</small>}
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input 
            type="password" 
            id="senha" 
            className={`form-control ${errors.email ? 'is-invalid' : ''} mb-1`}  
            {...register("senha")} 
            {...register("senha", { required: true, minLength: 6 })}
          />
          {errors.senha && <small className='invalid'>Senha inválida</small>}
        </div>

        <button className='w-100 botao-azul-s font-branco-s ' type='submit'>Cadastrar</button>
        <Button 
          variant='danger' 
          className='mt-1 w-100' 
          type='button' 
          onClick={handleEntrarGoogle}>Entrar com o google</Button>
          <Link className="w-100 text-center d-block mt-1 mb-2" to="/">Possui conta ?</Link>
      </form>
    </main>
  )
}

export default Cadastro
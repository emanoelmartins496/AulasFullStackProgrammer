import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Pages/Login"
import Cadastro from "./Pages/Cadastro"
import Filmes from "./Pages/Filmes"
import AdicionarNovoFilme from "./Pages/AdicionarNovoFilme"
import EditarFilme from "./Pages/EditarFilme"
import NotFound from "./Pages/NotFound"
import { UsuarioContext } from "./contexts/UsuarioContext"
import { useState, useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase/config"
import Rodape from "./Components/Rodape"


function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null)
  const [ loading, setLoading] = useState(true)

  useEffect( () =>{
   onAuthStateChanged(auth, (user)=>{
      //user null = deslogado
      //se tem objeto no user = usuário logado
      setUsuarioLogado(user)
      setLoading(false)
    })
  },[])
  if(loading){
    return <p>carregando ...</p>
  }

  return (
    <>
      <UsuarioContext.Provider value={usuarioLogado}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/filmes" element={<Filmes/>} />
            <Route path="/filmes/editar/:id" element={<EditarFilme/>} />
            <Route path="/filmes/adicionarfilmes" element={<AdicionarNovoFilme/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
          <Rodape></Rodape>
        </BrowserRouter>
      </UsuarioContext.Provider>
    </>
  )
}

export default App

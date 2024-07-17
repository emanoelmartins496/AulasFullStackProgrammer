import Menu from "./Components/Menu";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Ajuda from "./Pages/Ajuda";
import Politicas from "./Pages/Politicas";
import NotFound from "./Pages/NotFound";
import Rodape from "./Components/Rodape";
import Tarefas from "./Pages/Tarefas";
import EditarTarefa from "./Pages/EditarTarefa";
import NovaTarefa from "./Pages/NovaTarefa";
import {Toaster} from "react-hot-toast";

import { BrowserRouter, Route, Routes } from "react-router-dom";

//BrowserRouter 

function App() {

  return (
    <>
      <BrowserRouter>
          <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="politicas" element={<Politicas />} />
          <Route path="/tarefas" element={<Tarefas/>}/>
          <Route path="/tarefas/editar/:id" element={<EditarTarefa/>}/>
          <Route path="/tarefas/adicionar" element={<NovaTarefa />}/>
          <Route path="*" element={<NotFound />} />
          
        </Routes>

        <Rodape />
      
      </BrowserRouter>

      <Toaster position="bottom-right"/>
    </>
  );
}

export default App;

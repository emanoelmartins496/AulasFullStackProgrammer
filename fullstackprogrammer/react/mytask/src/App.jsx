import Menu from "./Components/Menu";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Ajuda from "./Pages/Ajuda";
import NotFound from "./Pages/NotFound";

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

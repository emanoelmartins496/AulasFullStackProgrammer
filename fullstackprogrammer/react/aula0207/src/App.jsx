// jsx => Javascript Extended
// Vai permitir escrever código "HTML"
// dentro do js
// Declarativa
// Açucar sintático

import Rodape from "./components/Rodape";
import Blog from "./components/Blog";
import Mensagem from "./components/Mensagem";
import Navbar from "./components/Navbar";
import CardAluno from "./components/CardAluno";
import CardProduto from "./components/CardProduto";

// Componente principal da aplicação
function App() {
  return (
    <>
      {/* <Mensagem
        textoTitulo="As batatas quando nascem se esparramam pelo chão"
        nomeAutor="J. Almir"
        paragrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        linkImagem="https://picsum.photos/200"
      />
      <Mensagem
        textoTitulo="Quarta-feira é dia de React"
        nomeAutor="Gabriel Braga"
        paragrafo="Estudamos props e renderização condicional"
        linkImagem="https://picsum.photos/200"
      /> */}
      {/* <Navbar logado={true} nomeUsuario="Batata"/>
      <Navbar logado={false} />
      <Blog />
      <Rodape /> */}
       <CardAluno nome="Victor Silva" serie="4º" media={10}/>
      <CardAluno nome="Ryan Santos" serie="5º" media={4.5}/>
      <CardAluno nome="Lavinia Pereira" serie="8º" media={7.5}/> 
      {/* <CardProduto nome="celular" precoUnitario={4599} desconto={10}/>
      <CardProduto nome="geladeira" precoUnitario={1799} desconto={10}/>
      <CardProduto nome="fone" precoUnitario={149.90} desconto={10}/> */}
    </>
  );
}

export default App;
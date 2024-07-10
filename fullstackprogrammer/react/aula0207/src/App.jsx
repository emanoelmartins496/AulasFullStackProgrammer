// jsx => Javascript Extended
// Vai permitir escrever código "HTML"
// dentro do js
// Declarativa
// Açucar sintático

import Cabecalho from "./components/Cabecalho";
import Banner from "./components/Banner/Banner";
import Blog from "./components/Blog";
import Rodape from "./components/Rodape";
import Mensagem from "./components/Mensagem";
import CardAluno from "./components/CardAluno";
import Galeria from "./components/Galeria";
import Listagem from "./components/Listagem";
import Eventos from "./components/Eventos";
import Contador from "./components/Contador";
import Abas from "./components/Abas"
import Carrossel from "./components/Carrossel";
import CalculadoraIMC from "./components/CalculadoraIMC";
import Post from "./components/Post";


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

      
      {/* <Blog /> */}

       {/* <CardAluno nome="Victor Silva" serie="4º" media={10}/>
      <CardAluno nome="Ryan Santos" serie="5º" media={4.5}/>
      <CardAluno nome="Lavinia Pereira" serie="8º" media={7.5}/>  */}

      {/* <Listagem /> */}

      {/* <Cabecalho 
        logado={true} 
        nomeUsuario="Cliente"
      />

      <Banner/>

        
      <Galeria 
        nome="Desenvolvimento Web Personalizado" 
        precoUnitario={4999.00} 
        desconto={50} 
        imagemUrl="/imagens/dwp.png" 
        descricao="Sob medida para atender às 
        necessidades específicas do seu negócio. Utilizamos tecnologias modernas e práticas 
        recomendadas para garantir desempenho e funcionalidade de ponta." 
      />

      <Galeria 
        nome="Desenvolvimento de E-commerce" 
        precoUnitario={1799} 
        desconto={70} 
        imagemUrl="/imagens/dec.png" 
        descricao="Site para comércio eletrônico, personalizados, 
        projetados para aumentar as vendas online, melhorar a experiência do usuário e integrar-se 
        facilmente com sistemas de pagamento e logística."
      />

      <Galeria 
        nome="Desenvolvimento de Jogos Digitais" 
        precoUnitario={149.90} 
        desconto={20} 
        imagemUrl="/imagens/djg.png" 
        descricao="Interativos para plataformas móveis, 
        web e desktop, utilizando gráficos avançados, física realista e mecânicas de 
        jogo inovadoras para proporcionar uma experiência imersiva." 
      />

      <Galeria 
        nome="Desenvolvimento de Sistemas CRM" 
        precoUnitario={4599} 
        desconto={10} 
        imagemUrl="/imagens/dcrm.png" 
        descricao="Customer Relationship Management, 
        personalizados para ajudar sua empresa a gerenciar eficazmente relacionamentos com clientes, 
        automatizar processos de vendas e melhorar a fidelização." 
      />

      <Galeria 
        nome="Consultoria em Arquitetura de Software" 
        precoUnitario={1799} 
        desconto={30} 
        imagemUrl="/imagens/cas.png" 
        descricao="Oferecemos consultoria especializada em arquitetura de software para ajudar sua 
        equipe a projetar sistemas escaláveis, seguros e eficientes, 
        utilizando as melhores práticas da indústria." 
        />

      <Galeria 
        nome="Integração de APIs e Serviços Externos"
        precoUnitario={149.90} 
        desconto={10} 
        imagemUrl="/imagens/api.png" 
        descricao="Implementamos integrações de APIs de terceiros e 
        serviços externos para conectar seu sistema com plataformas populares, 
        otimizando processos e melhorando a eficiência operacional." 
      />

      <Galeria 
        nome="Auditoria de Segurança de Aplicações" 
        precoUnitario={4599} 
        desconto={45} 
        imagemUrl="/imagens/aseg.png" 
        descricao="Realizamos auditorias detalhadas de segurança em aplicações e sistemas, 
        identificando vulnerabilidades potenciais e implementando medidas corretivas 
        para proteger dados sensíveis e garantir conformidade regulatória." 
      />

      <Galeria 
        nome="Desenvolvimento de Aplicações IoT" 
        precoUnitario={1799} 
        desconto={60} 
        imagemUrl="/imagens/Iot.png" 
        descricao="Internet das Coisas (IoT) 
        que conectam dispositivos inteligentes e sensores, permitindo monitoramento remoto, 
        coleta de dados em tempo real e automação de processos para diversos setores industriais." 
      />

      <Galeria 
        nome="Manutenção e Suporte Contínuo" 
        precoUnitario={149.90} 
        desconto={10} 
        imagemUrl="/imagens/msc.png" 
        descricao="Oferecemos serviços de manutenção e suporte contínuo para garantir que seu 
        sistema esteja sempre funcionando de forma estável e segura, além de realizar atualizações e 
        melhorias conforme necessário." 
      />

      <Galeria 
        nome="Treinamento em Tecnologias Emergentes"
        precoUnitario={199.99} 
        desconto={10} 
        imagemUrl="/imagens/tte.png" 
        descricao="Oferecemos treinamento especializado em tecnologias emergentes, 
        capacitando sua equipe com as habilidades necessárias para enfrentar os desafios 
        tecnológicos atuais e futuros." 
      />

      <Rodape /> */}

      {/* <Eventos /> */}

      {/* <Contador valorInicial={20}/>
      <Contador valorInicial={1000}/>
      <Contador valorInicial={250}/>
      <Contador/> */}

      {/* <Abas /> */}

      {/* <Carrossel/> */}

      {/* <CalculadoraIMC /> */}

      <Post />

    </>
  );
}

export default App;


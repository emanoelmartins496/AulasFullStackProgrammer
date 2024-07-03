// jsx => Javascript Extended
// Vai permitir escrever código "HTML"
// dentro do js
// Declarativa
// Açucar sintático
import Postagem from "./components/Postagem";
import Blog from "./components/Blog";
import Rodape from "./components/Rodape";

// Componente principal da aplicação
function App() {
    return (
        <>
            <main>
                <Postagem></Postagem>
                <Blog></Blog>
            </main>
            <Rodape></Rodape>
        </>
    );
}

export default App;
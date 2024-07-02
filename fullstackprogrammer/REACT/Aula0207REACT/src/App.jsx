// jsx => Javascript extended
// Vai permitir escrever o codigo [HTML] do JS
// dentro do JS
// Declarativa
// Açucar sintatico

import Titulo from "./components/Titulo";
import Mensagem from "./components/Mensagem";


// Componente principal da aplicação
function App() {
    return (
        <main className="mensagem-corpo">
        <Titulo />
        <Mensagem />
        <Mensagem />
        <Mensagem />
        </main>
    )
}

export default App;
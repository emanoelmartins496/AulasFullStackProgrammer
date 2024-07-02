// Título pe o nome do componente
// Componentes são funções
// O retorno dessa função é a parte visual
// Exportar o componente

function Titulo() {

    // o conteúdo do return é o visual.
    return (
        <h2 className="mensagem-titulo">Frases do dia</h2>
    );
}

// O "export" faz com que eu possa utilizar o componente em outros arquivos do projeto.
export default Titulo;
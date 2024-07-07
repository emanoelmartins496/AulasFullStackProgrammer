

const contratos = [
    {cod: 1, nome: "Prudente Construtora", serviços: "Desenvolvimento Web", totalInvestido: 599.99},
    {cod: 2, nome: "Brutus Pastelaria", serviços: "Desenvolvimento Web", totalInvestido: 599.99},
    {cod: 3, nome: "Mercadinho do Perigo", serviços: "Desenvolvimento Web", totalInvestido: 289.99}
]
const EmpresasContratantes = contratos.map((contratos) => {
    return (
        <article key={contratos.cod}>
            <h1>Nome: {contratos.nome}</h1>
            <p>Serviços: {contratos.serviços}</p>
            <p>Investimento: {contratos.totalInvestido}</p>
        </article>
    )
});

import CardAluno from "./CardAluno"

const alunos = [
    {mat: 1, nome: "Lavinia", serie: "7° Ano", media: 9.0},
    {mat: 2, nome: "Ryan", serie: "4° Ano", media: 4.0},
    {mat: 3, nome: "Larissa", serie: "5° Ano", media: 5.0},
    {mat: 4, nome: "Marcos", serie: "6° Ano", media: 8.0}
];

const cardsAluno = alunos.map((aluno) => {
    return <CardAluno key={aluno.mat} nome={aluno.nome} serie={aluno.serie} media={aluno.media} />
});
// A ideia da array acima é gerar componentes a partir dela

function Listagem() {
    return (
        <>
            <h1>Tech Wolf Programmer</h1>
            <section>
                <h1>Empresas Contratantes</h1>
                    {EmpresasContratantes}
            </section>
            <hr />

            <h3>Lista de Alunos</h3>
            <section>{cardsAluno}</section>
        </>
    )
}

export default Listagem;
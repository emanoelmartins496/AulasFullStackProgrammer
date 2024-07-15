// Desestruturação de objetos
// Permite Extrair valores de um projeto e atribuir em variaveis

const pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor",
    endereco: {
        cidade: "Ubajara",
        estado: "Ceara",
    }
}

// dentro das chaves coloca as propriedades que serão extraidas
const {nome, idade, profissao, endereco} = pessoa;

console.log(nome);
console.log(idade);
console.log(profissao);
console.log(endereco);

// podemos extrair propriedades de objetos internos

const {endereco: {estado, cidade}} = pessoa;

console.log(estado);
console.log(cidade);

// Spread: permite espalhar as propriedades de um objeto em outro.

const carro = {
    marca: "toyota",
    modelo: "corolla",
    ano: 2020
}

const copiaCarro = {...carro};
console.log(copiaCarro);

const novoCarro = {...carro, ano: 2024, dono: "Gabriel"}
console.log(novoCarro);
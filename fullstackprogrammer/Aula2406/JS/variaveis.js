//Comentário de única linha 
/*
    Comentário de 
    múltiplas linhas
*/

//console.log("Hello, wworld!");
//console.log(5);

//Variáveis -> Espaço na Memória para armazenar o valor.
let nome; // declaração
nome = "José";  // atribuição
console.log(nome); //Exibe o conteúdo dentro da atribuição nome

let idade = 19;
console.log(idade);

let altura = 1.72
console.log(altura);

// Com let vc tem liberdade para redefinir a atribuição depois.
nome = "Emanoel";
idade = 20;
altura = 1.8;

console.log(nome); 
console.log(idade);
console.log(altura);

const cpf = "000.000.000-00";/* A diferença de const para let é que, let você permite alterar
const não.*/
//cpf = "xxx.xxx.xxx-xx"; Esse código gera erro pq alterou a const

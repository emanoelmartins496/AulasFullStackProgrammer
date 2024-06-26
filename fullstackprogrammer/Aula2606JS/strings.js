// Strings = cadeias de carateres

const nome = "Emanoel";
const sobrenome = "Santos";

// Interpolação do string
const nomeCompleto = `${nome} ${sobrenome}`;

console.log(nomeCompleto);

// Formatação de strings
let meuPet = "Stela";
// 0 -> "S";
// 1 -> "t";
// 2 -> "e";
// 3 -> "l";
// 4 -> "a";

let pet = "Stela Gato"; // 0 Até 10
//console.log(pet[0]); //S
//console.log(pet[1]); //t
//console.log(pet[2]); //e
//console.log(pet[3]); //l
//console.log(pet[4]); //a
//console.log(pet[5]); // Espaço em Branco
//console.log(pet[6]); //G
//console.log(pet[7]); //a
//console.log(pet[8]); //t
//console.log(pet[9]); //o
//console.log(pet[500]); // Undefined = Não existe essa posição na string

// Tamanho da string
//console.log(pet.length); // Total de caracteres da string
//console.log(pet.length -1); // Último caractere da string

// Percorrendo a string, caractere por caractere
for(let i = 0; i < pet.length; i++) {
    console.log(pet[i]); //Mostra um caractere por vez
}

// Funções de string
let palavra = "Java Script";
console.log(palavra.toLowerCase()); // Minuscula
let palavraMin = palavra.toLowerCase();

console.log(palavra.toUpperCase()); // Maiuscula

console.log(palavra.charAt(0)); // palavra[0]

console.log(palavra.replace("Java" , "Type"));
console.log(palavra.replace("J" , "R"));

let frase = "Eu comi arroz, feijão, batata e carne";

console.log(frase.includes("carne"));

if(frase.includes("alface")) {
    console.log("Muito bem!");
} else {
    console.log("Coma algo saudável");
}

let arquivo = "musica.mp3";

console.log(arquivo.endsWith("mp3")); // Verifica se termina com 'mp3'.
console.log(arquivo.endsWith("mp4"));
console.log(arquivo.startsWith("mus"));// Verifica se termina com 'mus'.

// Slice
console.log(arquivo.slice(0, 5)); // Recorta a string do indice 0 ate o anterior ao indice final (5)
console.log(arquivo.slice(0, 4)); // Exemplo 1
console.log(arquivo.slice(2, 6)); // Exemplo 2
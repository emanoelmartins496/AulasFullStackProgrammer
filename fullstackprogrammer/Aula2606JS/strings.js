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
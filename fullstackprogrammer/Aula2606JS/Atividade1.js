//1. Escreva um programa que inverte uma string

let palavra = "Batata Frita";
let invertida = "";

for(let i = palavra.length -1; i >= 0; i--) {
    invertida = invertida + palavra[i]
}
console.log(invertida);

// 2. Crie uma variável que armazena uma frase, e utilize as funcionalidades de string para remover uma palavra específica da frase e trocar por "###"
let frase = "Essa frase contém uma censura";

console.log(frase.replace("censura" , "####"));

//3. Crie uma variável que armazena um email, o programa deve indicar se este email é do domínio soulcode.com

let email = "exemplo@soulcode.com";

if (email.endsWith("soulcode.com")) {
    console.log("O email pertence ao domínio soulcode.com");
} else {
    console.log("O email não pertence ao domínio soulcode.com");
}
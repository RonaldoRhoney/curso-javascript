// Exercício de Manipulação de Array

// Crie uma lista de compra que é inicialmente vazia. adicione 5 itens à lista usando o push().
// Agora, remova o primeiro item da lista usando o shift(), imprima a lista final no console.

const listaDeCompras = [];

listaDeCompras.push("Arroz", "Feijão", "Leite", "Macarrão", "Ovos");

listaDeCompras.shift();

console.log(listaDeCompras);

// Exercício de Manipulação de Array - find()

// Você tem um array de números: [14, 7, 25, 11, 3, 9, 4]. Use a função find() para encontrar o 
// primeiro número divizivel por 7 e maior que 10.

const numeros = [5, 7, 25, 11, 3, 9, 28];

const numero =  numeros.find(num => num > 10 && num % 7 === 0);
console.log(numero);

// Exercício de Manipulação de Array - filter()

//Dado o array de números: [12, 5, 10, 30, 25, 40, 35]. Use a função filter() para criar um novo array que
// contenha apenas os números que são maiores que 20.

const numeros2 = [12, 5, 10, 30, 25, 40, 35];

const filtrados = numeros2.filter((num ) => num > 20);
console.log(filtrados);

// Exercíco Manipulação de Strings - split(), trim()

//Dada a string: "Bom dia, mundo! ". Remova os espaços em branco no início e no final da string
// em seguida, divida a string em palavras:

const frase = "Bom dia, mundo! ";

const palavras = frase.trim().split(" ");
console.log(palavras);

// Exercíco de Manipulação de Strings - starsWith(), endsWith()

//Dada a frase: "O rato roeu a roupa do rei de Roma", verifique se a string começa com a letra "O" e termina com
// a palavra "Roma".

const frase2 = "O rato roeu a roupa do rei de Roma";

const comecaCom = frase2.startsWith("O");
const terminaCom = frase2.endsWith("Roma");

console.log(comecaCom);
console.log(terminaCom);
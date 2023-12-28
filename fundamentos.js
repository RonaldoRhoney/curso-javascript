// Fundamentos
var minhaVariavel = "Olá mundo !"

console.log(minhaVariavel);


// comentários de uma linha

/* comentário
de multiplas 
linhas 
 */


// variável e tipos de dados 

var meuNumero = 150;
console.log(meuNumero + 5);


console.log("10" + 5);

console.log(typeof meuNumero);

var booleano = true;
var booleano = false;

console.log(typeof booleano);


var meuObjeto = {};

var meuArray = [];

var meuNull = null;
var meuUnderfined = undefined;

console.log(typeof meuObjeto);
console.log(typeof meuArray);
console.log(typeof meuNull);

// let e const
// novas formas de declarar variáveis

let x = 10;
const j = 5;


console.log(x, j);
// operadores aritiméticos

console.log(x + j);
console.log(x - j);
console.log(x * j);
console.log(x / j);

// operadores de comparação
console.log(x == j);
console.log(x != j);
console.log(x === j);

// operadores lógicos
// AND &&
// OR ||
console.log(10 > 5 && 20 > 5);

console.log(10 > 5 || 20 > 5);

// consersão de tipos

const meuNumero2 = "123"

const meuNumeroConvestido = Number(meuNumero2);

console.log(meuNumeroConvestido);
console.log(typeof meuNumeroConvestido);


// Estrutura de condição - if, else, else if

const idade  = 20

if(idade < 13){
    console.log("Criança");
}else if(idade < 20){
console.log(Adilescente);
}else{
    console.log("Adulto");
}

if (false) {
console.log("Isso executa");
}else{
console.log("Isso agora é executado");
}

// Switch
const fruta = "Banana";

switch(fruta) {
    case "Banana":
    console.log("Banana é a fruta");
    break
    case "Maça":
        console.log("Maçã é a fruta");
        break
        default:
            console.log("Fruta não encontrada !");
}

// Estrutura de repetição
// 1, 2, 3, 4 etc... vezes executadas ...

// contador, condição de limite, incremento:
for (let i = 0; i < 5; i++) {
 console.log("O valor de i é: " + i);
}

// while
let k = 0;

while (k < 5) {
    console.log("O valor de k e: " + k)
    k++;
}

// do while
let a = 0;
do{
console.log("O valor de a " + a);

    a++; 
}while(a < 5);

// funções 
// function nome(arg1, arg2){ corpo}

function cumprimentar (nome) {

    console.log("Olá!" + nome);
}
cumprimentar("Rhoney");

let cor = "Azul";

function mostraCor() {
    let cor = "Verde";

    console.log(cor);
}

console.log(cor);

mostraCor();

// hoisting = içamento

testeHosting();

function testeHosting() {
    console.log("Deu certo !")
}

// Arrow fuction

const testArrow = () => console.log("Isso é uma função");

testArrow();

// truthy e falsy

const minhaVariavel1 = ""; // falsy
const minhaVariavel2 = "algum texto";

if(minhaVariavel1) {
    console.log(" É verdadeiro");
}else{
    console.log("É falso");
}

if(minhaVariavel2) {
    console.log("É verdadeiro ! 2");
}else{
    console.log("É falso ! 2");
}

// Array, lista

const numeros = [1, 2, 3, 4, 5];

console.log(numeros);

console.log(numeros[0]);
console.log(numeros[3]);

//acrescentando números no Array

numeros.push(6);
console.log(numeros);

// retirando números do Array: (último numero)

numeros.pop();
console.log(numeros);

// Strings
const minhaStringNova = "Olá, Rhoney !";

const minhaString3 = minhaStringNova + " Como você está ?";

console.log(minhaString3);

// Usando a Interpolação:

const minhaString4 = `${minhaStringNova} Como você está?`;
console.log(minhaString3);

// quantidade de caracteres ...

console.log(minhaString4.length);
//posição de um caracter..
console.log(minhaString4[6]);
// convertendo em CAIXA ALTA..
console.log(minhaString4.toUpperCase());

// Data e Hora...
const agora = Date();
console.log(agora);

// Data específica...
const natal = new Date(2023, 11, 25);
console.log(natal);

// Math...
console.log(Math.PI); // mostra o número PI

console.log(Math.round(3.55)); // Arredonda um número

console.log(Math.sqrt(144)); // Mostra a raiz quadrada de um número

console.log(Math.pow(10, 8)); // Mostra a potenciação de um números Ex 10 elevado a 8
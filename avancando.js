// Avançando em JavaScript
// Manipulção de Array:
const frutas = ["Pera", "Uva", "Maçã"];
frutas.unshift("Acerola"); //acrescenta "acerola no início da lista" 
console.log(frutas);

frutas.shift(); // remove "acerola" do início da lista
console.log(frutas);

// Map, Filter e Reduce => Arrow function...
const numeros = [1, 2, 3, 4, 5, 6];

//find  => retona o primeiro elemento do cenário.
const numeroPar = numeros.find((num) => num % 2 === 0); 
console.log(numeroPar);

//filter => retorna todos os elementos que bateram com o critério
const numerosPar = numeros.filter((num) => num % 2 === 0);
console.log(numerosPar);

// Manipulação de Strings
const frase = "Olá, mundo! ";
const palavras = frase.trim().split(" ");

console.log(frase);
console.log(palavras);

const frase2 = "JavaScript é incrível !";

console.log(frase2.startsWith("Java"));
console.log(frase2.endsWith("!"));

// Exceções e tratamento de errs.
const idade = 15;
//if (idade < 17) {
//throw new Error("Você deve ter pelo menos 17 anos  !");
//}
try {
    //algum código
}catch(error){
}
console.log("Continjando o programa...");

//callback => função...
function cumprimentar(nome, callback){
    console.log("Olá," + nome);
    callback();
}
function mostrarSolucao() {
    console.log("Como você está ?");
}
cumprimentar("Rhoney", mostrarSolucao);
cumprimentar("Maria", function(){
    console.log("Tá tudo bem ?");
});

//Settimeout => dps um tempo executa algo... uma vez !!!
function mostrarMensagem() {
    console.log("Essa mensagem será exibida após 3 segundos");
}
setTimeout(mostrarMensagem, 3000);
setTimeout(function(){
    console.log("Oi");
}, 1000);

// Promises 
const promessa = new Promise((resolve, reject) => {
    const condicao = true;

    if (condicao){
        resolve("A condição é verdadeira !");
    }else{
        reject("A condição é falsa!");
    }
});

promessa.then((mensagem) =>{
    console.log(mensagem);
})
.catch((erro) => {
    console.log(erro);
});

// Bobliotecas feitas que são "promise based"

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2500, "testando");
});

Promise.all([promise1, promise2]).then((valores) => console.log(valores));

// Async Await

async function obterValor() {
    const promessa = new Promise((resolve, reject) =>{
        setTimeout(() => resolve("valor obtido"), 2000);
    });

    const valor = await promessa;

    console.log(valor);
}

obterValor();

// Json 
// {nome: "teste"} => {"nome": "teste"}
// Padroniza a comunicação
// Front-end e Back-end em uma só linguagem
const objeto = {nome: "Rhoney", idade: 32};

const jsonString = JSON.stringify(objeto);

console.log(jsonString);
console.log(typeof jsonString);

const json = `{"nome": "Rhoney", "idade": 32}`;

const objeto2 = JSON.parse(json);

console.log(objeto2);


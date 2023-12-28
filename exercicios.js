// Exercício 01:
// Criar um script que imprima a mensagem: Olá mundo no console.
console.log("Olá, Mundo !");

// Exercício 02: Conversão de tipos
// Dado o valor de uma string "1234", converta-o em número

const valorString= "1234";
const valorNumber = Number(valorString);

console.log(typeof valorNumber);

// Exercício 03: Manipulação de string
// Dado uma string "JavaScript é incrível", faça uma contagem dos caracteres e palavras existem na frase.
const minhaString = "JavaScript é incrível";
const numeroDeCaracteres = minhaString.length;
const numeroDePalavras = minhaString.split(" ").length;

console.log(`O número de caractere + ${numeroDeCaracteres}`);
console.log(`O número de carsctere + ${numeroDePalavras}`);

// Exercício 04: Loops e Arrays
//Crie um Arrey com 5 nomes e use o lopp FOR para imprimir-lo
const nomes = ["Rhoney", "Carlos", "Juçara", "Nalva", "Dayan"];
for (let i = 0; i < nomes.length; i ++) {
    console.log(nomes[i]);
} 
// Exercício 05: Funções, String e Math
// Crie uma função que aceite uma string representando um horário no formato 24 horas (ex: "14:30").
// A função deve retornar uma string um horário no formato de 12 horas (ex: "2:30 PM").
// Use os objetos Math para auxiliar nessa conversão....
// Certifique-se de que sua função  lida corretamente com os horário de meia-noite e do meio-dia.
function convertereHorario(horario24){
       const [hora, minuto] = horario24.split(":");
       const hora12 = hora % 12 || 12;
       let periodo = "AM";
       if(hora > 12) {
        periodo = "PM";
       }
       console.log(`${hora12}:${minuto} ${periodo}`);
}

convertereHorario("15:16");
convertereHorario("09:21");
convertereHorario("23:59");
    

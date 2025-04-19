// Exercício - Escreva um programa que verifica se um número é par ou ímpar.

let numero = parseFloat(prompt("Digite um número para saber se ele é par ou ímpar:"))

    if (numero % 2 !== 0) { // O módulo " % "verifica se o resto da divisão do número por 2 é diferente de 0.
        console.log("O número é ímpar")
    } else {
        console.log("O número é par")
    }
    
// o operador % retorna o resto da divisão. 
// precisa colocar diferente de zero pois se colocar igual a 1, não funciona com números negativos, só com positivos.

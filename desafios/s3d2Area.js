/*
    Desafio #2 - Área da Circunferência
    Calcular o valor da área da circunferência de raio 10 utilizando a fórmula Pi * raio²
*/ 

let raio = 10;
const PI = 3.14;

let area = PI * raio ** 2; // Em javascript potenciação é feita com o operador **

console.log("A área da circunferência de raio " + raio + " cm é " + area + " cm²");
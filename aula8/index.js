/**
 * Luiz Otávio Mirando tem 30 anos, pesa 84 kg 
 * tem 1.8 m de altura e seu IMC é de 25.92.
 * Luiz Otávio nasceu em 1980
 */

const nome = 'Luiz Otávio';
const sobrenome = "Miranda";
const idade = 30; // [anos]
const peso = 84; // [kg]
const altura = 1.80; // [m]

let imc; // peso / (altura * altura);
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2024 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} m e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`)


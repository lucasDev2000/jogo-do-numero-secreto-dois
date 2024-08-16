// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calcularIMC(altura, peso) {
    if (altura <= 0 || peso <= 0) {
        return "Altura e peso devem ser maiores que zero.";
    }
    let imc = peso / (altura * altura);
    return imc.toFixed(2); // Retorna o IMC com duas casas decimais
}

// Exemplo de uso:
let altura = 1.75; // altura em metros
let peso = 68; // peso em quilogramas
console.log("O IMC é: " + calcularIMC(altura, peso));

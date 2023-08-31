// Faça um programa para calcular o valor de uma viagem.

// Você tera 5 variaveis. Sendo elas:
// 1- Preço do etanol
// 2- Preço da gasolina
// 3- tipo de combustivel que está no seu carro
// 4- Gasto médio de combistivel do carro por KM
// 5- Distancia em KM da viagem


const valorCombustivelEtanol = 5.79;
const valorCombustivelGasolina = 6.66;
const mediaVeiculo = 10;
const kmDaViagem = 100;
const tipoDeCombustivel = 'gasolina';

const litrosConsumidos = kmDaViagem / mediaVeiculo;

if (tipoDeCombustivel === 'etanol') {
    const valorGasto = litrosConsumidos * valorCombustivelEtanol;
    console.log(valorGasto.toFixed(2));

} else {
    const valorGasto = litrosConsumidos * valorCombustivelGasolina;
    console.log(valorGasto.toFixed(2));
}


const valorCombustivel = 5.30;
const mediaVeiculo = 43;
const kmDaViagem = 77;

const litrosConsumidos = kmDaViagem / mediaVeiculo;
console.log (litrosConsumidos);

const valorGasto = litrosConsumidos * valorCombustivel;
console.log (valorGasto.toFixed(3));

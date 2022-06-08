/* Carne - 400gr p/pessoa + de 6 horas - 650
Cerveja - 1200ml p/pessoa + de 6 horas - 2000ml  
Refrigerante - 1000ml p/pessoa + 6 horas 1500ml

crianças valem por 0,5 */

let inputAdultos = document.getElementById("adultos");
let inputCrincas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");

    let adultos = inputAdultos.value
    let criancas = inputCrincas.value;
    let duracao = inputDuracao.value;

    let qdtCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    console.log(qdtCarne); 
    let qdtCerveja = cervejaPP(duracao) * adultos 
    console.log(qdtCerveja);  
    let qdtBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
    console.log(qdtBebidas); 

    resultado.innerHTML = `<p>${qdtCarne / 1000}Kg de Carne`
    resultado.innerHTML += `<p>${Math.ceil(qdtCerveja / 355)} Latas de Cerveja`
    resultado.innerHTML += `<p>${qdtBebidas / 1000}L de Refrigerante`
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao){
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}
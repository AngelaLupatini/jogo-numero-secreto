function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
}
    if(nuneroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }
    if(numero === numeroSecreto){
        document.body.innerHTML = ` 
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto} </h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é MENOR</div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é MAIOR</div>
          `
}

function chuteForInvalido(numero){
return (Number.isNaN(numero))
}

function nuneroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
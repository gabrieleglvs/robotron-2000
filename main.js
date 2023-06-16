const controle = document.querySelectorAll("[data-controle]")
console.log(controle)

controle.forEach((elemento) => {
    elemento.addEventListener("click", (e) => {
        manipulaDados(e.target.dataset.controle, e.target.parentNode); //pego o texto e o elemento (controle) de onde veio aquele click (ex: braços, blindagem, núcleos...)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === '-') {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}
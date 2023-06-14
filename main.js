const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")

const controle = document.querySelectorAll(".controle-ajuste")
console.log(controle)

controle.forEach((elemento) => {
    elemento.addEventListener("click", (e) => {
        manipulaDados(e.target.textContent);
    })
})

function manipulaDados(operacao) {
    if(operacao === '-') {
        braco.value = parseInt(braco.value) - 1;
    } else {
        braco.value = parseInt(braco.value) + 1;
    }
}
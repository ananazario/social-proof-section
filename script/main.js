function escrita(tag) {
    tituloArray = tag.innerHTML.split('')
    tag.innerHTML = ''

    tituloArray.forEach((letra, i) => {
        setTimeout(() => {
            tag.innerHTML += letra
        }, i * 75)
    })
}

const titulo = document.querySelector('[data-titulo]')

escrita(titulo);

/*
const titulo = document.querySelector('[data-titulo]')

function escrita() {
    tituloArray = titulo.innerHTML.split('')
    titulo.innerHTML = ''

    tituloArray.forEach((letra, i) => {
        setTimeout(() => {
            titulo.innerHTML += letra
        }, i * 75)
    })
}

escrita();
*/



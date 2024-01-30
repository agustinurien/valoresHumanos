const consigna = document.querySelector(".texto");
const btnEmpezar = document.querySelector(".empezar");
const CimagenesD = document.querySelector(".contenedorImagenD");
const contenedorRespuestas = document.querySelector(".contenedorRespuestas");
const contenedorImagenesD = document.querySelector(".contenedorImagenesD");
const contenedorLista = document.querySelector(".contenedorLista");
const contenedorS = document.querySelector(".contenedorSiguiente");

let contador = 0;
let indice = 0;

const imagenesDominos = [
    { numero: 1, url: '../img/imagenesDominos/1-6.png' },
    { numero: 2, url: '../img/imagenesDominos/7-12.png' },
    { numero: 3, url: '../img/imagenesDominos/13-18.png' },
    { numero: 4, url: '../img/imagenesDominos/19-24.png' },
    { numero: 5, url: '../img/imagenesDominos/final.png' },
    { numero: 6, url: '../img/imagenesDominos/31-36.png' },
    { numero: 7, url: '../img/imagenesDominos/37-42.png' },
    { numero: 8, url: '../img/imagenesDominos/FINAL-FINAL.png' }
];

btnEmpezar.addEventListener("click", () => {

    consigna.innerHTML = ``;
    consigna.classList.add("removePadding");
    contenedorRespuestas.classList.add("contenedorRespuestasP");
    contenedorImagenesD.classList.add("contenedorImagenesD-active");

    const imagenActual = imagenesDominos[indice];
    CimagenesD.innerHTML = `<img src="${imagenActual.url}" alt="">`;

    contenedorLista.innerHTML = "";

    for (let i = 1; i <= 6; i++) {
        const lista = document.createElement("li");
        lista.innerHTML = `
        <h3>${contador + i}</h3>
        <input type="text" placeholder="Numero de arriba">
        <input type="text" placeholder="Numero de abajo">
        `;
        contenedorLista.appendChild(lista);
    }

    contador += 6;

    btnEmpezar.innerText = `Siguiente`

    if (contador === 48) {
        contenedorS.innerHTML = ``;
        const contenedorSiguiente = document.querySelector(".contenedorSiguiente");

        contenedorSiguiente.innerHTML = `<div class="button-container removePaddingZ">
            <button id="btn2validate" onclick="sendAnswers('cuestionario-individual', 46)"
                disabled>Enviar</button>
        </div>
        `;
    }

    indice++;
});

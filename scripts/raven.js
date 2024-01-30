const btnSiguiente = document.querySelector(".btnSiguiente");
const containerPreguntas = document.querySelector(".containerPreguntas");

const imagenesR = [
    { numero: 1, url: '../img/imagenesRaven/3.png' },
    { numero: 2, url: '../img/imagenesRaven/4.png' },
    { numero: 3, url: '../img/imagenesRaven/5.png' },
    { numero: 4, url: '../img/imagenesRaven/6.png' },
    { numero: 5, url: '../img/imagenesRaven/7.png' },
    { numero: 6, url: '../img/imagenesRaven/8.png' },
    { numero: 7, url: '../img/imagenesRaven/9.png' },
    { numero: 8, url: '../img/imagenesRaven/10.png' },
    { numero: 9, url: '../img/imagenesRaven/11.png' },
    { numero: 10, url: '../img/imagenesRaven/12.png' }
];

let indice = 1;

btnSiguiente.addEventListener("click", () => {
    containerPreguntas.innerHTML = ``;

    for (let i = 0; i < 2; i++) {
        const imagenActual = imagenesR.find((imagen) => imagen.numero === indice);

        containerPreguntas.innerHTML += `
            <div class="contenedorImagenesR">
                <section class="imagenes">
                    <img src="${imagenActual.url}" alt="">
                </section>
            
                <div class="contenedorRespuestaR item">
                    <input type="text" placeholder="Respuesta">
                </div>
            </div>
        `;

        indice++;
        if (indice > imagenesR.length) {
            const contenedorSiguiente = document.querySelector(".contenedorSiguiente");

            contenedorSiguiente.innerHTML = `<div class="button-container removePaddingZ">
                <button id="btn2validate" onclick="sendAnswers('cuestionario-individual', 46)"
                    disabled>Enviar</button>
            </div>
            `;
        }
    }

});


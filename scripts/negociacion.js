const contenedorZ = document.querySelector(".contenedorZullinger");
const botonSiguiente = document.querySelector(".btnSiguiente");


const preguntasZ = [
    {
        numero: 1, url: '../img/imagenesNegociacion/nego2.png'
    },
    {
        numero: 2, url: '../img/imagenesNegociacion/nego3.png'
    }

]

contador = 0
indice = 0

botonSiguiente.addEventListener("click", () => {
    contador++
    if (contador === 2) {
        indice = 4
    }
    const preguntaEncontrada = preguntasZ.find(pregunta => pregunta.numero === (contador));

    contenedorZ.innerHTML = `
    
    <div class="contenedorImagenN">
    <img src="${preguntaEncontrada.url}" alt="">
    </div>
                            
                            <section class="contenedorPreguntasZ">
                                <div class="preguntasZ preguntasN">
                                    <div>
                                        <p>${indice + 5}.</p>
                                        <input id="a1" type="text" placeholder="Respuesta...">
                                    </div>
                                    <div>
                                        <p>${indice + 6}.</p>
                                        <input id="a2" type="text" placeholder="Respuesta...">
                                    </div>
                                    <div>
                                        <p>${indice + 7}.</p>
                                        <input id="a3" type="text" placeholder="Respuesta...">
                                    </div>
                                    <div>
                                        <p>${indice + 8}.</p>
                                        <input id="a4" type="text" placeholder="Respuesta...">
                                    </div>
                                </div>
                            </section>
    `;



    if (contador === preguntasZ[1].numero) {

        const contenedorSiguiente = document.querySelector(".contenedorSiguiente");

        contenedorSiguiente.innerHTML = `<div class="button-container removePaddingZ">
            <button id="btn2validate" onclick="sendAnswers('cuestionario-individual', 46)"
                disabled>Enviar</button>
        </div>
        `;
    };
})



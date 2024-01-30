const contenedorZ = document.querySelector(".contenedorZullinger");
const botonSiguiente = document.querySelector(".btnSiguiente");


const preguntasZ = [
    {
        numero: 1, url: '../img/imagenesBender/1.png', q1: `2a. ¿A qué se parece lo que ve? Puede considerar toda la lamina o un sector de
    ella`, q2: `2b. ¿Qué fue lo que le dio lo idea que se parecía a la respuesta que dio?`,
    },
    {
        numero: 2, url: '../img/imagenesBender/2.png', q1: `3a. ¿A qué se parece lo que ve? Puede considerar toda la lamina o un sector de
    ella`, q2: `3b. ¿Qué fue lo que le dio lo idea que se parecía a la respuesta que dio?`,
    },
    {
        numero: 3, url: '../img/imagenesBender/3.png', q1: `4a. Si bien ya dio las tres respuestas que necesitamos, ¿Hay algo más que vea en la imagen? Cuéntenos por favor.`, q2: `4b. ¿Qué fue lo que le dio lo idea que se parecía a la respuesta que dio?`,
    },
];

let indice = 0;

botonSiguiente.addEventListener("click", () => {
    indice++
    const preguntaEncontrada = preguntasZ.find(pregunta => pregunta.numero === (indice));

    contenedorZ.innerHTML = `
    <div class="contenedorImagen">
    <img src="${preguntaEncontrada.url}" alt="">
    </div>
    <section class="contenedorPreguntasZ">
                                <div class="preguntasZ">

                                    <div>
                                        <p id="q1">1a. ¿A qué se parece lo que ve? Puede considerar toda la lamina o un
                                            sector
                                            de
                                            ella.
                                        </p>
                                        <input id="a1" type="text">
                                    </div>
                                    <div>
                                        <p id="q2">1b. ¿Qué fue lo que le dio lo idea que se parecía a la respuesta que
                                            dio?
                                        </p>
                                        <input id="a2" type="text">
                                    </div>

                                </div>
                                <div class="preguntasZ">
                                    <div>
                                        <p id="q1">2a. ¿A qué se parece lo que ve? Puede considerar toda la lamina o un
                                            sector
                                            de
                                            ella</p>
                                        <input id="a1" type="text">
                                    </div>
                                    <div>
                                        <p id="q2">2b. ¿Qué fue lo que le dio lo idea que se parecía a la respuesta que
                                            dio?
                                        </p>
                                        <input id="a2" type="text">
                                    </div>
                                </div>

                                <div class="preguntasZ">
                                    <div>
                                        <p id="q1">3a. ¿A qué se parece lo que ve? Puede considerar toda la lamina o un
                                            sector
                                            de
                                            ella</p>
                                        <input id="a1" type="text">
                                    </div>
                                    <div>
                                        <p id="q2">3b. ¿Qué fue lo que le dio lo idea que se parecía a la respuesta que
                                            dio?
                                        </p>
                                        <input id="a2" type="text">
                                    </div>
                                </div>

                                <div class="preguntasZ">
                                    <div>
                                        <p id="q1">4a. Si bien ya dio las tres respuestas que necesitamos, ¿Hay algo más
                                            que
                                            vea
                                            en la imagen? Cuéntenos por favor.</p>
                                        <input id="a1" type="text">
                                    </div>
                                    <div>
                                        <p id="q2">4b. ¿Qué fue lo que le dio lo idea que se parecía a la respuesta que
                                            dio?
                                        </p>
                                        <input id="a2" type="text">
                                    </div>
                                    <h1>Ahora le vamos a pedir que marque en qué sector de la lámina observó lo que
                                        indicó en cada una de las respuestas.</h1>
                                    <div class="contenedorImagen">
                                        <div class="imagenesZ">
                                            <img src="${preguntaEncontrada.url}" alt="">
                                        </div>
                                    </div>
                                </div>

                            </section>
    `;

    if (indice === preguntasZ[1].numero) {

        const contenedorSiguiente = document.querySelector(".contenedorSiguiente");

        contenedorSiguiente.innerHTML = `<div class="button-container removePaddingZ">
            <button id="btn2validate" onclick="sendAnswers('cuestionario-individual', 46)"
                disabled>Enviar</button>
        </div>
        `;
    };
});


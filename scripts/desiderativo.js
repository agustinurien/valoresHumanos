const contenedorDesiderativo = document.querySelector(".contenedorD");
const btnEmpezar = document.querySelector(".empezar");
const contenedorS = document.querySelector(".contenedorSiguiente");

btnEmpezar.addEventListener("click", () => {
    contenedorDesiderativo.innerHTML = ``;
    contenedorDesiderativo.innerHTML = `
    <div class="contenedorPreguntaD">
                                <div class="preguntaD">
                                    <p id="q1">1. Si Ud. No pudiera ser persona ¿Qué es lo que más le gustaría ser?
                                        <br>
                                        <br>
                                        (Puede elegir entre las clases de: Los objetos inanimados, Los animales y Los
                                        vegetales)
                                    </p>

                                    <p class="aclaracion">Debe elegir en el orden que Ud. Prefiera. No precisa respetar
                                        el
                                        orden. De
                                        solo una vez cada una de estas clases (animal, objeto, vegetal,) Ud. Debe elegir
                                        un
                                        miembro
                                        específico de la clase. Le daremos un ejemplo: “Me gustaría ser un pájaro”.
                                        También
                                        debe
                                        especificar que tipo de pájaro. Ejemplo: “Me gustaría ser un canario”. Luego
                                        responderá
                                        el
                                        porqué: son las razones por las que Ud. Elegirá ser pájaro y ese tipo de pájaro
                                        en
                                        particular. Para seguir con el ejemplo: (“Me gustaría ser un canario porque lo
                                        cuidan,
                                        le
                                        dan
                                        de comer, etc.”).</p>
                                </div>
                                <div class="respuestaD">
                                    <p>Me gustaria ser:</p>
                                    <input id="a1" type="text" placeholder="">
                                </div>
                                <input id="a1" type="text" placeholder="Porque...">
                            </div>

                            <div class="contenedorPreguntaD">
                                <div class="preguntaD">
                                    <p id="q1">2. Si Ud. No pudiera ser ni persona ni la clase que eligió en la
                                        respuesta 1,
                                        ¿Qué es lo que más le gustaría ser?
                                    </p>

                                </div>
                                <div class="respuestaD">
                                    <p>Me gustaria ser:</p>
                                    <input id="a1" type="text" placeholder="">
                                </div>
                                <input id="a1" type="text" placeholder="Porque...">
                            </div>

                            <div class="contenedorPreguntaD">
                                <div class="preguntaD">
                                    <p id="q1">3. Si Ud. No pudiera ser ni persona ni (la clases que eligió en las
                                        respuestas 1 y 2) ¿Qué es lo que más le gustaría ser?
                                    </p>

                                </div>
                                <div class="respuestaD">
                                    <p>Me gustaria ser:</p>
                                    <input id="a1" type="text" placeholder="">
                                </div>
                                <input id="a1" type="text" placeholder="Porque...">
                            </div>

                            <div class="contenedorPreguntaD">
                                <div class="preguntaD">
                                    <p>Ahora le preguntaremos en sentido inverso:</p>
                                    <p id="q1">1. Si Ud. No pudiera ser persona ¿Qué es lo que menos le gustaría ser?
                                        (entre los animales, vegetales y objetos)
                                    </p>

                                </div>
                                <div class="respuestaD">
                                    <p>Lo que menos me gustaría ser es:</p>
                                    <input id="a1" type="text" placeholder="">
                                </div>
                                <input id="a1" type="text" placeholder="Porque...">
                            </div>

                            <div class="contenedorPreguntaD">
                                <div class="preguntaD">
                                    <p id="q1">2. Si Ud. No pudiera ser ni persona ni (la clase que rechazó en la
                                        respuesta
                                        1) ¿Qué es lo que menos le gustaría ser?
                                    </p>

                                </div>
                                <div class="respuestaD">
                                    <p>Lo que menos me gustaría ser es:</p>
                                    <input id="a1" type="text" placeholder="">
                                </div>
                                <input id="a1" type="text" placeholder="Porque...">
                            </div>

                            <div class="contenedorPreguntaD">
                                <div class="preguntaD">
                                    <p id="q1">Si Ud. No pudiera ser ni persona ni (elimine las clases que rechazó en
                                        las respuestas 1 y 2) ¿Qué es lo que menos le gustaría ser?
                                    </p>

                                </div>
                                <div class="respuestaD">
                                    <p>Lo que menos me gustaría ser es:</p>
                                    <input id="a1" type="text" placeholder="">
                                </div>
                                <input id="a1" type="text" placeholder="Porque...">
                            </div>
    `;
    contenedorS.innerHTML = ``;
    contenedorS.innerHTML = `
    <div class="button-container">
                            <button id="btn2validate" onclick="sendAnswers('cuestionario-individual', 46)"
                                disabled>Enviar</button>
                        </div>
    `;
})
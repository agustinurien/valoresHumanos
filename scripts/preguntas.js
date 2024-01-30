const contenedorSiguiente = document.querySelector(".contenedorSiguiente");
const botonSiguiente = document.querySelector(".btnSiguiente");
const tabla = document.querySelector(".tabla");

let contador = 0;

const preguntas2 = [
    {
        pregunta: "42 40 38 36 34 32 ¿El número que sigue es?",
        opciones: ["26", "28", "29", "30"],
        numeroPregunta: "p1"
    },
    {
        pregunta: "¿Qué grupo no viene bien?",
        opciones: ["RSTT", "FGHF", "DEFF", "IJKK"],
        numeroPregunta: "p2"
    },
    {
        pregunta: "d ee f f f g g g ¿La letra que sigue es?",
        opciones: ["RSTT", "FGHF", "DEFF", "IJKK"],
        numeroPregunta: "p3"
    },
    {
        pregunta: "25 25 20 20 15 15 ¿El número que sigue es?",
        opciones: ["10", "11", "12", "15"],
        numeroPregunta: "p4"
    },
    {
        pregunta: "¿Qué grupo no viene bien?",
        opciones: ["JABK", "WABX", "MABN", "APQB"],
        numeroPregunta: 5
    },
    {
        pregunta: "d e d f d g d h ¿La letra que sigue es?",
        opciones: ["d", "g", "h", "i"],
        numeroPregunta: "p6"
    },
    {
        pregunta: "20 2 18 2 16 2 ¿El número que sigue es?",
        opciones: ["12", "14", "15", "16"],
        numeroPregunta: "p7"
    },
    {
        pregunta: "¿Qué grupo no viene bien?",
        opciones: ["OAIU", "EAUO", "BXKM", "UEIA"],
        numeroPregunta: "p8"
    },
    {
        pregunta: "d e d e f g f g h i h i¿La letra que sigue es?",
        opciones: ["e", "h", "i", "j"],
        numeroPregunta: "p9"
    },
];

const preguntas3 = [
    {
        pregunta: "1 2 6 7 11 12 ¿El número que sigue es?",
        opciones: ["13", "14", "15", "16"],
        numeroPregunta: "p1"
    },
    {
        pregunta: "¿Qué grupo no viene bien?",
        opciones: ["PQRS", "BCBC", "WXWX", "MNMN"],
        numeroPregunta: "p2"
    },
    {
        pregunta: " r s t a r s t b r s t ¿La letra que sigue es?",
        opciones: ["a", "b", "c", "u"],
        numeroPregunta: "p3"
    },
    {
        pregunta: "4 5 5 6 6 ¿El número que sigue es?",
        opciones: ["6", "7", "8", "9"],
        numeroPregunta: "p4"
    },
    {
        pregunta: "¿Qué grupo no viene bien?",
        opciones: ["GHHI", "DEEF", "STTU", "KLMM"],
        numeroPregunta: 5
    },
    {
        pregunta: "f f f f f g g g g h h h 1 ¿La letra que sigue es?",
        opciones: ["i", "j", "k", "l"],
        numeroPregunta: "p6"
    },
    {
        pregunta: " 1 2 4 8 16 32 ¿El número que sigue es?",
        opciones: ["36", "48", "64", "96"],
        numeroPregunta: "p7"
    },
    {
        pregunta: "¿Qué grupo no viene bien?",
        opciones: ["SJKL", "SVWX", "BLMN", "SDEF"],
        numeroPregunta: "p8"
    },
    {
        pregunta: "w v u t s r q p ¿La letra que sigue es?",
        opciones: ["m", "o", "n", "p"],
        numeroPregunta: "p9"
    },
];

botonSiguiente.addEventListener("click", () => {
    contador++
    console.log(contador)
    if (contador === 1) {
        tabla.innerHTML = ``;

        preguntas2.forEach((elemento) => {
            const preguntasHtml = document.createElement("div")
            preguntasHtml.innerHTML = `<div class="celda celdaPreguntas">
            <h3>${elemento.pregunta}</h3>
        </div>
        <div class="opciones">
            <div>
                <input type="radio" id="opcion1" name="${elemento.numeroPregunta}" value="opcion1">
                <label for="opcion1">${elemento.opciones[0]}</label><br>
            </div>
            <div>
                <input type="radio" id="opcion2" name="${elemento.numeroPregunta}" value="opcion2">
                <label for="opcion2">${elemento.opciones[1]}</label><br>
            </div>
            <div>
                <input type="radio" id="opcion3" name="${elemento.numeroPregunta}" value="opcion3">
                <label for="opcion3">${elemento.opciones[2]}</label><br>
            </div>
            <div>
                <input type="radio" id="opcion4" name="${elemento.numeroPregunta}" value="opcion4">
                <label for="opcion4">${elemento.opciones[3]}</label><br>
            </div>
        </div>`;
            tabla.appendChild(preguntasHtml);
        })

    }

    if (contador === 2) {
        tabla.innerHTML = ``;

        preguntas3.forEach((elemento) => {
            const preguntasHtml = document.createElement("div")
            preguntasHtml.innerHTML = `<div class="celda celdaPreguntas">
            <h3>${elemento.pregunta}</h3>
        </div>
        <div class="opciones">
            <div>
                <input type="radio" id="opcion1" name="${elemento.numeroPregunta}" value="opcion1">
                <label for="opcion1">${elemento.opciones[0]}</label><br>
            </div>
            <div>
                <input type="radio" id="opcion2" name="${elemento.numeroPregunta}" value="opcion2">
                <label for="opcion2">${elemento.opciones[1]}</label><br>
            </div>
            <div>
                <input type="radio" id="opcion3" name="${elemento.numeroPregunta}" value="opcion3">
                <label for="opcion3">${elemento.opciones[2]}</label><br>
            </div>
            <div>
                <input type="radio" id="opcion4" name="${elemento.numeroPregunta}" value="opcion4">
                <label for="opcion4">${elemento.opciones[3]}</label><br>
            </div>
        </div>`;
            tabla.appendChild(preguntasHtml);
        })

        contenedorSiguiente.innerHTML = ``;
        contenedorSiguiente.innerHTML = `<div class="button-container removePaddingZ">
                <button id="btn2validate" onclick="sendAnswers('cuestionario-individual', 46)"
                    disabled>Enviar</button>
            </div>
            `;
    }

});



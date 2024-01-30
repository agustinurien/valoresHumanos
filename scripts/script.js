const answers = {}
let testSrc;
let testsN;
let num = 1
let exists = false;


fetch('./src/testSrc.json')
  .then(response => response.json())
  .then(data => {
    testSrc = data;
  });


let root = document.getElementById("root");
let domFields = document.getElementsByTagName("input");

// funcion para ejecutar funciones y obtener las respuestas, volcarlas en codigo html y enviarlas a la bdd
let sendAnswers = (count) => {

  // llamo a una funcion para obtener las respuestas
  getAnswers(count)
    
  // embebo esas respuestas dentro de un codigo html
  const report = convert2Html(answers)

  // ejecuto la funcion que guarde ese codigo en la bdd
  sendTest(idLegajo, exists, num, report)
  exists = true
  num++

  // muestro el siguiente test o mensaje final
  // showNextTest()
}

// funcion para obtener las preguntas y respuestas del formulario y guardarlas en una variable
let getAnswers = (count) => {
  // por cuestiones de comodidad, el valor de count va a ser igual a la cantidad de preguntas, por lo que para obtener todas las preguntas y respuestas, sumo 1 a ese valor
  count++

  // recorro el dom para obtener los campos iguales a la cantidad que recibo del boton
  for (let i=1 ; i < count ; i++){
    // defino los id de los campos con la pregunta y la respuesta del dom
    let qid = "q" + i
    let aid = "a" + i

    // obtengo los valores del campo definido en la iteracion
    let q = document.getElementById(qid).innerHTML
    let a = document.getElementById(aid).value

    // guardo los valores en un objeto
    addAnswer(q,a)
  }
}

// funcion para guardar las preguntas y respuestas en un objeto
let addAnswer = (pregunta, respuesta) => {
    answers[pregunta]=respuesta
}

// funcion para introducir las preguntas y respuestas en un codigo html
let convert2Html = (objeto) => {
  // creo una variable "html" para almacenar el codigo
  let html = "";

  // recorro el objeto para introducir cada pregunta y respuesta en etiquetas html y las almaceno en la variable
  for (const pregunta in objeto) {
    // del objeto obtengo la pregunta que esta como "key"
    const respuesta = objeto[pregunta];

    // agrego en "html" primero la pregunta y despues agrego la respuesta
    html += `<div class="item col-12 wrap-container"><p style="font-weight: bold;">${pregunta}</p>`;
    html += `<p class="answer">${respuesta}</p></div>`;
  }

  // hago un return de "html" agregandole el codigo de apertura y cierre
  return html
}

let sendTest = async (id, exists, num, data) => {
  try {
    const response = await fetch("./scripts/sendTest.php?id=" + id + "&num=" + num + "&exists=" + exists + "&data=" + data, {
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log(`Error ${response.status}: ${response.statusText}`);
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
  } catch (err) {
      console.log(err);
  }
};

let showTest = () => {
  root.innerHTML = testSrc.t101.html
}

// funcion para validad que todos los campos esten completados
let validateFields = () => {

  // Traigo el elemento del boton
  let btn2validate = document.getElementById("btn2validate")

  // Creo una variable para validar
  let isTrue = true

  // Recorre cada campo y verifica si está vacío
  for (let i = 0; i < domFields.length; i++) {
    if (domFields[i].value == "") {
      isTrue = false;
    }
  }

  // Valido que ningun campo este vacio
  if (isTrue){
    btn2validate.disabled = false
  } else {
    btn2validate.disabled = true
  }
}


setTimeout(() => {
  testsN = testsAssigned.length
  
  showTest()
  
  // Agrego listeners a los input
  for (let i = 0; i < domFields.length; i++) {
    domFields[i].addEventListener("blur", validateFields);
  
    domFields[i].addEventListener("focus", function(event) {
      event.target.style.border = "2px solid blue";
      event.target.style.marginTop = "9px";
    });
    
    domFields[i].addEventListener("blur", function(event) {
      event.target.style.border = "1px solid #cccccc";
      event.target.style.marginTop = "10px";
    });
  }
}, "500");

const params = new URLSearchParams(window.location.search);
const idLegajo = params.get('lgj');

let testsAssigned;
let names;


const getTestsAssigned = async () => {
    try {
        const response = await fetch("./scripts/getTestsAssigned.php?idLegajo=" + idLegajo, {
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.log(`Error ${response.status}: ${response.statusText}`);
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
    } catch (err) {
        console.log(err);
    }
};


getTestsAssigned()
    .then(data => {
        testsAssigned = data[0].testsAsignados.split(',').map(elem => elem.trim())
        names = data[0].nombres

        // Utiliza los datos de usuarios aquí
        console.log(testsAssigned.length);
        console.log(testsAssigned);
    })
    .catch(error => {
        console.log('Hubo un error:', error);
    });
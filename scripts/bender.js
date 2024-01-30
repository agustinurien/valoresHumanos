const fotos = document.querySelector(".imagenes");
const contenedorSiguiente = document.querySelector(".contenedorSiguiente")
const botonSiguiente = document.querySelector(".btnSiguiente");
const pasos = document.querySelector(".pasos");
const contenedorImagenes = document.querySelector(".contenedorImagenes");

const imagenes = [
    { numero: 1, url: '../img/imagenesBender/1.png' },
    { numero: 2, url: '../img/imagenesBender/2.png' },
    { numero: 3, url: '../img/imagenesBender/3.png' },
    { numero: 4, url: '../img/imagenesBender/4.png' },
    { numero: 5, url: '../img/imagenesBender/5.png' },
    { numero: 6, url: '../img/imagenesBender/6.png' },
    { numero: 7, url: '../img/imagenesBender/7.png' },
    { numero: 8, url: '../img/imagenesBender/8.png' },
    { numero: 9, url: '../img/imagenesBender/9.png' }
];

let indice = 0;

botonSiguiente.addEventListener("click", () => {
    indice++;

    contenedorImagenes.classList.add("contenedorImagenes-active");
    const imagenActual = imagenes.find(imagen => imagen.numero === (indice));

    fotos.innerHTML = `<img src="${imagenActual.url}" alt="" class="imagenesBender">`;
    pasos.classList.add("disabled");
    pasos.innerHTML = ``

    if (indice === imagenes[8].numero) {
        contenedorSiguiente.innerHTML = ``;
        contenedorSiguiente.classList.add("removePadding");
        contenedorSiguiente.innerHTML = `
        <div class="subirArchivo">
            <form action="procesar.php" method="POST" enctype="multipart/form-data">
                <input type="file" name="foto" accept="image/*">
                <input class="subirFoto" type="submit" value="Finalizar">
            </form>
        </div>
        `
    };
});

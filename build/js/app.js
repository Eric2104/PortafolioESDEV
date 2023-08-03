const btnMenu = document.getElementById('btnMenu');
const contenedorNav = document.getElementById('contenedorNav');
const btnProyectoA = document.getElementById('btnProyectoA');
const btnR = document.getElementById('btnRetroceder');
const btnS = document.getElementById('btnSiguiente');
const contenedorImagen = document.getElementById('contenedorSlideI');
const guardarPDF = document.querySelectorAll('.descargarPdf');
var imagenesSlide = ['../../build/img/sitioUno.png','../../build/img/sitioPrueba2.png']

//Contenido del slide
var textoSlide = [{
    titulo: "Gestor de gastos",
    descripcion: "Usando una serie de herramientas como Firebase, SCSS, GULP desarrollé una aplicación web que permite guardar gastos de acuerdo al usuario que inicio sesión. Podrá borrar, agregar o modificar las tareas creadas y ser actualizada en tiempo real.",
    linkProyecto: "https://react-app-lista-gasto.web.app/iniciar-sesion"
},
{
    titulo: "Próximamente",
    descripcion: "Se estará desarrollando nuevos sitios web aquí, tanto front-end como back-end",
    linkProyecto: "https://react-app-lista-gasto.web.app/iniciar-sesion"
}]

//Servicio de email
const sendButton = document.getElementById('btnFormulario');
sendButton.addEventListener('click', function(){
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    // Url que se utilizará para abrir la página de composición de Gmail en el navegador
    const emailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent("ericasoto2104@gmail.com") + "&su=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent("Emisor: " + email + ".\n" + message);
    window.open(emailUrl, '_blank');
});



//Slides
const tituloP = document.getElementById("tituloProyecto");
const descripcionP = document.getElementById("descripcionProyecto");
const botonP = document.getElementById("botonProyecto");


let currentIndex = 0;

function mostrarImagen() {
    const imageUrl = imagenesSlide[currentIndex];
    contenedorImagen.style.backgroundImage = `url(${imageUrl})`;
    tituloP.textContent = textoSlide[currentIndex].titulo
    descripcionP.textContent = textoSlide[currentIndex].descripcion
    //Código temporal
    console.log(currentIndex)
    if(currentIndex === 1){
        botonP.style.display = "none";
    }else{
        botonP.style.display = "block";
    }
}

function siguienteImagen() {
    currentIndex = (currentIndex + 1) % imagenesSlide.length;
    mostrarImagen();
}
function imagenAnterior() {
    currentIndex = (currentIndex - 1 + imagenesSlide.length) % imagenesSlide.length;
    mostrarImagen();
}


btnMenu.addEventListener('click', function(){
    // console.log(contenedorNav.classList[0])
    if(contenedorNav.classList[1] !=='mostrar' || contenedorNav.classList[1] === undefined){
        contenedorNav.classList.add('mostrar')
        return;
    }else{
        contenedorNav.classList.remove('mostrar')
    }
});

guardarPDF.forEach(button => {
    button.addEventListener("click", () => {
        // URL del archivo PDF que quieres descargar
        const pdfUrl = "../../build/archivos/CVEric.pdf";

        // Crea un elemento de enlace oculto para descargar el PDF
        const downloadLink = document.createElement("a");
        downloadLink.href = pdfUrl;
        downloadLink.download = "CVEric.pdf";
        downloadLink.target = "_blank"; // Abre en una nueva pestaña si lo prefieres

        // Simula un clic en el enlace de descarga para descargar el PDF
        downloadLink.click();
    });
});


btnR.addEventListener("click",imagenAnterior);
btnS.addEventListener("click", siguienteImagen);

mostrarImagen();

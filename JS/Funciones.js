let animado = document.querySelectorAll(".animado");
let desenfoque = document.querySelectorAll(".desenfoque");
//let animadoLado = document.querySelectorAll(".animadoLado");

// Establece la fecha objetivo
const fechaObjetivo = new Date("2024-12-06T00:00:00").getTime(); // Cambia la fecha según lo necesites

const scriptURL = 'https://script.google.com/macros/s/AKfycbzWkcyyKkCHI7dkjBBElhQfNusWPNbuaB_DVSgPWUERnAraVLMB-NC5x7Q67C_bPodNag/exec'
const form = document.forms['contact-form']


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
            .then(response => alert("Gracias! Tus respuestas han sido guardadas"))
            .then(() => {
                window.location.reload();
            })
            .catch(error => console.error('Error!', error.message))
})


function actualizarContador() {
    const ahora = new Date().getTime(); // Obtiene la fecha y hora actual
    const distancia = fechaObjetivo - ahora; // Calcula la distancia entre la fecha actual y la fecha objetivo

    // Calcula días, horas, minutos y segundos
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Muestra cada unidad en su respectivo elemento
    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

    // Si la cuenta regresiva ha terminado
    if (distancia < 0) {
        clearInterval(intervalo); // Detiene el contador
        document.getElementById("contador").innerHTML = "¡El gran día ha llegado!";
    }
}

// Actualiza el contador cada segundo
const intervalo = setInterval(actualizarContador, 1000);


function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado - 900 < scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarAbajo");
        }
    }
}

function mostrarScrollDesenfoque() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < desenfoque.length; i++) {
        let alturaDesenfoque = desenfoque[i].offsetTop;
        if (alturaDesenfoque - 900 < scrollTop) {
            desenfoque[i].style.filter = "blur(0px)";
            desenfoque[i].classList.add("desenfocado");
        }
    }
}
//
//function mostrarScrollLado(){
//    let scrollTop = document.documentElement.scrollTop;
//    for(var i= 0; i<animadoLado.length; i++ ){
//        let alturaAnimadoL = animadoLado[i].offsetTop;
//        if(alturaAnimadoL - 1000 < scrollTop){
//            animadoLado[i].style.opacity = 1;
//            animadoLado[i].classList.add("mostrarLado");
//        }
//    } 
//}
//window.addEventListener('scroll',mostrarScrollLado);

window.addEventListener('scroll', mostrarScroll);
window.addEventListener('scroll', mostrarScrollDesenfoque);



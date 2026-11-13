let menuVisible = false;
//Muestra y oculta el menú
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

//Ocultar menú al seleccionar
function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}


//Animación habilidades
function efectoHabilidades() {
    var habilidades = document.getElementById("habilidades");
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if (distancia_habilidades >= 300) {
        let skills = document.getElementsByClassName("progreso");
        skills[0].classList.add("java");
        skills[1].classList.add("html");
        skills[2].classList.add("javascript");
        skills[3].classList.add("Angular");
        skills[4].classList.add("sql");
        skills[5].classList.add("c");
        skills[6].classList.add("springboot");
        skills[7].classList.add("tgrupo");
        skills[8].classList.add("rproblemas");
        skills[9].classList.add("comunicacion");
        skills[10].classList.add("iniciativa");
        skills[11].classList.add("organizado");
        skills[12].classList.add("empatia");
    }
}

//Scroll para la empezar animación
window.onscroll = function () {
    efectoHabilidades();
}

//Contactame
/*function contacto() {
    const $form = document.querySelector('#form')
    const $buttonMailto = document.querySelector('#envio')

    $form.addEventListener('submit', handleSubmit)

    function handleSubmit(event) {
        event.preventDefault()
        const form = new FormData(this)
        $buttonMailto.setAttribute('href', `mailto:santymosquera3@gmail.com?subject=${form.get('nombre')}${form.get('ncontacto')}${form.get('email')}${form.get('tema')}&body=${form.get('msj')}`)
        $buttonMailto.click()
    }
}*/

//Envío del formulario de contacto (Web3Forms) con confirmación en la página
const formularioContacto = document.querySelector('#contacto form');
const mensajeEnvio = document.getElementById('mensajeEnvio');

function mostrarMensajeEnvio(texto, tipo) {
    mensajeEnvio.textContent = texto;
    mensajeEnvio.className = tipo;
    mensajeEnvio.hidden = false;
}

formularioContacto.addEventListener('submit', async function (event) {
    event.preventDefault();
    mensajeEnvio.hidden = true;

    try {
        const respuesta = await fetch(this.action, {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: new FormData(this)
        });
        const datos = await respuesta.json();

        if (datos.success) {
            mostrarMensajeEnvio('¡Mensaje enviado!', 'mensaje-exito');
            this.reset();
        } else {
            mostrarMensajeEnvio('No se pudo enviar el mensaje. Intenta de nuevo.', 'mensaje-error');
        }
    } catch (error) {
        mostrarMensajeEnvio('Error de conexión. Intenta de nuevo más tarde.', 'mensaje-error');
    }
});


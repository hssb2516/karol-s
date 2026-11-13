// REPRODUCTOR DE MÚSICA

const musica = document.getElementById("musica");
const musicaBtn = document.getElementById("musicaBtn");

musicaBtn.addEventListener("click", async function() {

    if (musica.paused) {

        try {
            await musica.play();
            musicaBtn.innerHTML = "⏸ Pausar canción";

        } catch (error) {
            musicaBtn.innerHTML = "🎵 Intentar reproducir";
        }

    } else {

        musica.pause();
        musicaBtn.innerHTML = "🎵 Reproducir nuestra canción";

    }

});

// CONTENEDOR DE CORAZONES

const contenedor = document.getElementById("corazones");

// FUNCIÓN PARA CREAR CORAZONES

function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.classList.add("corazon");

    corazon.innerHTML = Math.random() > 0.5 ? "💙" : "♡";

    // Posición aleatoria
    corazon.style.left = Math.random() * 100 + "vw";

    // Tamaño aleatorio
    corazon.style.fontSize =
        (20 + Math.random() * 25) + "px";

    // Duración de la animación
    corazon.style.animationDuration =
        (3 + Math.random() * 3) + "s";

    corazon.style.color = "#1687df";

    contenedor.appendChild(corazon);

    // Eliminar corazón al terminar la animación
    corazon.addEventListener("animationend", function() {
        corazon.remove();
    });

}


// CORAZONES AL INGRESAR

let cantidad = 0;

const lluvia = setInterval(function() {

    crearCorazon();

    cantidad++;

    if (cantidad >= 30) {
        clearInterval(lluvia);
    }

}, 150);


// BOTÓN DE LA PREGUNTA FINAL

const boton = document.getElementById("respuesta");

const mensaje = document.getElementById("mensajeRespuesta");

boton.addEventListener("click", function() {

    mensaje.innerHTML =
        "¡Entonces que comience nuestra próxima aventura! 💙";

    // Lluvia adicional de corazones
    for (let i = 0; i < 20; i++) {

        setTimeout(function() {
            crearCorazon();
        }, i * 100);

    }

});

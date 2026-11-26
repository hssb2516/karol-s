// HISTORIA HYK - interacciones de la página

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("corazones");

    function crearCorazon() {
        if (!contenedor) return;
        const corazon = document.createElement("div");
        corazon.className = "corazon";
        corazon.textContent = Math.random() > 0.5 ? "💚" : "♡";
        corazon.style.left = `${Math.random() * 100}vw`;
        corazon.style.fontSize = `${20 + Math.random() * 25}px`;
        corazon.style.animationDuration = `${3 + Math.random() * 3}s`;
        corazon.style.color = "#00C853";
        contenedor.appendChild(corazon);
        corazon.addEventListener("animationend", () => corazon.remove(), { once: true });
    }

    // Lluvia inicial de corazones y flujo continuo moderado.
    for (let i = 0; i < 24; i++) {
        window.setTimeout(crearCorazon, i * 160);
    }
    window.setInterval(crearCorazon, 850);

    // Respuesta final.
    const botonRespuesta = document.getElementById("respuesta");
    const mensajeRespuesta = document.getElementById("mensajeRespuesta");
    botonRespuesta?.addEventListener("click", () => {
        if (mensajeRespuesta) mensajeRespuesta.textContent = "¡Entonces vamos a darle! 💙";
        for (let i = 0; i < 18; i++) {
            window.setTimeout(crearCorazon, i * 100);
        }
    });

    // Reproductor de música: el navegador exige interacción del usuario.
    const musica = document.getElementById("musica");
    const musicaBtn = document.getElementById("musicaBtn");
    musicaBtn?.addEventListener("click", async () => {
        if (!musica) return;
        if (musica.paused) {
            try {
                await musica.play();
                musicaBtn.textContent = "⏸ Pausar canción";
                musicaBtn.classList.add("reproduciendo");
            } catch (error) {
                musicaBtn.textContent = "🎵 Reproducir canción";
                console.error("No se pudo reproducir la canción:", error);
            }
        } else {
            musica.pause();
            musicaBtn.textContent = "🎵 Reproducir canción";
            musicaBtn.classList.remove("reproduciendo");
        }
    });

    // Unicornio fantástico: SVG vectorial con alas animadas por CSS.
    // No requiere descargar modelos externos ni servicios de terceros.
    const botonUnicornio = document.getElementById("botonUnicornio");
    const mensajeUnicornio = document.getElementById("mensajeUnicornio");

    const unicornioSVG = `
    <svg viewBox="0 0 520 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Unicornio alado volando">
      <defs>
        <linearGradient id="pelaje" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#ffffff"/><stop offset=".48" stop-color="#e6e8f7"/><stop offset="1" stop-color="#aeb6d8"/>
        </linearGradient>
        <linearGradient id="crin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#ff9ed8"/><stop offset=".48" stop-color="#a98bff"/><stop offset="1" stop-color="#70d9f5"/>
        </linearGradient>
        <linearGradient id="oro" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#fff1a6"/><stop offset=".5" stop-color="#e8b84c"/><stop offset="1" stop-color="#9f6826"/>
        </linearGradient>
        <linearGradient id="ala" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#ffffff"/><stop offset=".55" stop-color="#d8e6ff"/><stop offset="1" stop-color="#9cabe0"/>
        </linearGradient>
      </defs>
      <!-- Ala lejana -->
      <g class="ala-lejana" stroke="#aab8dd" stroke-width="3" stroke-linejoin="round">
        <path fill="url(#ala)" d="M292 145 Q330 45 418 20 Q397 66 388 94 Q429 70 470 78 Q434 108 411 128 Q447 119 485 140 Q425 157 384 177 L320 202Z"/>
        <path fill="#f8fbff" d="M315 157 Q351 85 418 20 Q383 96 350 169Z"/>
        <path fill="#e7edff" d="M340 170 Q394 106 470 78 Q416 139 365 185Z"/>
        <path fill="#f8fbff" d="M365 183 Q431 145 485 140 Q433 181 380 199Z"/>
      </g>
      <!-- Cola -->
      <path d="M128 189 Q75 175 57 215 Q92 211 103 240 Q65 244 54 276 Q111 259 132 224Z" fill="url(#crin)" stroke="#9877d5" stroke-width="3"/>
      <!-- Cuerpo y cuello -->
      <g class="cuerpo-unicornio">
        <path d="M125 158 Q168 112 265 139 Q320 153 349 190 Q322 233 244 235 Q166 239 118 204Z" fill="url(#pelaje)" stroke="#7e89b2" stroke-width="4"/>
        <path d="M282 169 Q305 108 345 83 Q373 67 393 92 Q401 118 371 151 L344 203Z" fill="url(#pelaje)" stroke="#7e89b2" stroke-width="4"/>
        <!-- Cabeza -->
        <path d="M355 93 Q380 56 421 73 Q452 88 449 119 Q439 145 405 146 L373 128Z" fill="url(#pelaje)" stroke="#7e89b2" stroke-width="4"/>
        <path d="M418 119 Q449 116 464 137 Q447 155 415 145Z" fill="#e9eaf5" stroke="#7e89b2" stroke-width="3"/>
        <path d="M383 77 L373 43 L405 68Z" fill="#e9d9ed" stroke="#7e89b2" stroke-width="3"/>
        <ellipse cx="424" cy="101" rx="6" ry="8" fill="#34345d"/>
        <circle cx="426" cy="98" r="2" fill="#fff"/>
        <path d="M447 138 Q455 143 461 137" fill="none" stroke="#9a718a" stroke-width="3" stroke-linecap="round"/>
        <!-- Cuerno -->
        <path d="M390 73 L405 10 L414 76Z" fill="url(#oro)" stroke="#a97832" stroke-width="3"/>
        <path d="M396 56 L409 54 M399 39 L411 37 M402 23 L408 22" stroke="#fff0ad" stroke-width="3"/>
        <!-- Crin -->
        <path d="M368 75 Q340 33 363 12 Q360 52 392 60 Q360 42 379 18 Q379 57 408 70 Q384 82 368 75Z" fill="url(#crin)" stroke="#a47bd4" stroke-width="3"/>
        <path d="M370 123 Q333 119 323 158 Q350 145 355 181 Q375 147 370 123Z" fill="url(#crin)" stroke="#a47bd4" stroke-width="3"/>
        <!-- Patas en galope -->
        <path d="M158 211 Q139 239 112 254 L92 248 Q106 224 118 196Z" fill="url(#pelaje)" stroke="#7e89b2" stroke-width="4"/>
        <path d="M205 222 Q225 248 251 253 L265 241 Q244 220 244 207Z" fill="url(#pelaje)" stroke="#7e89b2" stroke-width="4"/>
        <path d="M286 211 Q309 231 337 224 L347 208 Q323 194 315 179Z" fill="url(#pelaje)" stroke="#7e89b2" stroke-width="4"/>
        <path d="M130 250 L113 266 L91 260 L92 248Z M251 249 L271 257 L278 246 L265 239Z M332 220 L352 222 L359 207 L347 202Z" fill="url(#oro)" stroke="#9e7137" stroke-width="3"/>
        <!-- Ala cercana -->
        <g class="ala-cercana" stroke="#9eacd2" stroke-width="3" stroke-linejoin="round">
          <path fill="url(#ala)" d="M280 170 Q246 80 282 20 Q295 66 314 86 Q307 39 334 4 Q342 65 354 91 Q372 58 402 50 Q389 111 359 155 L322 199Z"/>
          <path fill="#fff" d="M280 170 Q274 91 282 20 Q303 100 309 180Z"/>
          <path fill="#e7edff" d="M309 181 Q314 85 334 4 Q339 100 333 193Z"/>
          <path fill="#fff" d="M333 190 Q351 99 402 50 Q377 137 354 199Z"/>
        </g>
      </g>
      <!-- Brillos -->
      <path d="M80 112 l5 12 12 5 -12 5 -5 12 -5-12 -12-5 12-5Z" fill="#ffe88c"/>
      <path d="M475 205 l4 9 9 4 -9 4 -4 9 -4-9 -9-4 9-4Z" fill="#fff"/>
    </svg>`;

    function lanzarUnicornio() {
        document.querySelectorAll(".unicornio-volador, .particula-magica").forEach(el => el.remove());
        const vuelo = document.createElement("div");
        vuelo.className = "unicornio-volador";
        vuelo.innerHTML = unicornioSVG;
        document.body.appendChild(vuelo);

        if (mensajeUnicornio) {
            mensajeUnicornio.textContent = "¡Que la magia y las aventuras nunca se acaben! ✨💙";
        }

        const intervalo = window.setInterval(() => {
            if (!document.body.contains(vuelo)) {
                window.clearInterval(intervalo);
                return;
            }
            const rect = vuelo.getBoundingClientRect();
            const chispa = document.createElement("span");
            chispa.className = "particula-magica";
            chispa.textContent = Math.random() > .5 ? "✦" : "✧";
            chispa.style.left = `${Math.max(0, rect.left + rect.width * (.1 + Math.random() * .65))}px`;
            chispa.style.top = `${rect.top + rect.height * (.3 + Math.random() * .5)}px`;
            document.body.appendChild(chispa);
            chispa.addEventListener("animationend", () => chispa.remove(), { once: true });
        }, 160);

        vuelo.addEventListener("animationend", () => {
            window.clearInterval(intervalo);
            vuelo.remove();
        }, { once: true });
    }

    botonUnicornio?.addEventListener("click", lanzarUnicornio);
});

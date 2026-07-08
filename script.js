const yes = document.getElementById("yes");
const no = document.getElementById("no");

const inicio = document.getElementById("inicio");
const final = document.getElementById("final");
const hearts = document.getElementById("hearts");

// ===== BOTÓN NO =====

const mensajesNo = [
    "No 😐",
    "No 😑",
    "No 🫤",
    "No 🫩",
    "No 🥺",
    "No 😭"
];

let intento = 0;

function mover() {

    const x = Math.random() * (window.innerWidth - no.offsetWidth - 20);
    const y = Math.random() * (window.innerHeight - no.offsetHeight - 20);

    no.style.position = "fixed";
    no.style.left = x + "px";
    no.style.top = y + "px";

    no.textContent = mensajesNo[intento];

    intento = (intento + 1) % mensajesNo.length;
}

no.addEventListener("mouseover", mover);

no.addEventListener("touchstart", function (e) {
    e.preventDefault();
    mover();
});

// ===== BOTÓN SÍ =====

yes.addEventListener("click", () => {

    inicio.style.display = "none";

    final.classList.remove("hidden");

    crearConfeti();

});

// ===== GALERÍA =====

const fotos = [
    "img/Foto 1.JPG",
    "img/Foto 2.JPG",
    "img/Foto 3.JPG",
    "img/Foto 4.jpg",
    "img/Foto 5.jpg"
];

let indice = 0;

setInterval(() => {

    const foto = document.getElementById("foto");

    if (foto && !final.classList.contains("hidden")) {

        indice = (indice + 1) % fotos.length;

        foto.style.opacity = "0";

        setTimeout(() => {

            foto.src = fotos[indice];

            foto.style.opacity = "1";

        }, 250);

    }

}, 3000);

// ===== CORAZONES Y DESTELLOS =====

function crearCorazon() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const figuras = ["❤️", "✨"];

    heart.innerHTML =
        figuras[Math.floor(Math.random() * figuras.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (18 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 3) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(crearCorazon, 300);

// ===== CONFETI =====

function crearConfeti() {

    for (let i = 0; i < 120; i++) {

        setTimeout(() => {

            const c = document.createElement("div");

            c.innerHTML = Math.random() > 0.5 ? "❤️" : "✨";

            c.style.position = "fixed";
            c.style.left = Math.random() * 100 + "vw";
            c.style.top = "-30px";
            c.style.fontSize = (18 + Math.random() * 15) + "px";
            c.style.transition = "transform 3s linear";

            document.body.appendChild(c);

            requestAnimationFrame(() => {
                c.style.transform =
                    `translateY(${window.innerHeight + 100}px) rotate(720deg)`;
            });

            setTimeout(() => {

                c.remove();

            }, 3200);

        }, i * 25);

    }

}

const yes = document.getElementById("yes");
const no = document.getElementById("no");

const inicio = document.getElementById("inicio");
const final = document.getElementById("final");
const hearts = document.getElementById("hearts");

// =====================
// BOTÓN NO
// =====================

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

    const margen = 20;

    const x = Math.random() * (window.innerWidth - no.offsetWidth - margen);
    const y = Math.random() * (window.innerHeight - no.offsetHeight - margen);

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

// =====================
// BOTÓN SÍ
// =====================

yes.addEventListener("click", () => {

    inicio.style.transform = "scale(.9)";
    inicio.style.opacity = "0";

    setTimeout(() => {

        inicio.style.display = "none";

        final.classList.remove("hidden");

        crearConfeti();

    }, 400);

});

// =====================
// GALERÍA
// =====================

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

    if (!foto || final.classList.contains("hidden")) return;

    foto.style.opacity = "0";
    foto.style.transform = "scale(.95)";

    setTimeout(() => {

        indice = (indice + 1) % fotos.length;

        foto.src = fotos[indice];

        foto.style.opacity = "1";
        foto.style.transform = "scale(1)";

    }, 250);

}, 3000);

// =====================
// CORAZONES
// =====================

function crearCorazon() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const figuras = [
        "❤️",
        "✨",
        "🌸"
    ];

    heart.innerHTML =
        figuras[Math.floor(Math.random() * figuras.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (18 + Math.random() * 18) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 3) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(crearCorazon, 350);

// =====================
// CONFETI
// =====================

function crearConfeti() {

    for (let i = 0; i < 120; i++) {

        setTimeout(() => {

            const item = document.createElement("div");

            const figuras = [
                "❤️",
                "✨",
                "🌸",
                "💕"
            ];

            item.innerHTML =
                figuras[Math.floor(Math.random() * figuras.length)];

            item.style.position = "fixed";

            item.style.left = Math.random() * 100 + "vw";

            item.style.top = "-40px";

            item.style.fontSize =
                (20 + Math.random() * 15) + "px";

            item.style.transition =
                "transform 3s linear";

            document.body.appendChild(item);

            requestAnimationFrame(() => {

                item.style.transform =
                    `translateY(${window.innerHeight + 120}px) rotate(720deg)`;

            });

            setTimeout(() => {

                item.remove();

            }, 3200);

        }, i * 20);

    }

}

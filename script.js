const yes = document.getElementById("yes");
const no = document.getElementById("no");

const inicio = document.getElementById("inicio");
const final = document.getElementById("final");
const hearts = document.getElementById("hearts");

// ===== BOTÓN SÍ =====
yes.addEventListener("click", () => {
    inicio.style.display = "none";
    final.classList.remove("hidden");
});

// ===== BOTÓN NO =====
no.addEventListener("mouseover", mover);
no.addEventListener("touchstart", function (e) {
    e.preventDefault();
    mover();
});

function mover() {

    const x = Math.random() * (window.innerWidth - no.offsetWidth);
    const y = Math.random() * (window.innerHeight - no.offsetHeight);

    no.style.position = "fixed";
    no.style.left = x + "px";
    no.style.top = y + "px";
}

// ===== GALERÍA DE FOTOS =====
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
        foto.src = fotos[indice];
    }

}, 3000);

// ===== CORAZONES =====
function crearCorazon() {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}

setInterval(crearCorazon, 300);

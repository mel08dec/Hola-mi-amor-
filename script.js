const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const final = document.getElementById("final");
const card = document.querySelector(".card");
const hearts = document.getElementById("hearts");

const frases = [
"🥲 Casi...",
"🤭 Jejeje",
"🥹 Piénsalo",
"🔫 Mejor dale que sí",
"😂 No tan rápido"
];

let intentos = 0;

function moverBoton(){

const margen = 20;

const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - margen);
const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - margen);

noBtn.style.position = "fixed";
noBtn.style.left = x + "px";
noBtn.style.top = y + "px";

noBtn.innerHTML = frases[intentos % frases.length];

intentos++;

}

noBtn.addEventListener("mouseover", moverBoton);
noBtn.addEventListener("touchstart", function(e){
e.preventDefault();
moverBoton();
});

yesBtn.addEventListener("click", ()=>{

card.style.display="none";

final.classList.remove("hidden");

crearConfeti();

});

function crearCorazon(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(crearCorazon,300);

function crearConfeti(){

for(let i=0;i<150;i++){

setTimeout(()=>{

const c=document.createElement("div");

c.innerHTML="💕""✨";

c.style.position="fixed";
c.style.left=Math.random()*100+"vw";
c.style.top="-20px";
c.style.fontSize=(15+Math.random()*25)+"px";

c.style.transition="4s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.style.transform="translateY(120vh) rotate(720deg)";

},50);

setTimeout(()=>{

c.remove();

},4500);

},i*20);

}
const fotos = [
    "img/Foto 1.JPG",
    "img/Foto 2.JPG",
    "img/Foto 3.JPG",
    "img/Foto 4.jpg",
    "img/Foto 5.jpg"
];

let indice = 0;

function iniciarGaleria() {
    const foto = document.getElementById("foto");

    setInterval(() => {
        indice = (indice + 1) % fotos.length;
        foto.src = fotos[indice];
    }, 3000);
}

iniciarGaleria();
}

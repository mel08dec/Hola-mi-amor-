const intro = document.getElementById("intro");
const sobre = document.getElementById("sobre");

const musica = document.getElementById("musica");

const yes = document.getElementById("yes");
const no = document.getElementById("no");

const inicio = document.getElementById("inicio");
const final = document.getElementById("final");
const hearts = document.getElementById("hearts");

// ======================
// ABRIR SOBRE
// ======================

sobre.addEventListener("click",()=>{

    musica.volume=.35;
    musica.play();

    document.querySelector(".tapa").style.transform="rotateX(180deg)";

    setTimeout(()=>{

        intro.style.opacity="0";

        setTimeout(()=>{

            intro.style.display="none";

            inicio.classList.remove("hidden");

        },800);

    },600);

});

// ======================
// BOTON NO
// ======================

const mensajes=[

"No 😐",
"Pucú? 😑",
"No? 🫤",
"Amor? 🥺",
"Un sí? 🥹",
"Por favor ❤️"

];

let intento=0;

function moverBoton(){

const margen=20;

const x=Math.random()*(window.innerWidth-no.offsetWidth-margen);

const y=Math.random()*(window.innerHeight-no.offsetHeight-margen);

no.style.position="fixed";
no.style.left=x+"px";
no.style.top=y+"px";

no.textContent=mensajes[intento];

intento=(intento+1)%mensajes.length;

}

no.addEventListener("mouseover",moverBoton);

no.addEventListener("touchstart",(e)=>{

e.preventDefault();

moverBoton();

});

// ======================
// BOTON SI
// ======================

yes.addEventListener("click",()=>{

inicio.style.opacity="0";
inicio.style.transform="scale(.9)";

setTimeout(()=>{

inicio.style.display="none";

final.classList.remove("hidden");

confeti();

},400);

});

// ======================
// GALERIA
// ======================

const fotos=[

"img/Foto 1.JPG",
"img/Foto 2.JPG",
"img/Foto 3.JPG",
"img/Foto 4.jpg",
"img/Foto 5.jpg"

];

let indice=0;

setInterval(()=>{

const foto=document.getElementById("foto");

if(!foto) return;

if(final.classList.contains("hidden")) return;

foto.style.opacity="0";
foto.style.transform="scale(.95)";

setTimeout(()=>{

indice=(indice+1)%fotos.length;

foto.src=fotos[indice];

foto.style.opacity="1";
foto.style.transform="scale(1)";

},300);

},3000);

// ======================
// CORAZONES
// ======================

function crearFigura(){

const heart=document.createElement("div");

heart.className="heart";

const figuras=[

"♥️",
"✨",
"♥️",
"✨"

];

heart.innerHTML=figuras[Math.floor(Math.random()*figuras.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*18)+"px";

heart.style.animationDuration=(5+Math.random()*3)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(crearFigura,350);

// ======================
// CONFETI
// ======================

function confeti(){

for(let i=0;i<120;i++){

setTimeout(()=>{

const c=document.createElement("div");

const figuras=[

"❤️",
"✨",
"🎉",
"🎊",
"🎈"

];

c.innerHTML=figuras[Math.floor(Math.random()*figuras.length)];

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.fontSize=(18+Math.random()*18)+"px";

c.style.transition="3s linear";

document.body.appendChild(c);

requestAnimationFrame(()=>{

c.style.transform=`translateY(${window.innerHeight+100}px) rotate(720deg)`;

});

setTimeout(()=>{

c.remove();

},3200);

},i*20);

}

}

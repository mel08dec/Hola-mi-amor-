const intro = document.getElementById("intro");
const slider = document.getElementById("slider");

const musica = document.getElementById("musica");

const inicio = document.getElementById("inicio");
const final = document.getElementById("final");

const yes = document.getElementById("yes");
const no = document.getElementById("no");

const hearts = document.getElementById("hearts");

// ===========================
// ABRIR CIERRE
// ===========================

slider.addEventListener("click", abrir);

slider.addEventListener("touchstart", function(e){

    e.preventDefault();

    abrir();

});

function abrir(){

    slider.style.top="285px";

    musica.volume=.35;

    musica.play().catch(()=>{});

    setTimeout(()=>{

        intro.style.opacity="0";

        setTimeout(()=>{

            intro.style.display="none";

            inicio.classList.remove("hidden");

        },700);

    },1000);

}

// ===========================
// BOTÓN NO
// ===========================

const mensajes=[

"No 😐",
"No? 😑",
"Amor? 🫤",
"Ey pequeña 🫩",
"Po favo 🥺",
"Daleeee 😭"

];

let intento=0;

function mover(){

    const margen=20;

    const x=Math.random()*(window.innerWidth-no.offsetWidth-margen);

    const y=Math.random()*(window.innerHeight-no.offsetHeight-margen);

    no.style.position="fixed";
    no.style.left=x+"px";
    no.style.top=y+"px";

    no.innerHTML=mensajes[intento];

    intento++;

    if(intento>=mensajes.length){

        intento=0;

    }

}

no.addEventListener("mouseover",mover);

no.addEventListener("touchstart",function(e){

    e.preventDefault();

    mover();

});

// ===========================
// BOTÓN SÍ
// ===========================

yes.addEventListener("click",()=>{

    inicio.style.opacity="0";
    inicio.style.transform="scale(.92)";

    setTimeout(()=>{

        inicio.style.display="none";

        final.classList.remove("hidden");

        lanzarConfeti();

    },450);

});

// ===========================
// GALERÍA
// ===========================

const fotos=[

"img/Foto 1.JPG",
"img/Foto 2.JPG",
"img/Foto 3.JPG",
"img/Foto 4.jpg",
"img/Foto 5.jpg"

];

let indice=0;

function cambiarFoto(){

    const foto=document.getElementById("foto");

    if(!foto) return;

    foto.style.opacity="0";

    foto.style.transform="scale(.96)";

    setTimeout(()=>{

        indice++;

        if(indice>=fotos.length){

            indice=0;

        }

        foto.src=fotos[indice];

        foto.onload=()=>{

            foto.style.opacity="1";

            foto.style.transform="scale(1)";

        };

    },300);

}

setInterval(()=>{

    if(!final.classList.contains("hidden")){

        cambiarFoto();

    }

},3500);

// ===========================
// CORAZONES
// ===========================

function crearCorazon(){

    const heart=document.createElement("div");

    heart.className="heart";

    const figuras=[

        "❤️",
        "♥️",
        "✨",
        "✨"

    ];

    heart.innerHTML=figuras[
        Math.floor(Math.random()*figuras.length)
    ];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*16)+"px";

    heart.style.animation=`caer ${5+Math.random()*3}s linear forwards`;

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(crearCorazon,400);

// ===========================
// CONFETI
// ===========================

function lanzarConfeti(){

    for(let i=0;i<100;i++){

        setTimeout(()=>{

            const item=document.createElement("div");

            const emojis=[

                "❤️",
                "♥️",
                "✨",
                "🎉",
                "🎊"

            ];

            item.innerHTML=emojis[
                Math.floor(Math.random()*emojis.length)
            ];

            item.style.position="fixed";

            item.style.left=Math.random()*100+"vw";

            item.style.top="-40px";

            item.style.fontSize=(18+Math.random()*16)+"px";

            item.style.pointerEvents="none";

            item.style.transition="transform 3s linear";

            document.body.appendChild(item);

            requestAnimationFrame(()=>{

                item.style.transform=`translateY(${window.innerHeight+120}px) rotate(720deg)`;

            });

            setTimeout(()=>{

                item.remove();

            },3200);

        },i*18);

    }

}

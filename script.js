const intro = document.getElementById("intro");
const sobre = document.getElementById("sobre");
const tapa = document.querySelector(".tapa");

const musica = document.getElementById("musica");

const inicio = document.getElementById("inicio");
const final = document.getElementById("final");

const yes = document.getElementById("yes");
const no = document.getElementById("no");

const hearts = document.getElementById("hearts");

//==========================
// ABRIR SOBRE
//==========================

sobre.addEventListener("click",()=>{

    musica.volume=0.35;
    musica.play().catch(()=>{});

    tapa.style.transform="rotateX(180deg)";

    sobre.style.transform="translateY(-25px)";

    setTimeout(()=>{

        intro.style.opacity="0";

        setTimeout(()=>{

            intro.style.display="none";

            inicio.classList.remove("hidden");

        },700);

    },700);

});

//==========================
// BOTÓN NO
//==========================

const mensajes=[

"No 😐",
"Pucú? 😑",
"Amor? 🫤",
"Un Si? 🫩",
"Po favo 🥺",
"Daleee 😭"

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

no.addEventListener("touchstart",(e)=>{

    e.preventDefault();

    mover();

});

//==========================
// BOTÓN SÍ
//==========================

yes.onclick=()=>{

    inicio.style.opacity="0";
    inicio.style.transform="scale(.92)";

    setTimeout(()=>{

        inicio.style.display="none";

        final.classList.remove("hidden");

        lanzarConfeti();

    },450);

};

//==========================
// GALERÍA
//==========================

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

    setTimeout(()=>{

        indice++;

        if(indice>=fotos.length){

            indice=0;

        }

        foto.src=fotos[indice];

        foto.style.opacity="1";

    },250);

},3000);

//==========================
// CORAZONES
//==========================

function crearCorazon(){

    const heart=document.createElement("div");

    heart.className="heart";

    const figuras=[

        "♥️",
        "♥️",
        "✨",
        "✨"

    ];

    heart.innerHTML=figuras[
        Math.floor(Math.random()*figuras.length)
    ];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*20)+"px";

    heart.style.animationDuration=(5+Math.random()*3)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(crearCorazon,350);

//==========================
// CONFETI
//==========================

function lanzarConfeti(){

    for(let i=0;i<120;i++){

        setTimeout(()=>{

            const item=document.createElement("div");

            const emojis=[

                "✨",
                "♥️",
                "✨",
                "🎉",
                "🎈"

            ];

            item.innerHTML=emojis[
                Math.floor(Math.random()*emojis.length)
            ];

            item.style.position="fixed";

            item.style.left=Math.random()*100+"vw";

            item.style.top="-30px";

            item.style.fontSize=(18+Math.random()*18)+"px";

            item.style.transition="transform 3s linear";

            item.style.pointerEvents="none";

            document.body.appendChild(item);

            requestAnimationFrame(()=>{

                item.style.transform=
                `translateY(${window.innerHeight+120}px) rotate(720deg)`;

            });

            setTimeout(()=>{

                item.remove();

            },3200);

        },i*15);

    }

}

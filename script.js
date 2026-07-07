const yes=document.getElementById("yes");
const no=document.getElementById("no");

const inicio=document.getElementById("inicio");
const final=document.getElementById("final");

yes.onclick=()=>{

inicio.style.display="none";
final.classList.remove("hidden");

}

no.addEventListener("touchstart",mover);
no.addEventListener("mouseover",mover);

function mover(){

const x=Math.random()*250-100;
const y=Math.random()*250-100;

no.style.transform=`translate(${x}px,${y}px)`;

}

const fotos=[

"img/Foto 1.JPG",
"img/Foto 2.JPG",
"img/Foto 3.JPG",
"img/Foto 4.jpg",
"img/Foto 5.jpg"

];

let i=0;

setInterval(()=>{

const foto=document.getElementById("foto");

if(foto){

i++;

if(i>=fotos.length){

i=0;

}

foto.src=fotos[i];

}

},3000);

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(Math.random()*3+3)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

},350);

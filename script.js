const pages=document.querySelectorAll('.page');
const music=document.getElementById('bgMusic');
let playing=false;

function show(id){
  pages.forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
}

/* PASSWORD — MUSIC STARTS HERE */
function unlock(){
  if(document.getElementById('pass').value==="forever"){
    music.volume=0.35;
    music.currentTime=0;
    music.play().then(()=>{
      playing=true;
      show('mood');
    }).catch(()=>{
      show('mood');
      alert("Tap 🎵 once to start music");
    });
  }
}

function setMood(){
  show('letter');
}

function goDiary(){
  show('diary');
}

let i=0;
function revealNext(){
  const h=document.querySelectorAll('.diary-card.hidden');
  if(i<h.length){
    h[i].classList.remove('hidden');
    i++;
  }else{
    show('game');
  }
}

/* GAME */
let calm=1;
const circle=document.getElementById('circle');
circle.addEventListener('click',()=>{
  calm-=.1;
  circle.style.transform=`scale(${calm})`;
  if(calm<=.6){
    document.getElementById('gameText').innerText="perfect 🫶";
    setTimeout(()=>show('ending'),1500);
  }
});

/* MUSIC TOGGLE */
function toggleMusic(){
  if(!playing){
    music.volume=0.35;
    music.play().catch(()=>{});
    playing=true;
  }else{
    music.pause();
    playing=false;
  }
}

// ===== ALBUM DATA =====
const albums = {
  child: [
    "images/child1.jpg",
    "images/child2.jpg",
    "images/child3.jpg",
    "images/child4.jpg",
    "images/child5.jpg",
    "images/child6.jpg",
    "images/child7.jpg",
    "images/child8.jpg"
  ],
  recent: [
    "images/recent1.jpg",
    "images/recent2.jpg"
  ],
  friends: [
    "images/friends1.jpg",
    "images/friends2.jpg"
  ],
  lovers: [
    "images/lovers1.jpg",
    "images/lovers2.jpg",
    "images/lovers3.jpg"
  ]
};

let currentAlbum = [];
let currentIndex = 0;

// ===== OPEN ALBUM =====
function openAlbum(type){
  currentAlbum = albums[type];
  currentIndex = 0;

  document.getElementById("albumOverlay").style.display = "flex";
  document.getElementById("swipeImg").src = currentAlbum[currentIndex];
  floatingDecor(); // floating hearts/sunflower animation
}

// ===== CLOSE =====
function closeAlbum(){
  const overlay = document.getElementById("albumOverlay");
  overlay.style.animation = "fadeOutOverlay 0.3s forwards";
  setTimeout(()=> overlay.style.display="none", 300);
}


  function closeAlbum(){
  const overlay = document.getElementById("albumOverlay");
  overlay.style.animation = "fadeOutOverlay 0.3s forwards";
  setTimeout(()=> overlay.style.display="none", 300);
}


// ===== NEXT / PREV =====
function nextPhoto(){
  currentIndex = (currentIndex + 1) % currentAlbum.length;
  document.getElementById("swipeImg").src = currentAlbum[currentIndex];
}

function prevPhoto(){
  currentIndex = (currentIndex - 1 + currentAlbum.length) % currentAlbum.length;
  document.getElementById("swipeImg").src = currentAlbum[currentIndex];
}

// ===== SWIPE (MOBILE) =====
let startX = 0;

function startTouch(e){
  startX = e.changedTouches[0].screenX;
}

function endTouch(e){
  let endX = e.changedTouches[0].screenX;
  if(endX < startX - 40) nextPhoto();
  if(endX > startX + 40) prevPhoto();
}

// ===== FLOATING DECOR =====
function floatingDecor(){
    for(let i=0;i<15;i++){
        const deco = document.createElement('div');
        deco.style.position='fixed';
        deco.style.left=Math.random()*100+'vw';
        deco.style.top=Math.random()*100+'vh';
        deco.style.fontSize=(12+Math.random()*18)+'px';
        deco.style.opacity=0.7;
        deco.style.pointerEvents='none';
        deco.style.transition='all 3s linear';
        deco.innerText = ["💖","🌻","🌹"][Math.floor(Math.random()*3)];
        document.body.appendChild(deco);
        setTimeout(()=> deco.remove(), 4000);
    }
}
function closeAlbum(){
  const overlay = document.getElementById("albumOverlay");
  overlay.style.animation = "fadeOutOverlay 0.3s forwards";
  setTimeout(()=> overlay.style.display="none", 300);
}

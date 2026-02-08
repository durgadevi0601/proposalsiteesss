// ===== LOGIN =====
function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const msg = document.getElementById('msg');

    const validUsername = "ajaydurga";
    const validPassword = "0622";

    if(!username || !password){
        msg.innerText = "⚠️ Enter both name & secret code!";
        return;
    }

    if(username === validUsername && password === validPassword){
    sessionStorage.setItem('loggedIn', 'true');

    // 🔥 Music play signal
    sessionStorage.setItem('playMusic', 'yes');

    // ❤️ Welcome popup
    alert(` WELL COME TO MY HEART, ${username}! ❤️`);

    // OK click pannadhukku apram redirect
    window.location.href = "home.html";
}

}

// Press Enter to login
document.addEventListener('keydown', e => { if(e.key==="Enter") login(); });

// ===== FLOATING HEARTS =====
setInterval(() => {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.style.left = Math.random()*90+'%';
    heart.style.top = Math.random()*70+'%';
    heart.style.fontSize = (15+Math.random()*25)+'px';
    heart.style.opacity = 0.2+Math.random()*0.3;
    heart.innerText='💖';
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(), 3000);
}, 1200);

// ===== HOME PAGE =====
document.addEventListener('DOMContentLoaded', () => {
    if(window.location.pathname.endsWith("home.html")){

        // 🔐 Login check
        if(sessionStorage.getItem('loggedIn') !== 'true'){
            alert("❌ Please login first!");
            window.location.href = "index.html";
            return;
        }

        // 🎶 Music auto play (optional)
        const music = document.getElementById('bgMusic');
        if(music){
            music.volume = 0.7;
            music.play().catch(()=>{});
        }

        // ❤️ Love button logic (message + heart + redirect)
        const loveBtn = document.getElementById('loveBtn');
        if(loveBtn){
            loveBtn.addEventListener('click', ()=>{
                const msg = document.getElementById('message');
                msg.style.display = 'block';
                msg.style.animation = 'fadeIn 1s forwards';

                if(music){
                    music.play();
                }

                const heart = document.createElement('span');
                heart.className = 'floating-heart';
                heart.style.left = Math.random()*80 + '%';
                heart.style.fontSize = '30px';
                heart.innerText = '💖';
                document.body.appendChild(heart);
                setTimeout(()=>heart.remove(),2000);

                // 🔥 Redirect to feelings.html
                setTimeout(()=> {
                    window.location.href = "feelings.html";
                }, 2000);
            });
        }

        // ===== LOGIN =====
function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const msg = document.getElementById('msg');

    const validUsername = "ajaydurga";
    const validPassword = "0622";

    if(!username || !password){
        msg.innerText = "⚠️ Enter both name & secret code!";
        return;
    }

    if(username === validUsername && password === validPassword){
    sessionStorage.setItem('loggedIn', 'true');

    // 🔥 Music play signal
    sessionStorage.setItem('playMusic', 'yes');

    // ❤️ Welcome popup
    alert(` WELL COME TO MY HEART, ${username}! ❤️`);

    // OK click pannadhukku apram redirect
    window.location.href = "home.html";
}

}

// Press Enter to login
document.addEventListener('keydown', e => { if(e.key==="Enter") login(); });

// ===== FLOATING HEARTS =====
setInterval(() => {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.style.left = Math.random()*90+'%';
    heart.style.top = Math.random()*70+'%';
    heart.style.fontSize = (15+Math.random()*25)+'px';
    heart.style.opacity = 0.2+Math.random()*0.3;
    heart.innerText='💖';
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(), 3000);
}, 1200);

// ===== HOME PAGE =====
document.addEventListener('DOMContentLoaded', () => {
    if(window.location.pathname.endsWith("home.html")){

        // 🔐 Login check
        if(sessionStorage.getItem('loggedIn') !== 'true'){
            alert("❌ Please login first!");
            window.location.href = "index.html";
            return;
        }

        // 🎶 Music auto play (optional)
        const music = document.getElementById('bgMusic');
        if(music){
            music.volume = 0.7;
            music.play().catch(()=>{});
        }

        // ❤️ Love button logic (message + heart + redirect)
        const loveBtn = document.getElementById('loveBtn');
        if(loveBtn){
            loveBtn.addEventListener('click', ()=>{
                const msg = document.getElementById('message');
                msg.style.display = 'block';
                msg.style.animation = 'fadeIn 1s forwards';

                if(music){
                    music.play();
                }

                const heart = document.createElement('span');
                heart.className = 'floating-heart';
                heart.style.left = Math.random()*80 + '%';
                heart.style.fontSize = '30px';
                heart.innerText = '💖';
                document.body.appendChild(heart);
                setTimeout(()=>heart.remove(),2000);

                // 🔥 Redirect to feelings.html
                setTimeout(()=> {
                    window.location.href = "feelings.html";
                }, 2000);
            });
        }

        // 📸 Auto scrolling gallery
        const gallery = document.querySelector('.photo-gallery');
        let scrollPos = 0;
        setInterval(()=>{
            if(gallery){
                scrollPos += 1;
                if(scrollPos > gallery.scrollHeight - gallery.clientHeight){
                    scrollPos = 0;
                }
                gallery.scrollTo({ top: scrollPos, behavior: 'smooth' });
            }
        }, 100);

        // ===== ADD INNER PHOTO CLICK LOGIC HERE =====
        const galleryImages = document.querySelectorAll('.photo-gallery img');
        galleryImages.forEach(img => {
            img.addEventListener('click', ()=>{
                const innerSrc = img.getAttribute('data-inner'); // photo1_inner.jpg
                if(innerSrc){
                    const overlay = document.createElement('div');
                    overlay.style.position = 'fixed';
                    overlay.style.top = '0';
                    overlay.style.left = '0';
                    overlay.style.width = '100%';
                    overlay.style.height = '100%';
                    overlay.style.background = 'rgba(0,0,0,0.5)';
                    overlay.style.display = 'flex';
                    overlay.style.justifyContent = 'center';
                    overlay.style.alignItems = 'center';
                    overlay.style.zIndex = '1000';
                    overlay.style.cursor = 'pointer';

                    const innerImg = document.createElement('img');
                    innerImg.src = innerSrc;
                    innerImg.style.borderRadius = '50%';
                    innerImg.style.width = '250px';
                    innerImg.style.height = '250px';
                    innerImg.style.objectFit = 'cover';
                    innerImg.style.boxShadow = '0 0 20px rgba(255,255,255,0.8)';
                    innerImg.style.transition = '0.3s';

                    overlay.appendChild(innerImg);
                    document.body.appendChild(overlay);

                    // Click anywhere to close inner image
                    overlay.addEventListener('click', ()=>{
                        overlay.remove();
                    });
                }
            });
        });
    }
});




const lines = [
  "🌙..மேலும் கீழும் ஆடும் உந்தன் மாய கண்ணாலே… 😌✨மாறுவேடம் போடுது என் நாட்கள் தன்னாலே… 💭💞ஆயுள் ரேகை முழுவதுமாய் தேயும் முன்னாலே… 🕊️🤍ஆளும் வரை வாழ்ந்திடலாம் காதலின் உள்ளே… 🤍🤗",
  "🌙..காம்பத் தேடும் குழந்தையா உன்னத் தேடும் உசுரு பசியில… 🥺🤍🤗கோடி பேரில் உன்ன மட்டும் அறிவேனே… 🌍💗பேரன்பு போல ஏதுமில்ல நீ போதும்… 💞🤗நானும் ஏழையில்ல…🤍",
  "🌙..யுகம் யுகம் காண முகம் இது போதும்… 💗😌புகலிடம் என்றே உந்தன் நெஞ்சம் மட்டும் போதும்… 🤍🤗",
  "🌙..வாழ்க போகும் தூரம் நீயும் நானும் போக வேணும்… 🤝🤍எந்தன் நெஞ்சில் கோடி ஆசை தோன்றுது… 💓✨நீ எந்தன் பாதி என்றும் நானும் உந்தன் மீதி என்றும்… 🤍🤗காதல் காதுக்குள்ள வந்து ஓதுது… 💞",
  "🌙..வேரின்றி விதையின்றி விண் தூவும் மழை இன்றி… 🌧️🤍இது என்ன இவன் தோட்டம் பூப்பூக்குதே… 🌸💞வாள் இன்றி போர் இன்றி வலிக்கின்ற யுத்தம் இன்றி… 💔இது என்ன இவனுக்குள் என்னை வெல்லுதே… 🤍🤗"
];

const typewriter = document.getElementById('typewriter');
let lineIndex = 0, charIndex = 0;

function typeLine(){
    if(typewriter && lineIndex < lines.length){
        if(charIndex < lines[lineIndex].length){
            typewriter.innerHTML += lines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeLine, 80);
        } else {
            typewriter.innerHTML += "<br>";   
            charIndex = 0;
            lineIndex++;       // 🔥 important: next line-ku pogum
            setTimeout(typeLine, 500); // next line start delay
        }
    }
}

typeLine();



// ===== DISABLE RIGHT CLICK & TEXT SELECT =====
document.addEventListener('contextmenu', e=>e.preventDefault());
document.addEventListener('keydown', e=>{ if(e.ctrlKey&&(e.key==='c'||e.key==='x')) e.preventDefault(); });

// ===== SURPRISE BUTTON & ENDING =====
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseOverlay = document.getElementById('surpriseOverlay');
if(surpriseBtn && surpriseOverlay){
    surpriseBtn.addEventListener('click', ()=>{
        surpriseOverlay.classList.add('active');
        surpriseBtn.style.display='none';
    });
    surpriseOverlay.addEventListener('click', ()=>{
        window.location.href="ending.html";
    });
}

const albums = {
  child: ["images/child1.jpg","images/child2.jpg","images/child3.jpg"],
  recent:["images/recent1.jpg","images/recent2.jpg"],
  friends:["images/friends1.jpg","images/friends2.jpg"],
  lovers:["images/lovers1.jpg","images/lovers2.jpg","images/lovers3.jpg"]
};

function openAlbum(type){
    const overlay = document.getElementById("albumOverlay");
    const grid = document.getElementById("albumGrid");
    grid.innerHTML = "";
    albums[type].forEach(src=>{
        const img = document.createElement("img");
        img.src = src;
        grid.appendChild(img);
    });
    overlay.style.display = "flex";
}

function closeAlbum(){
    document.getElementById("albumOverlay").style.display = "none";
}
function startHover(card){
  const img = card.querySelector('img');
  const hoverImages = JSON.parse(img.dataset.hover);
  let index = 0;
  const interval = setInterval(()=>{
    index = (index + 1) % hoverImages.length;
    img.src = hoverImages[index];
  }, 600);
  card.dataset.interval = interval;
}

function stopHover(card){
  clearInterval(card.dataset.interval);
  const img = card.querySelector('img');
  img.src = JSON.parse(img.dataset.hover)[0];
}
// ✅ Allow normal page scrolling
document.body.style.overflowY = "auto";
document.documentElement.style.overflowY = "auto";

        // ===== ADD INNER PHOTO CLICK LOGIC HERE =====
        const galleryImages = document.querySelectorAll('.photo-gallery img');
        galleryImages.forEach(img => {
            img.addEventListener('click', ()=>{
                const innerSrc = img.getAttribute('data-inner'); // photo1_inner.jpg
                if(innerSrc){
                    const overlay = document.createElement('div');
                    overlay.style.position = 'fixed';
                    overlay.style.top = '0';
                    overlay.style.left = '0';
                    overlay.style.width = '100%';
                    overlay.style.height = '100%';
                    overlay.style.background = 'rgba(0,0,0,0.5)';
                    overlay.style.display = 'flex';
                    overlay.style.justifyContent = 'center';
                    overlay.style.alignItems = 'center';
                    overlay.style.zIndex = '1000';
                    overlay.style.cursor = 'pointer';

                    const innerImg = document.createElement('img');
                    innerImg.src = innerSrc;
                    innerImg.style.borderRadius = '50%';
                    innerImg.style.width = '250px';
                    innerImg.style.height = '250px';
                    innerImg.style.objectFit = 'cover';
                    innerImg.style.boxShadow = '0 0 20px rgba(255,255,255,0.8)';
                    innerImg.style.transition = '0.3s';

                    overlay.appendChild(innerImg);
                    document.body.appendChild(overlay);

                    // Click anywhere to close inner image
                    overlay.addEventListener('click', ()=>{
                        overlay.remove();
                    });
                }
            });
        });
    }
});




const lines = [
  "🌙..மேலும் கீழும் ஆடும் உந்தன் மாய கண்ணாலே… 😌✨மாறுவேடம் போடுது என் நாட்கள் தன்னாலே… 💭💞ஆயுள் ரேகை முழுவதுமாய் தேயும் முன்னாலே… 🕊️🤍ஆளும் வரை வாழ்ந்திடலாம் காதலின் உள்ளே… 🤍🤗",
  "🌙..காம்பத் தேடும் குழந்தையா உன்னத் தேடும் உசுரு பசியில… 🥺🤍🤗கோடி பேரில் உன்ன மட்டும் அறிவேனே… 🌍💗பேரன்பு போல ஏதுமில்ல நீ போதும்… 💞🤗நானும் ஏழையில்ல…🤍",
  "🌙..யுகம் யுகம் காண முகம் இது போதும்… 💗😌புகலிடம் என்றே உந்தன் நெஞ்சம் மட்டும் போதும்… 🤍🤗",
  "🌙..வாழ்க போகும் தூரம் நீயும் நானும் போக வேணும்… 🤝🤍எந்தன் நெஞ்சில் கோடி ஆசை தோன்றுது… 💓✨நீ எந்தன் பாதி என்றும் நானும் உந்தன் மீதி என்றும்… 🤍🤗காதல் காதுக்குள்ள வந்து ஓதுது… 💞",
  "🌙..வேரின்றி விதையின்றி விண் தூவும் மழை இன்றி… 🌧️🤍இது என்ன இவன் தோட்டம் பூப்பூக்குதே… 🌸💞வாள் இன்றி போர் இன்றி வலிக்கின்ற யுத்தம் இன்றி… 💔இது என்ன இவனுக்குள் என்னை வெல்லுதே… 🤍🤗"
];

const typewriter = document.getElementById('typewriter');
let lineIndex = 0, charIndex = 0;

function typeLine(){
    if(typewriter && lineIndex < lines.length){
        if(charIndex < lines[lineIndex].length){
            typewriter.innerHTML += lines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeLine, 80);
        } else {
            typewriter.innerHTML += "<br>";   
            charIndex = 0;
            lineIndex++;       // 🔥 important: next line-ku pogum
            setTimeout(typeLine, 500); // next line start delay
        }
    }
}

typeLine();



// ===== DISABLE RIGHT CLICK & TEXT SELECT =====
document.addEventListener('contextmenu', e=>e.preventDefault());
document.addEventListener('keydown', e=>{ if(e.ctrlKey&&(e.key==='c'||e.key==='x')) e.preventDefault(); });

// ===== SURPRISE BUTTON & ENDING =====
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseOverlay = document.getElementById('surpriseOverlay');
if(surpriseBtn && surpriseOverlay){
    surpriseBtn.addEventListener('click', ()=>{
        surpriseOverlay.classList.add('active');
        surpriseBtn.style.display='none';
    });
    surpriseOverlay.addEventListener('click', ()=>{
        window.location.href="ending.html";
    });
}

const albums = {
  child: ["images/child1.jpg","images/child2.jpg","images/child3.jpg"],
  recent:["images/recent1.jpg","images/recent2.jpg"],
  friends:["images/friends1.jpg","images/friends2.jpg"],
  lovers:["images/lovers1.jpg","images/lovers2.jpg","images/lovers3.jpg"]
};

function openAlbum(type){
    const overlay = document.getElementById("albumOverlay");
    const grid = document.getElementById("albumGrid");
    grid.innerHTML = "";
    albums[type].forEach(src=>{
        const img = document.createElement("img");
        img.src = src;
        grid.appendChild(img);
    });
    overlay.style.display = "flex";
}

function closeAlbum(){
    document.getElementById("albumOverlay").style.display = "none";
}
function startHover(card){
  const img = card.querySelector('img');
  const hoverImages = JSON.parse(img.dataset.hover);
  let index = 0;
  const interval = setInterval(()=>{
    index = (index + 1) % hoverImages.length;
    img.src = hoverImages[index];
  }, 600);
  card.dataset.interval = interval;
}

function stopHover(card){
  clearInterval(card.dataset.interval);
  const img = card.querySelector('img');
  img.src = JSON.parse(img.dataset.hover)[0];
}

// Fonction pour la page trek
// La partie droite (avec les photos) fait la taille de la partie gauch (avec le texte)
function adjustMainRightHeight() {
  if (window.innerHeight > 1200) {
    const leftHeight = document.querySelector('.trek_main-text').clientHeight;
    document.querySelector('.trek_main_photos').style.height = leftHeight + 'px';
  }
}

// Au 1er chargement de la page 
if (window.innerWidth > 1200) {
  window.addEventListener('load', adjustMainRightHeight);
  window.addEventListener('resize', adjustMainRightHeight);
}

// Des que la fenêtre est redimensionnée
window.addEventListener('resize', function() {
  if (window.innerWidth > 1200) {
    window.addEventListener('load', adjustMainRightHeight);
    window.addEventListener('resize', adjustMainRightHeight);
  } else {
    window.removeEventListener('load', adjustMainRightHeight);
    window.removeEventListener('resize', adjustMainRightHeight);
  }
});
// == == //



// Menu burger du header
// == Menu burger == //
let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
}
function closeNav() {
  sidenav.classList.remove("active");
}
// == == //




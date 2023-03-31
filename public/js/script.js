// Fonction pour la page trek
// La partie droite (avec les photos) fait la taille de la partie gauche (avec le texte)
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

// Fonction pour positionner le footer en fixed/bottom 0 si la page fait moins de la hauteur de l'écran
window.addEventListener('load', function() {
  const footer = document.querySelector('footer');        // Element <footer>
  const pageHeight = document.body.scrollHeight;          // Taille de la page totale (avec le scroll)
  const windowHeight = window.innerHeight;                // Taille de la fenêtre
  if (pageHeight <= windowHeight) {                       // Si la taille du scroll est inférieur ou égale à la taille de la fenêtre
    footer.style.position = 'fixed';                      // On positionne le footer en fixed et bottom 0
    footer.style.bottom = '0';
  }
});



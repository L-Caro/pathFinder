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

// == == //


// Fonction pour aggrandir les images dans un modal
// Récupérez toutes les balises d'image dans un tableau
const images = document.getElementsByClassName('photo-link');

// Parcourir le tableau et ajoutez un gestionnaire d'événements de clic à chaque image
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function(e) {
    e.preventDefault();
    const src = this.parentNode.getAttribute('href'); // La source de la photo est la source de la boucle

    // Définissez la source de l'image agrandie dans la boîte de dialogue modale
    document.getElementById('modal-image').setAttribute('src', src);

    // Afficher la boîte de dialogue modale
    document.getElementById('myModal').style.display = "block";
  });
}

// Pour fermer l'aggrandissement de la photo, on click nimporte ou en dehors de la photo

// Ajoutez un gestionnaire d'événements de clic à l'élément de fond de la boîte de dialogue modale
document.getElementById('modal-background').addEventListener('click', function() {
  document.getElementById('myModal').style.display = "none";
});

// == == //



/*

// Récupérer la barre de navigation
const navbar = document.querySelector(".header__small");

let prevScrollpos = window.scrollY;

// Fonction pour détecter le défilement vers le haut
window.onscroll = function() {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    // Afficher la barre de navigation
    navbar.style.position = 'fixed';
    navbar.style.top = "0";
    navbar.style.left = "0";
    navbar.style.right = "0";
    navbar.style.opacity = '0.7';
  } else if(prevScrollpos === currentScrollPos) {
    // Masquer la barre de navigation
    navbar.style.position = 'relative'
  }
  prevScrollpos = currentScrollPos;
}
*/
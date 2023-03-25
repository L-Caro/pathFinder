// Fonction pour la page trek
// La partie droite (avec les photos) fait la taille de la partie gauch (avec le texte)
function adjustMainRightHeight() {
  if (window.innerHeight > 1200) {
    const leftHeight = document.querySelector('.trek_main-left').clientHeight;
    document.querySelector('.trek_main-right').style.height = leftHeight + 'px';
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





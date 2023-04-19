// == Menu burger du header == //
let sidenav = document.getElementById("mySidenav");                                   // Récupération de l'élément <div id="mySidenav">
let openBtn = document.getElementById("openBtn");                                     // Récupération de l'élément <div id="openBtn">
let closeBtn = document.getElementById("closeBtn");                                   // Récupération de l'élément <div id="closeBtn">
 
openBtn.onclick = openNav;                                                            // Au click sur le bouton ouvrir, on appelle la fonction openNav
closeBtn.onclick = closeNav;                                                          // Au click sur le bouton fermer, on appelle la fonction closeNav

function openNav() {                                                                  // Fonction pour ouvrir le menu burger
  sidenav.classList.add("active");                                                    // On ajoute la classe "active" à l'élément <div id="mySidenav">
}
function closeNav() {                                                                 // Fonction pour fermer le menu burger
  sidenav.classList.remove("active");                                                 // On retire la classe "active" à l'élément <div id="mySidenav">
}

// =====================================================================
// =====================================================================
// == Fonction pour positionner le footer en fixed/bottom 0 si la page fait moins de la hauteur de l'écran == //
const footer = document.querySelector('footer');                                      // Récupération de l'élément <footer>
  function updatePosition() {                                                         // Fonction pour positionner le footer en fixed/bottom 0 si la page fait moins de la hauteur de l'écran
    const pageHeight = document.documentElement.scrollHeight;                         // Hauteur totale du contenu de la page
    const windowHeight = window.innerHeight;                                          // Hauteur totale de la fenêtre

    if (pageHeight === windowHeight) {                                                // Si la hauteur totale du contenu de la page est égale à la hauteur totale de la fenêtre
      footer.style.position = 'fixed';                                                // On positionne le footer en fixed
      footer.style.bottom = '0';                                                      // On positionne le footer en bas de la fenêtre
    } else {                                                                  // Sinon
      footer.style.position = 'static';                                               // On positionne le footer en static
    }
  };
  window.addEventListener('resize', updatePosition);                                  // Au redimensionnement de la fenêtre, on appelle la fonction updatePosition
  window.addEventListener('load', updatePosition);                                    // Au chargement de la page, on appelle la fonction updatePosition
  window.addEventListener('DOMContentLoaded', updatePosition);                        // Au chargement du DOM, on appelle la fonction updatePosition

// =====================================================================
// =====================================================================
// == Fonction pour aggrandir les images dans un modal == //
const images = document.getElementsByClassName('photo-link');                         // Récupérez toutes les balises d'image dans un tableau

for (let i = 0; i < images.length; i++) {                                             // Parcourir le tableau et ajoutez un gestionnaire d'événements de clic à chaque image
  images[i].addEventListener('click', function(e) {                                   // Au click sur une image
    e.preventDefault();                                                               // On empêche le comportement par défaut du lien
    const src = this.parentNode.getAttribute('href');                                 //! La source de la photo est la source de la boucle
    document.getElementById('modal-image').setAttribute('src', src);                  //? Définie la source de l'image agrandie dans la boîte de dialogue modale
    document.getElementById('myModal').style.display = "block";                       // Afficher la boîte de dialogue modale
  });
}

// Pour fermer l'aggrandissement de la photo, on click nimporte ou en dehors de la photo
const modalBackgroundElement = document.getElementById('modal-background')            // Récupérez l'élément de fond de la boîte de dialogue modale
if (modalBackgroundElement !== null) {                                                // Si l'élément de fond de la boîte de dialogue modale n'est pas nul
modalBackgroundElement.addEventListener('click', function() {                         // Ajoutez un gestionnaire d'événements de clic à l'élément de fond de la boîte de dialogue modale
  document.getElementById('myModal').style.display = "none";                          // Cachez la boîte de dialogue modale
});
}



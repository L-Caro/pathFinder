// == Fonction de redimensionnement pour la page trek == //
// La partie droite (avec les photos) fait la taille de la partie gauche (avec le texte)
// function adjustMainRightHeight() {
//   if (window.innerHeight > 1200) {                                                    // Si la fenêtre fait plus de 1200px de hauteur
//     const leftHeight = document.querySelector('.trek_main-text').innerHeight;        // On récupère la hauteur de la partie gauche
//     document.querySelector('.trek_main_photos').style.height = leftHeight + 'px';     // On applique cette hauteur à la partie droite
//   }
// }

// if (window.innerWidth > 1200) {                                                       // Au 1er chargement de la page si la fenêtre fait plus de 1200px de largeur
//   window.addEventListener('load', adjustMainRightHeight);                             // On appele la fonction au chargement de la page
//   window.addEventListener('resize', adjustMainRightHeight);                           // On appele la fonction au redimensionnement de la fenêtre
// }
// window.addEventListener('resize', function() {                                        // Des que la fenêtre est redimensionnée
//   if (window.innerWidth > 1200) {                                                     // Si la fenêtre fait plus de 1200px de largeur
//     window.addEventListener('load', adjustMainRightHeight);                           // On appele la fonction au chargement de la page
//     window.addEventListener('resize', adjustMainRightHeight);                         // On appele la fonction au redimensionnement de la fenêtre
//   } else {
//     window.removeEventListener('load', adjustMainRightHeight);
//     window.removeEventListener('resize', adjustMainRightHeight);
//   }
// });

// =====================================================================
// =====================================================================


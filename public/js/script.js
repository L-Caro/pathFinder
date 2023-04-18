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

// =====================================================================
// =====================================================================
// Gestion des inputs radio / checkbox
const radioInputs = document.querySelectorAll('[slot="radio"]');                      // Récupérer tous les boutons radio dans une variable
const checkboxInputs = document.querySelectorAll('[slot="checkbox"]');                // Récupérer tous les boutons checkbox dans une variable
const allInputs = [...radioInputs, ...checkboxInputs];                                // Récupérer tous les boutons radio et checkbox dans une variable

// =====================================================================
// =====================================================================
// == Fonction recherche par Tag == //
let allTreks = document.querySelectorAll('.trek-home');                               // Récupérer tous les treks dans une variable

// = Récupérer les tags sélectionnés =
function filterTreksByTag() {                                                         // Fonction pour filtrer les treks par tag
  const selectedTags = Array.from(allInputs)                                          // Transformaner le nodeList en tableau avec Array.from
    .filter(input => input.checked)                                                   // On filtre le tableau pour ne garder que les inputs qui sont cochés
    .map(input => input.getAttribute('value'))                                        // On récupère la valeur de chaque input

// = Réinitialiser la recherche de texte =
    const searchText = document.querySelector('.search-button');                      // Récupérer l'élément de recherche de texte
    searchText.value = '';                                                            // Réinitialiser le champ de recherche de texte
    allTreks.forEach(trek => {                                                        // Parcourir tous les treks
      trek.style.display = '';                                                        // Afficher tous les treks
    });

// = Filtrer les treks par les tags sélectionnés =
  let filteredTreks = [...allTreks];                                                  // On copie le tableau allTreks dans filteredTreks
  
  if (selectedTags.length > 0) {                                              // Si au moins un tag est sélectionné
    filteredTreks = filteredTreks.filter(trek =>                                      // On filtre le tableau filteredTreks pour ne garder que les treks qui ont les tags sélectionnés
      selectedTags.every(tag => trek.dataset.setTag.split(' ').includes(tag)) 
      //? Le every permet de vérifier que chaque tag est présent dans le dataset de l'élément
      //? Le dataset permet de récupérer les données personnalisées de l'élément 
      //? Le split permet de transformer le string en tableau, sinon pour 13 il y aura les tags 13 mais aussi 1 et 3.
      );
  }

  // = Mettre à jour l'affichage des treks =
  const treksContainer = document.querySelector('.container-treks');                  // Récupérer le conteneur des treks
  treksContainer.innerHTML = '';                                                      // Vider le conteneur des treks

  if (filteredTreks.length === 0) {                                           // Si aucun trek ne correspond aux tags sélectionnés
    const noTrek = document.createElement('div');                                     // Créer un élément div
    noTrek.classList.add('no-trek');                                                  // Ajouter une classe à l'élément
    noTrek.innerHTML = 'Aucune sortie ne correspond à votre recherche';               // Ajouter du contenu à l'élément
    treksContainer.appendChild(noTrek);                                               // Ajouter l'élément au conteneur des treks
  } else {                                                                    // Sinon
  filteredTreks.forEach(trek => {                                                     // Pour chaque trek dans la variable filteredTreks
    treksContainer.appendChild(trek);                                                 // On ajoute le trek au conteneur des treks
  });
}
}

allInputs.forEach(input => {                                                          // Ajouter un écouteur d'événement sur chaque input radio
  input.addEventListener('change', () => {                                            // Au changement de statut de l'input
    filterTreksByTag();                                                               // On appelle la fonction filterTreksByTag
    updatePosition();                                                                 // On appelle la fonction updatePosition pour gérer la position du footer
  });
});

window.addEventListener('load', filterTreksByTag);                                    // Appeler filterTreksByTag lorsque la page est chargée
                                                                                      //! Ce qui a pour effet de garder les cases cochées et la sélection des treks

// =====================================================================
// =====================================================================
// == Fonction recherche par nom == //
function filterTreksByName() {                                                        // Créer une fonction pour filtrer les treks par nom
  const searchInput = document.querySelector('.search-button');                       // Récupérer l'input de recherche
  const searchText = searchInput.value.toLowerCase();                                 // Récupérer la valeur de l'input de recherche et la mettre en minuscule
  const allTreks = document.querySelectorAll('.trek-home');                           // Récupérer tous les treks dans une variable
  const result = [];                                                                  // Créer un tableau vide qui contiendra les treks qui correspondent à la recherche
  
  allTreks.forEach(trek => {                                                          // Pour chaque trek dans la variable allTreks
    const trekName = trek.querySelector('.trek-home_name').textContent.toLowerCase(); // Récupérer le nom du trek et le mettre en minuscule
    if (!trekName.includes(searchText)) {                             // Si le nom du trek ne contient pas la valeur de l'input de recherche
      trek.style.display = 'none';                                    // On cache le trek
    } else {                                                          // Sinon
      trek.style.display = '';                                        // On affiche le trek
      result.push(trek);                                              // On ajoute le trek au tableau result pour la gestion du message d'erreur
    }
  });
  // Si aucun trek ne correspond aux critères de recherche
  const treksContainer = document.querySelector('.container-treks');                  // Récupérer le conteneur des treks
let noTrek = document.querySelector('.no-trek');                                      // Créer une variable qui contiendra l'élément qui indique qu'aucun trek ne correspond aux critères de recherche
                                                                                      //! Cette variable doit être déclarée en dehors de la fonction pour qu'elle soit accessible dans les deux conditions
  if (result.length === 0) {                                                  // Si aucun trek ne correspond aux critères de recherche
  if (!noTrek) {                                                              // Si la div noTrek n'existe pas encore
    noTrek = document.createElement('div');                                           // On crée un élément div
  noTrek.classList.add('no-trek');                                                    // On lui ajoute une classe qui est gérée en CSS
  noTrek.innerHTML = 'Aucune sortie ne correspond à votre recherche';                 // On lui ajoute du contenu
  treksContainer.appendChild(noTrek);                                                 // On ajoute l'élément au conteneur des treks
  }
  } else {                                                                    // Sinon
    if (treksContainer.contains(document.querySelector('.no-trek'))) {                // Si le conteneur des treks contient l'élément noTrek
      noTrek = document.querySelector('.no-trek');                                    // On récupère l'élément noTrek
      treksContainer.removeChild(noTrek);                                             // On le supprime du conteneur des treks
  }
};
}
const submitButton = document.querySelector('.search-submit');                        // Récupérer le bouton de recherche
submitButton.addEventListener('click', () => {                                        // Ajouter un écouteur d'événement sur le bouton de recherche
  filterTreksByName();                                                                // Quand on clique sur le bouton de recherche, on appelle la fonction filterTreksByName
  updatePosition();                                                                   // Et la fonction updatePosition pour que le footer s'adapte
});


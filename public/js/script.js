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
const modalBackgroundElement = document.getElementById('modal-background')
if (modalBackgroundElement !== null) {
modalBackgroundElement.addEventListener('click', function() {
  document.getElementById('myModal').style.display = "none";
});
}

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


const radioInputs = document.querySelectorAll('[slot="radio"]');

function filterTreksByTag() {
  // Récupérer les tags sélectionnés
  const selectedTags = Array.from(radioInputs)
    .filter(input => input.checked)
    .map(input => input.getAttribute('value'));
console.log(selectedTags);
  // Filtrer les treks par les tags sélectionnés
  const filteredTreks = treks.filter(trek =>
    selectedTags.every(tag => trek.tags.includes(tag))
  );
  fetch('/home?tags=' + selectedTags.join(','))
    .then(response => response.json())
    .then(data => {
      console.log(response);
      console.log(data);
      // Mettre à jour l'affichage des treks avec les données reçues du serveur
      // ...
    })
  // Mettre à jour l'affichage des treks
  // voir plus bas dans les commentaires
  // ...
}

// Ajouter un événement sur chaque input radio
radioInputs.forEach(input => {
  input.addEventListener('change', filterTreksByTag);
});



/* Pour envoyer la requête GET au contrôleur, vous pouvez utiliser l'API Fetch. Vous pouvez modifier la fonction filterTreksByTag pour inclure la requête Fetch et envoyer les tags sélectionnés au serveur. Voici un exemple de code :


function filterTreksByTag() {
  // Récupérer les tags sélectionnés
  const selectedTags = Array.from(radioInputs)
    .filter(input => input.checked)
    .map(input => input.getAttribute('value'));
  
  // Envoyer la requête GET avec les tags sélectionnés
  fetch('/treks?tags=' + selectedTags.join(','))
    .then(response => response.json())
    .then(data => {
      // Mettre à jour l'affichage des treks avec les données reçues du serveur
      // ...
    })
    .catch(error => {
      console.error(error);
    });
}

// Ajouter un événement sur chaque input radio
radioInputs.forEach(input => {
  input.addEventListener('change', filterTreksByTag);
});
Dans cet exemple, la requête GET est envoyée à l'URL /treks avec les tags sélectionnés en tant que paramètre de requête tags. La réponse du serveur est convertie en JSON à l'aide de la méthode response.json(), puis la fonction de rappel est appelée avec les données reçues du serveur. Vous pouvez mettre à jour l'affichage des treks avec ces données.

*/

/*
sauf qu'au chargement de la page, je veux que tous les treks soit affichés. Je ne peux pas mettre hidden

Dans ce cas, vous pouvez stocker tous les treks dans une variable au chargement de la page, puis lorsque les tags sont sélectionnés, vous pouvez filtrer la liste des treks et mettre à jour l'affichage en supprimant les éléments qui ne correspondent pas aux critères sélectionnés.

Voici un exemple de code qui utilise cette approche :

javascript
Copy code
// Stocker tous les treks dans une variable au chargement de la page
let allTreks = [...document.querySelectorAll('.trek')];

// Fonction de filtrage des treks par tag
function filterTreksByTag() {
  // Récupérer les tags sélectionnés
  const selectedTags = Array.from(radioInputs)
    .filter(input => input.checked)
    .map(input => input.value);

  // Filtrer les treks par les tags sélectionnés
  let filteredTreks = allTreks;
  if (selectedTags.length > 0) {
    filteredTreks = filteredTreks.filter(trek =>
      selectedTags.every(tag => trek.dataset.tags.includes(tag))
    );
  }

  // Mettre à jour l'affichage des treks
  const treksContainer = document.querySelector('.treks-container');
  treksContainer.innerHTML = '';
  filteredTreks.forEach(trek => {
    treksContainer.appendChild(trek);
  });
}

// Ajouter un événement sur chaque input radio
const radioInputs = document.querySelectorAll('[data-role="tag-selector"]');
radioInputs.forEach(input => {
  input.addEventListener('change', filterTreksByTag);
});
Ici, la variable allTreks contient tous les éléments de trek lors du chargement de la page. Lorsque les tags sont sélectionnés, la liste des treks est filtrée et stockée dans filteredTreks. Ensuite, l'affichage des treks est mis à jour en vidant le conteneur de trek et en ajoutant uniquement les treks qui correspondent aux critères sélectionnés. La fonction filterTreksByTag est appelée chaque fois qu'un tag est sélectionné ou désélectionné.
*/
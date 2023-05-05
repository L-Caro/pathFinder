// == Menu burger du header == //
let sidenav = document.getElementById("mySidenav");                                   // Récupération de l'élément <div id="mySidenav">
let openBtn = document.getElementById("openBtn");                                     // Récupération de l'élément <div id="openBtn">
let closeBtn = document.getElementById("closeBtn");                                   // Récupération de l'élément <div id="closeBtn">
const burgerIcon = document.querySelector(".burger-icon_bar");

openBtn.onclick = openNav;                                                            // Au click sur le bouton ouvrir, on appelle la fonction openNav
closeBtn.onclick = closeNav;                                                          // Au click sur le bouton fermer, on appelle la fonction closeNav

function openNav() {                                                                  // Fonction pour ouvrir le menu burger
  sidenav.classList.toggle("active");                                                  // On ajoute la classe "active" à l'élément <div id="mySidenav">
  burgerIcon.classList.toggle("active");                                                  // On ajoute la classe "active" à l'élément <div class="burger-icon">
}

function closeNav() {                                                                 // Fonction pour fermer le menu burger
  sidenav.classList.remove("active");                                                 // On retire la classe "active" à l'élément <div id="mySidenav">
  burgerIcon.classList.toggle("active");                                                  // On ajoute la classe "active" à l'élément <div class="burger-icon">
}

// =====================================================================
// =====================================================================
// == Fonction pour positionner le footer en fixed/bottom 0 si la page fait moins de la hauteur de l'écran == //
const footer = document.querySelector('footer');                                      // Récupération de l'élément <footer>
const mainContainer = document.querySelector('.main-container');                      // Récupération de l'élément <div class="main-container"> (Hauteur totale du contenu)


function updatePosition() {                                                           // Fonction pour positionner le footer en fixed/bottom 0 si la page fait moins de la hauteur de l'écran
    const mainContainerHeight = mainContainer.offsetHeight;                           // Hauteur totale du contenu de la page
    const windowHeight = window.innerHeight;                                          // Hauteur totale de la fenêtre

    if (mainContainerHeight <= windowHeight) {                                        // Si la hauteur totale du contenu de la page est inférieur ou égale à la hauteur totale de la fenêtre
      footer.style.position = 'fixed';                                                // On positionne le footer en fixed
      footer.style.bottom = '0';                                                      // On positionne le footer en bas de la fenêtre
      mainContainer.style.minHeight = '100vh';                                        // On positionne la hauteur minimum de la page à 100vh
    } else {                                                                  // Sinon
      footer.style.position = 'static';                                               // On positionne le footer en static
    }
  };
  window.addEventListener('resize', updatePosition);                                  // Au redimensionnement de la fenêtre, on appelle la fonction updatePosition
  window.addEventListener('load', updatePosition);                                    // Au chargement de la page, on appelle la fonction updatePosition
  window.addEventListener('DOMContentLoaded', updatePosition);                        // Au chargement du DOM, on appelle la fonction updatePosition


// =====================================================================
// =====================================================================
// == Fonction pour agrandir les images dans un modal == //
const images = document.getElementsByClassName('photo-link');                         // Récupérez toutes les balises d'image dans un tableau

for (let i = 0; i < images.length; i++) {                                             // Parcourir le tableau et ajoutez un gestionnaire d'événements de clic à chaque image
  images[i].addEventListener('click', function(e) {                                   // Au click sur une image
    e.preventDefault();                                                               // On empêche le comportement par défaut du lien
    const src = this.parentNode.getAttribute('href');                                 //! La source de la photo est la source de la boucle
    document.getElementById('modal-image').setAttribute('src', src);                  //? Définie la source de l'image agrandie dans la boîte de dialogue modale
    document.getElementById('myModal').style.display = "block";                       // Afficher la boîte de dialogue modale
  });
}

// Pour fermer l'agrandissement de la photo, on click n'importe ou en dehors de la photo
const modalBackgroundElement = document.getElementById('modal-background')            // Récupérez l'élément de fond de la boîte de dialogue modale
if (modalBackgroundElement !== null) {                                                // Si l'élément de fond de la boîte de dialogue modale n'est pas nul
modalBackgroundElement.addEventListener('click', function() {                         // Ajoutez un gestionnaire d'événements de clic à l'élément de fond de la boîte de dialogue modale
  document.getElementById('myModal').style.display = "none";                          // Cachez la boîte de dialogue modale
});
}




//? == Fonction pour afficher/masquer la navBar au scroll == //
//? = Pour Desktop = //
lastScroll = window.scrollY;
const navBarMobileElement = document.querySelector('.header__small');
const navBarElement = document.querySelector('.header__large');



window.addEventListener('scroll', () => {                                     // Au scroll
  if (window.scrollY < lastScroll || window.scrollY <= 150) {                          //! On compare la position du scroll actuel avec la position du scroll précédent ou si la position est inférieure à 10px (tout en haut)
    navBarElement.style.transition = "opacity 0.5s";                                  //! Si la valeur est inférieure alors => Le scroll est vers le haut
    navBarElement.style.display = "flex";                                             //* On affiche la navBar
    setTimeout(() => {                                                                //* avec une transition de 0.2s
      navBarElement.style.opacity = "1";                                              //* en passant par une opacité de 0.5 pour plus de fluidité
    }, 300);
  } else if (window.scrollY > lastScroll) {                                   // Sinon si 
    navBarElement.style.transition = "opacity 0.5s";                                  //! On compare la position du scroll actuel avec la position du scroll précédent
    navBarElement.style.opacity = "0";                                                //! Si la valeur est supérieure alors => Le scroll est vers le bas
    setTimeout(() => {                                                                //* On masque la navBar
    navBarElement.style.display = "none";                                             //* avec une transition de 0.5s
}, 500);                                                                              //* en passant par une opacité de 0.5 pour plus de fluidité
  }
  lastScroll = window.scrollY;                                                        //! On enregistre la position du scroll actuel pour la prochaine comparaison
});

//? = Pour Mobile = //
lastScrollMobile = window.scrollY;

window.addEventListener('scroll', () => {                                     // Au scroll
  if (window.scrollY < lastScrollMobile || window.scrollY <= 150) {                    //! On compare la position du scroll actuel avec la position du scroll précédent ou si la position est inférieure à 10px (tout en haut)
    navBarMobileElement.style.transition = "opacity 0.5s";                            //! Si la valeur est inférieure alors => Le scroll est vers le haut
    navBarMobileElement.style.display = "flex";                                       //* On affiche la navBar
    setTimeout(() => {                                                                //* avec une transition de 0.2s
      navBarMobileElement.style.opacity = "1";                                        //* en passant par une opacité de 0.5 pour plus de fluidité
    }, 200);
  } else if (window.scrollY > lastScrollMobile) {                             // Sinon si
    navBarMobileElement.style.transition = "opacity 0.5s";                            //! On compare la position du scroll actuel avec la position du scroll précédent
    navBarMobileElement.style.opacity = "0";                                          //! Si la valeur est supérieure alors => Le scroll est vers le bas
    setTimeout(() => {                                                                //* On masque la navBar
    navBarMobileElement.style.display = "none";                                       //* avec une transition de 0.5s
    sidenav.classList.remove("active");                                               //* On ferme le menu burger si il est ouvert
    burgerIcon.classList.remove("active");                                                  //* On ajoute la classe "active" à l'élément <div class="burger-icon">
  }, 500);                                                                              //* en passant par une opacité de 0.5 pour plus de fluidité
  }
  lastScrollMobile = window.scrollY;                                                  //! On enregistre la position du scroll actuel pour la prochaine comparaison
});



//? Fonction pour masquer le footer quand champs de saisie ouvert sur mobile

const inputMobileSearch = document.querySelector('.search-mob-button');
const footerElement = document.querySelector('footer');
inputMobileSearch.addEventListener('focus', () => {
  footerElement.style.display = "none";
});
inputMobileSearch.addEventListener('blur', () => {
  footerElement.style.display = "flex";
});


//? Fonction pour masque la section recherche sur desktop quand pas sur page d'accueil
document.addEventListener("DOMContentLoaded", function() {
  const currentUrl = window.location.pathname;
  const regex = /^\/trek\//;
  const navbarDesktop = document.querySelector('.header_down');
  if (regex.test(currentUrl)) {
    navbarDesktop.classList.add('isHeaderInvisible');
  } else {
    navbarDesktop.classList.remove('isHeaderInvisible');
  }
});

//? Fonction pour masque la section recherche sur mobile quand pas sur page d'accueil
document.addEventListener("DOMContentLoaded", function() {
  const upperHeader = document.querySelector('.header__small__up');
  const burgerElement = document.querySelector('.burger-icon');
  const secondChild = burgerElement.nextSibling;


  const currentUrl = window.location.pathname;
  const links = document.querySelectorAll('.small__dropdown__link');
  const regex = /^\/trek\//;
  const navbarMobile = document.querySelector('.header__small__down');




  if (regex.test(currentUrl)) {
    navbarMobile.classList.add('isHeaderInvisible');
    links.forEach(link => {
      link.classList.add('isHeaderInvisible');
    });
    const headerTitle = document.createElement('h2');
    headerTitle.classList.add('small__header_title');
    headerTitle.textContent = "PathFinder";
    upperHeader.insertBefore(headerTitle, secondChild);

  } else {
    navbarMobile.classList.remove('isHeaderInvisible');
    headerTitle.remove();
  }
});


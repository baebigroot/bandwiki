/* Nhung NGUYEN - Lovanomena RAFIDISON */

/********************************************************/
/*Fonction pour changer le contenu de l'objet d'un mail */
/********************************************************/

function changeemail() {
  
// Recupere le language du navigaeur
    let lang = navigator.language;
// Recupere la date complete    
    let today = new Date();
// Recupere elements de la date
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
// Recupere elements du temps
    let hours = today.getHours();
    let mins = today.getMinutes();
// Declaration de la date et du temps    
    let date;
    let time;
    
// Fonction qui rajoute un 0 si l'element < 10
    function checkTime(i) {

        if (i < 10) {
            return (i = "0" + i);
        } else {
            return i;
        }
    }

    day = checkTime(day);
    hours = checkTime(hours);
    month = checkTime(month);
    mins = checkTime(mins);
// Affecte la valeur du temps apres les verifications   
    time = hours + 'h' + mins;

// Conditions du format de la date selon la langue du navigateur     
    if (lang == 'fr') {
        date = day + '-' + month + '-' + year;
    } else {
        date = month + '-' + day + '-' + year;
    }

// Recupere element avec l'Id
    const myemail = document.getElementById("mymail");
// Ajout de la date et du temps dans l'objet du mail
    myemail.href = myemail.href + '?subject=' + date + ':' + time;
// Affiche le message d'alerte du contenu precedent
    window.alert(myemail.href);
}


/****************************************/
/*Fonction pour faire un menu deroulant */
/****************************************/

// Lorsque l'on clique sur le bouton, bascule entre le masquage et l'affichage du contenu de la liste deroulante 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Ferme le menu deroulant si l'on clique en dehors de celui-ci
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};


/********************************/
/*Fonction pour Changer de Style*/
/********************************/

function toggleStyle() {
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
    const style = document.getElementsByTagName('link')[1];

    // Change the value of href attribute 
    // to change the css sheet.
    if (style.getAttribute('href') == 'Styles/main-styles.css') {
        style.setAttribute('href', 'Styles/styles-alt.css');
    } else {
        style.setAttribute('href', 'Styles/main-styles.css');
    }
}


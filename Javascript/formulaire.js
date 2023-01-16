/* Nhung NGUYEN */

/***************************************************/
/*Fonctions pour dupliquer un element du formulaire */
/***************************************************/

const divMember = document.getElementById('add-more-member');
const divAlbum = document.getElementById('add-more-album');
const divSingle = document.getElementById('add-more-single');
const divLink = document.getElementById('add-more-link');

function duplicateMember() {
    let oneElement = divMember.getElementsByClassName('anElement');
    let firstElement = oneElement[0];
    let newElement = firstElement.cloneNode(true);
    divMember.appendChild(newElement);
}

function duplicateAlbum() {
    let oneElement = divAlbum.getElementsByClassName('anElement');
    let firstElement = oneElement[0];
    let newElement = firstElement.cloneNode(true);
    divAlbum.appendChild(newElement);
}

function duplicateSingle() {
    let oneElement = divSingle.getElementsByClassName('anElement');
    let firstElement = oneElement[0];
    let newElement = firstElement.cloneNode(true);
    divSingle.appendChild(newElement);
}

function duplicateLink() {
    let oneElement = divLink.getElementsByClassName('anElement');
    let firstElement = oneElement[0];
    let newElement = firstElement.cloneNode(true);
    divLink.appendChild(newElement);
}


/****************************************************************/
/*Fonction pour verifier la validite des reponses du formulaire */
/****************************************************************/

function validForm() {

    const lstname = document.forms["myForm"]["last-name"];
    const fstname = document.forms["myForm"]["first-name"];
    const email = document.forms["myForm"]["email"];
    const bandName = document.forms["myForm"]["name"];
    const country = document.forms["myForm"]["country"];
    const genre = document.forms["myForm"]["genre"];
    const year = document.forms["myForm"]["active-year"];
    const memberName = document.forms["myForm"]["member-name"];
    const position = document.forms["myForm"]["position"];
    const albumName = document.forms["myForm"]["album-name"];
    const singleName = document.forms["myForm"]["single-name"];

    if (lstname.value == "Your last name") {
        document.getElementById('errorlstname').innerHTML = "Please enter a valid last name";
        lstname.focus();
        return false;
    }
    
    if (lstname.value == "") {
        document.getElementById('errorlstname').innerHTML = "Please enter a valid last name";
        lstname.focus();
        return false;
    } else {
        document.getElementById('errorlstname').innerHTML = "";
    }
   
    if (fstname.value == "Your first name") {
        document.getElementById('errorfstname').innerHTML = "Please enter a valid first name";
        fstname.focus();
        return false;
    }
    
    if (fstname.value == "") {
        document.getElementById('errorfstname').innerHTML = "Please enter a valid first name";
        fstname.focus();
        return false;
    } else {
        document.getElementById('errorfstname').innerHTML = "";
    }
       
    
    if (email.value == "example@gmail.com") {
        document.getElementById('erroremail').innerHTML = "Please enter a valid email";
        email.focus();
        return false;
    }
    
    if (email.value == "") {
        document.getElementById('erroremail').innerHTML = "Please enter a valid email";
        email.focus();
        return false;
    }
    
    if (email.value.indexOf("@", 0) < 0) {
        document.getElementById('erroremail').innerHTML = "Please enter a valid email";
        email.focus();
        return false;
    }
   
    if (email.value.indexOf(".", 0) < 0) {
        document.getElementById('erroremail').innerHTML = "Please enter a valid email";
        email.focus();
        return false;
    } else {
        document.getElementById('erroremail').innerHTML = "";
    }
    
    
    if ((bandName.value == "Enter the band/artist name")  || (bandName.value == "")) {
        document.getElementById('errorbandName').innerHTML = "Please enter a valid name";
        bandName.focus();
        return false;
    }
        
   
    if ((country.value == "Enter the contry name") || (country.value == "")) {
        document.getElementById('errorcountry').innerHTML = "Please enter a valid country";
        country.focus();
        return false;
    }

    if ((genre.value == "ex: pop, rock, ...") || (genre.value == "")) {
        document.getElementById('errorgenre').innerHTML = "Please enter a valid genre";
        genre.focus();
        return false;
    }

    if ((genre.value == "ex: pop, rock, ...") || (genre.value == "")) {
        document.getElementById('errorgenre').innerHTML = "Please enter a valid genre";
        genre.focus();
        return false;
    }

    if (year.value == "") {
        document.getElementById('erroryear').innerHTML = "Please enter a valid year";
        genre.focus();
        return false;
    }

    if (memberName.value == "") {
        document.getElementById('errormemberName').innerHTML = "Please enter a valid name";
        genre.focus();
        return false;
    }

    if (position.value == "") {
        document.getElementById('errorposition').innerHTML = "Please enter at least one valid position";
        genre.focus();
        return false;
    }

    if (albumName.value == "") {
        document.getElementById('erroralbumName').innerHTML = "Please enter a valid album name";
        genre.focus();
        return false;
    }

    if (singleName.value == "") {
        document.getElementById('errorsingleName').innerHTML = "Please enter a valid single name";
        genre.focus();
        return false;
    }
   
    return true;
}

/* Lovanomena RAFIDISON */

/********************************/
/*Fonction pour Changer de Style*/
/********************************/

function setActiveStyleSheet(title) {
    let i;
    let style;
    for (i = 0; (style = document.getElementsByTagName("link")[i]); i++) {
        if (style.getAttribute("rel").indexOf("stylesheet") != -1 && style.getAttribute("title")) {
            style.disabled = true;
            if (style.getAttribute("title") == title) {
                style.disabled = false;
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("switch").addEventListener("click", function () { setActiveStyleSheet('alter'); });
    document.getElementById("switch2").addEventListener("click", function () { setActiveStyleSheet('main'); });
});


/*********************************/
/* Fonction pour Changer d'Image */
/*********************************/

function imgChg() {
    document.getElementById("logo").src = "../../Images/Others/White_logo.png";
}
function imgChg_0() {
    document.getElementById("logo").src = "../../Images/Others/Black_logo.png";
}

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("switch").addEventListener("click", function () {imgChg(); });
    document.getElementById("switch2").addEventListener("click", function () {imgChg_0(); });
});



/****************************************************************/
/*Fonction pour verifier la validite des reponses du formulaire */
/****************************************************************/

function validForm() {
    const pseudo = document.forms["myForm"]["pseudo"];
    const email = document.forms["myForm"]["email"];
    const msg = document.forms["myForm"]["message"];
   
    if (pseudo.value == "") {
        document.getElementById('errorpseudo').innerHTML = "Please enter a valid pseudo";
        pseudo.focus();
        return false;
    } else {
        document.getElementById('errorpseudo').innerHTML = "";
    }
       
    if (email.value == "someone@example.com") {
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
   
    if (msg.value == "Write your message here ...") {
        document.getElementById('errormsg').innerHTML = "Please enter a valid message";
        msg.focus();
        return false;
    }
    
    if (msg.value == "") {
        document.getElementById('errormsg').innerHTML = "Please enter a valid message";
        msg.focus();
        return false;
    } else {
        document.getElementById('errormsg').innerHTML = "";
    }
   
    return true;
}

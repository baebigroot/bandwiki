/* Lovanomena RAFIDISON */

/****************************************************************/
/*Fonction pour verifier la validite des reponses du formulaire */
/****************************************************************/

function validForm() {

    const fstname = document.forms["myForm"]["first-name"];
    const lstname = document.forms["myForm"]["last-name"];
    const email = document.forms["myForm"]["email"];
    const subject = document.forms["myForm"]["subject"];
    const msg = document.forms["myForm"]["message"];
   
    if (fstname.value == "Your First Name") {
        document.getElementById('errorfstname').innerHTML = "Please enter a valid first-name";
        fstname.focus();
        return false;
    }
    
    if (fstname.value == "") {
        document.getElementById('errorfstname').innerHTML = "Please enter a valid first-name";
        fstname.focus();
        return false;
    } else {
        document.getElementById('errorfstname').innerHTML = "";
    }
    
    
    if (lstname.value == "Your Last Name") {
        document.getElementById('errorlstname').innerHTML = "Please enter a valid last-name";
        lstname.focus();
        return false;
    }
    
    if (lstname.value == "") {
        document.getElementById('errorlstname').innerHTML = "Please enter a valid last-name";
        lstname.focus();
        return false;
    } else {
        document.getElementById('errorlstname').innerHTML = "";
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
    
    
    if (subject.value == "") {
        //If the "Please Select" option is selected display error.
        document.getElementById('errorselect').innerHTML = "Please select an option!";
        subject.focus();
        return false;
    } else {
        document.getElementById('errorselect').innerHTML = "";
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


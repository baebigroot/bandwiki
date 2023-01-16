/* Lovanomena RAFIDISON */

/*********************************************************************/
/* Fonctions pour afficher ou cacher le contenu a partir d'un bouton */
/*********************************************************************/

function ulHide() {
const hiddens = document.getElementsByClassName('hide');
let i;
for (i = 0; i < hiddens.length; i++) {
  hiddens[i].style.display = 'none';
}};
 

function myFct() {
    const content = document.querySelector(".content");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
  }

  function myFct2() {
    const collect = document.querySelector(".collect");
    if (collect.style.display === "none") {
        collect.style.display = "block";
    } else {
        collect.style.display = "none";
    }
  }

  function myFct3() {
    const forms = document.querySelector(".forms");
    if (forms.style.display === "none") {
      forms.style.display = "block";
    } else {
      forms.style.display = "none";
    }
  }

  function myFct4() {
    const misc = document.querySelector(".misc");
    if (misc.style.display === "none") {
      misc.style.display = "block";
    } else {
      misc.style.display = "none";
    }
  }
  function myFct5() {
    const images = document.querySelector(".images");
    if (images.style.display === "none") {
      images.style.display = "block";
    } else {
      images.style.display = "none";
    }
  }

  function myFct6() {
    const js = document.querySelector(".js");
    if (js.style.display === "none") {
      js.style.display = "block";
    } else {
      js.style.display = "none";
    }
  }
  function myFct7() {
    const styles = document.querySelector(".styles");
    if (styles.style.display === "none") {
      styles.style.display = "block";
    } else {
      styles.style.display = "none";
    }
  }

  function myFct8() {
    const xml = document.querySelector(".xml");
    console.log(xml);
    if (xml.style.display === "none") {
      xml.style.display = "block";
    } else {
      xml.style.display = "none";
    }
  } 

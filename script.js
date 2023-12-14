// création des fonctions js pour chaques champs du CV

function nom(){
    let contenu = document.getElementById("nom"); // création varaible avec récupération de l'id du champs à remplir

    // création du fonctionnement du bouton switch

    if(contenu.innerHTML === "Nom : Prin-Abeil"){ // Si le contenu actuel est égale au premier profil
        contenu.innerHTML = "Nom : Sanchez";     // Changement de profil
    } else {
        contenu.innerHTML = "Nom : Prin-Abeil";   //Sinon remettre nom de base
    }
}

function prenom(){
    let contenu = document.getElementById("prenom");

    if(contenu.innerHTML === "Prénom : Arnaud"){
        contenu.innerHTML = "Prénom : Anthony";
    } else {
        contenu.innerHTML = "Prénom : Arnaud";
    }
}

function poste(){
    let contenu = document.getElementById("poste");

    if(contenu.innerHTML === "Développeur Web"){
        contenu.innerHTML = "Administrateur réseau";
    } else {
        contenu.innerHTML = "Développeur Web";
    }
}


// création des constantes pour chaques champs

const tel1 = new Tel("06.07.08.09.10");
const email1 = new Email("contact@taff.com");
const pss1 = new Pss("sérieux");
const sss1 = new Sss("professionnel");
const pexp1 = new Pexp("développeur pour le compte de dévmania");
const sexp1 = new Sexp("création du site et application du groupe Carfour");
const texp1 = new Texp("pôle emploie");
const pdip1 = new Pdip("Baccalauréat Scientifique");
const sdip1 = new Sdip("Licence mention métiers de l'informatique");
const tdip1 = new Tdip("Master Informatique");

// récupération des champs à remplir par l'ID avec les informations à chercher côté JavaScript

document.getElementById("tel").innerHTML = tel1.tel;
document.getElementById("email").innerHTML = email1.email;
document.getElementById("pss").innerHTML = pss1.pss;
document.getElementById("sss").innerHTML = sss1.sss;
document.getElementById("pexp").innerHTML = pexp1.pexp;
document.getElementById("sexp").innerHTML = sexp1.sexp;
document.getElementById("texp").innerHTML = texp1.texp;
document.getElementById("pdip").innerHTML = pdip1.pdip;
document.getElementById("sdip").innerHTML = sdip1.sdip;
document.getElementById("tdip").innerHTML = tdip1.tdip;
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

function tel(){
    let contenu = document.getElementById("tel");

    if(contenu.innerHTML === "06.07.08.09.10"){
        contenu.innerHTML = "07.85.98.14.20";
    } else {
        contenu.innerHTML = "06.07.08.09.10";
    }
}

function email(){
    let contenu = document.getElementById("email");

    if(contenu.innerHTML === "contact@taff.com"){
        contenu.innerHTML = "contact@cmd.com";
    } else {
        contenu.innerHTML = "contact@taff.com"
    }
}

function pss(){
    let contenu = document.getElementById("pss");

    if(contenu.innerHTML === "sérieux"){
        contenu.innerHTML = "attentif";
    } else {
        contenu.innerHTML = "sérieux";
    }
}

function sss(){
    let contenu = document.getElementById("sss");

    if(contenu.innerHTML === "professionnel"){
        contenu.innerHTML = "florian";
    } else {
        contenu.innerHTML = "professionnel";
    }
}

function pexp(){
    let contenu = document.getElementById("pexp");

    if(contenu.innerHTML === "développeur pour le compte de dévmania"){
        contenu.innerHTML = "stage chez Dubois Info";
    } else {
        contenu.innerHTML = "développeur pour le compte de dévmania";
    }
}

function sexp(){
    let contenu = document.getElementById("sexp");

    if(contenu.innerHTML === "création du site et application du groupe Carfour"){
        contenu.innerHTML = "développeur à la mairie de Meyzieu";
    } else {
        contenu.innerHTML = "création du site et application du groupe Carfour";
    }
}

const sexp1 = new Sexp("création du site et application du groupe Carfour");
const texp1 = new Texp("pôle emploie");
const pdip1 = new Pdip("Baccalauréat Scientifique");
const sdip1 = new Sdip("Licence mention métiers de l'informatique");
const tdip1 = new Tdip("Master Informatique");

document.getElementById("sexp").innerHTML = sexp1.sexp;
document.getElementById("texp").innerHTML = texp1.texp;
document.getElementById("pdip").innerHTML = pdip1.pdip;
document.getElementById("sdip").innerHTML = sdip1.sdip;
document.getElementById("tdip").innerHTML = tdip1.tdip;
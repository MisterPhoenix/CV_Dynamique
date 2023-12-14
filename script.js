// création des classes js pour chaques champs du CV

function nom(){
    let contenu = document.getElementById("nom");

    if(contenu.innerHTML === "Nom : Prin-Abeil"){
        contenu.innerHTML = "Nom : Sanchez";
    } else {
        contenu.innerHTML = "Nom : Prin-Abeil";
    }
}


/** class Nom{
    constructor(nom){
        this.nom = nom;
    }
} */

class Prenom{
    constructor(prenom){
        this.prenom = prenom;
    }
}

class Poste{
    constructor(poste){
        this.poste = poste;
    }
}

class Tel{
    constructor(tel){
        this.tel = tel;
    }
}

class Email{
    constructor(email){
        this.email = email;
    }
}

class Pss{
    constructor(pss){
        this.pss = pss;
    }
}

class Sss{
    constructor(sss){
        this.sss = sss;
    }
}

class Pexp{
    constructor(pexp){
        this.pexp = pexp;
    }
}

class Sexp{
    constructor(sexp){
        this.sexp = sexp;
    }
}

class Texp{
    constructor(texp){
        this.texp = texp;
    }
}

class Pdip{
    constructor(pdip){
        this.pdip = pdip;
    }
}

class Sdip{
    constructor(sdip){
        this.sdip = sdip;
    }
}

class Tdip{
    constructor(tdip){
        this.tdip = tdip;
    }
}

// création des constantes pour chaques champs

const prenom1 = new Prenom("Prénom : " + "Arnaud");
const poste1 = new Poste("Développeur Web");
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

document.getElementById("prenom").innerHTML = prenom1.prenom;
document.getElementById("poste").innerHTML = poste1.poste;
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
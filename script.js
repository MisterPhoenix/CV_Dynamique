// création des classes js pour chaques champs du CV

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

const poste1 = new Poste(newposte);
const tel1 = new Tel();
const email1 = new Email();
const pss1 = new Pss();
const sss1 = new Sss();
const pexp1 = new Pexp();
const sexp1 = new Sexp();
const texp1 = new Texp();
const pdip1 = new Pdip();
const sdip1 = new Sdip();
const tdip1 = new Tdip();

// récupération des champs à remplir par l'ID avec les informations à chercher côté JavaScript

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

newposte = "Développeur Web";
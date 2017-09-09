'use strict';

var kaja = {
    imie: "Kaja",
    wzrost: 152,
    przedstawOsobe: function() {console.log(this.imie)}
}
var krystian = {
    imie: "Krystian",
    wzrost: 180,
    przedstawOsobe: function() {console.log(this.imie)}
}
console.log(kaja);
kaja.przedstawOsobe();
console.log(kaja.wzrost);
console.log(kaja["wzrost"]);

class Osoba {
    constructor(imie, nazwisko, wzrost, oczy) {
        this.imie = imie;
        this.nazwisko = nazwisko; 
        this.wzrost = wzrost;
        this.oczy = oczy;
    }
    
    wyswietlInfo() {
        console.log( "Imię: " + this.imie + ", " + "Nazwisko: " + this.nazwisko + ", " + "Oczy: " + this.oczy + ", " + "Wzrost: " + this.wzrost);
    }
}

var bartosz = new Osoba('Bartosz', 'Parzychowski', 183, "niebieskie");
var maja = new Osoba("Maja", "Brzęczyszczykiewicz", 250, "szare")
console.log(bartosz);
console.log(maja);

maja.wyswietlInfo();
bartosz.wyswietlInfo();
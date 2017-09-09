'use strict';

function wypiszImie( imieDoWypisania, drugieImieDoWypisania ) {
    console.log(imieDoWypisania, drugieImieDoWypisania);
}

wypiszImie("Bartosz", "Darek");

var imieMeskie = "Mateusz";
var imieZenskie = "Ola";

wypiszImie(imieMeskie, imieZenskie); //wywolanie
// Petla/////////////
function wypiszImieWPetli() 
{
    for(var i=0; i<3; i++)
        {
            wypiszImie(imieMeskie, imieZenskie);
        }
}
wypiszImieWPetli(); //wywolanie
//Petla//////////

function wypiszImieDwa( imieDoWypisania ) 
{
    var wypisywanyNapis;
    wypisywanyNapis = "Imie jest: " + imieDoWypisania
    
    return wypisywanyNapis;
}

var nowyNapis = wypiszImieDwa( imieMeskie )
console.log(nowyNapis);

//funkcja mnozenie

function mnozenie(czynnik1, czynnik2, czynnik3){

    var wynik;
    
    wynik = czynnik1 * czynnik2 * czynnik3;
    
    return wynik;
}
var zmienna1 = 1;
var zmienna2 = 4;
var zmienna3 = 15;

var wynikFunkcji = mnozenie(zmienna1, zmienna2, zmienna3);
console.log(wynikFunkcji);


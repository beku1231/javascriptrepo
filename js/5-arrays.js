'use strict';

var imiona = ['Monika', 'Krystian', 'Łukasz'];

imiona[3] = 'Tania';
imiona[2] = 'Grill';

imiona.push('Geralt'); //wstawia coś na końcu

imiona.pop(); //usuwa ostatni element i go zwraca - return


console.log(imiona);

console.log(imiona.unshift('Robert')); //Na poczatku dodaje - zwraca nową długość tablicy

console.log(imiona.shift()); //usuwa z początku i zwraca

console.log(imiona);

console.log(imiona.length); //zwraca długość tablicy

imiona.push("Kaja");

console.log(imiona);

for (var i = 0; i<4; i++) {
    console.log(imiona[i]);
    }

for (var i = imiona.length-1; i >=0; i--) {
    console.log(imiona[i]);
}

console.log(imiona.join(" + ")); //łączy tablice w jednego stringa

imiona.sort();    //sortowanie
console.log(imiona);

imiona.reverse();  //odwrócenie
console.log(imiona);


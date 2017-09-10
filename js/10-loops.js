'use strict';

var dadad = 13;
var sasasa = 14;

for(var i=0; i<13; i++){
    console.log("iteracja");
}

// pętla forech

var it = 0;
while(it<10){
    console.log(it++)
}


var iter = 20;
do {
    console.log(iter);
    iter++;
    console.log(iter);
}while (iter < 10)
    
var a = 0;
while (a<10){
    console.log(++a);
    
    if (a==5) {
        break;
    }
}

var tablica = ["Krystian", "Danuta", "Grażyna"];

tablica.forEach( function( element, index ) {
console.log( "Element z Indexem: "  + index + " ma wartość " + element );
});

// Przeskakiwanie do kolejnej iteracji

for (var b = 0; b < 10; ++b) {
    
    if ( b==5 ) {
        continue;
    }else {
        console.log(b);
    }
    console.log("--");
}

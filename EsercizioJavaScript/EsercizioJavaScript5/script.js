//VERSIONE 1.0 Acquisto con uno solo prodotto con if else
let prodotti = ["Acqua", "Succo", "Panino", "Credit"];
console.log(prodotti);

let prezzi = [1.20, 2.50, 3.80];
let Credit = 10;

if (Credit >= prezzi[0]) {
    console.log("Puoi permetterti di comprare l'acqua");
} else {
    console.log("Non puoi permetterti di comprare l'acqua");
}


if (Credit >= prezzi[1]) {
    console.log("Puoi permetterti di comprare il succo");
} else {
    console.log("Non puoi permetterti di comprare il succo");
}


if (Credit >= prezzi[2]) {
    console.log("Puoi permetterti di comprare il panino                         ");
} else {
    console.log("Non puoi permetterti di comprare il paninoxs");
}

//VERSIONE 2.0 Acquisto con un solo prodotto con ciclo for

let prodotti2 = ["Acqua", "Succo", "Panino", "Credit"];
console.log(prodotti2);

let prezzi2 = [1.20, 2.50, 3.80];
let Credit2 = 10;

for (let i = 0; i < prezzi2.length; i++) {
    if (10 >= prezzi2[i]) {
        console.log("Puoi permetterti di comprare " + prodotti2[i]);
    } else {
        console.log("Non puoi permetterti di comprare " + prodotti2[i]);
    }
}           

// VERSIONE 3.0 - Acquisto di tutti i prodotti

let prodotti3 = ["Acqua", "Succo", "Panino"];
let prezzi3 = [1.20, 2.50, 3.80];
let Credit3 = 10;
console.log(prodotti3);

// Calcolo del totale
let totale3 = prezzi3[0] + prezzi3[1] + prezzi3[2];

// Controllo del credito
if (Credit3 >= totale3) {
    console.log("Puoi acquistare tutti e tre i prodotti");
    console.log("Il tuo resto è: " + (Credit3 - totale3) + " €");
} else {
    console.log("Non hai abbastanza soldi");
    console.log("Ti mancano: " + (totale3 - Credit3) + " €");
}
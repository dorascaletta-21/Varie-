/*
let spesa = ["pane", "latte", "uova"];

// Aggiungo "pasta" alla fine dell'array
spesa.push("pasta");
console.log(spesa);

// Aggiungo "acqua" all'inizio dell'array
spesa.unshift("acqua");
console.log(spesa);

// Rimuovo l'ultimo elemento
spesa.pop();
console.log(spesa);

// Rimuovo il primo elemento
spesa.shift();
console.log(spesa);

// Stampo l'array aggiornato in console
console.log(spesa);
*/

/*Traccia 2

Dati questi dati:

let giochi = ["Minecraft", "FIFA", "GTA", "Fortnite", "Valorant"];

Rimuova "GTA" dall'array.
Inserisca "Rocket League" nella stessa posizione.
Crei un nuovo array contenente solo i primi tre giochi.
Stampi entrambi gli array. */

let giochi = ["Minecraft", "FIFA", "GTA", "Fortnite", "Valorant"];

// Rimuovo "GTA" dall'array
let indexGTA = giochi.indexOf("GTA");
if (indexGTA !== -1) {
    giochi.splice(indexGTA, 1);
}

// Inserisco "Rocket League" nella stessa posizione
giochi.splice(indexGTA, 0, "Rocket League");

// Creo un nuovo array contenente solo i primi tre giochi
let primiTreGiochi = giochi.slice(0, 3);

// Stampo entrambi gli array
console.log("Array aggiornato dei giochi:", giochi);
console.log("Nuovo array con i primi tre giochi:", primiTreGiochi);  


/*

Traccia 3:

Dati questi dati:

const prodotti = [ { nome: "Tastiera", prezzo: 45, disponibile: true }, { nome: "Mouse", prezzo: 20, disponibile: false }, { nome: "Monitor", prezzo: 180, disponibile: true }, { nome: "Cavo USB", prezzo: 10, disponibile: true } ];

estrai solo gli oggetti che hanno disponibile === true
crea un nuovo array con i prezzi maggiorati dall'iva
calcolare quanti articoli ci sono nel magazzino
stampare il nome e il prezzo di ogni prodotto*/

const prodotti = [
    { nome: "Tastiera", prezzo: 45, disponibile: true },
    { nome: "Mouse", prezzo: 20, disponibile: false },
    { nome: "Monitor", prezzo: 180, disponibile: true },
    { nome: "Cavo USB", prezzo: 10, disponibile: true }
];

// Estraggo solo gli oggetti che hanno disponibile === true
const prodottiDisponibili = prodotti.filter(prodotto => prodotto.disponibile);

// Creo un nuovo array con i prezzi maggiorati dall'iva (22%)
const prodottiConIva = prodottiDisponibili.map(prodotto => {
    return {
        ...prodotto,
        prezzoConIva: prodotto.prezzo * 1.22
    };
});

// Calcolo quanti articoli ci sono nel magazzino
const numeroArticoli = prodottiDisponibili.length;

// Stampo il nome e il prezzo di ogni prodotto disponibile
console.log("Prodotti disponibili nel magazzino:", numeroArticoli);
prodottiConIva.forEach(prodotto => {
    console.log(`Nome: ${prodotto.nome}, Prezzo: ${prodotto.prezzo}, Prezzo con IVA: ${prodotto.prezzoConIva.toFixed(2)}`);
});     
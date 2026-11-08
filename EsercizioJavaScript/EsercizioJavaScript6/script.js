/*
Traccia 3
Scrivi un programma che converta una temperatura inserita dall'utente.

Se temperatura è minore di 20, stampare "non ci sono più le mezze stagioni".

Se temperatura è maggiore o uguale a 30, stampare "lu mare, lu sole, lu ientu".

Se temperatura è minore di 30, stampare "mi dia una peroni sudata".

Se temperatura è minore di 0, stampare "non è tanto il freddo quanto l'umidità".

Se temperatura è minore di -10, stampare "copriti... ancora ti raffreddi".
*/



let temperatura = prompt("Inserisci la temperatura in gradi Celsius: ");

if (temperatura < 20) {
    console.log("Non ci sono più le mezze stagioni");
}

if (temperatura >= 30) {
    console.log("Lu mare, lu sole, lu ientu");
}

if (temperatura < 30) {
    console.log("Mi dia una Peroni sudata");
}

if (temperatura < 0) {
    console.log("Non è tanto il freddo quanto l'umidità");
}

if (temperatura < -10) {
    console.log("Copriti... ancora ti raffreddi");
}       
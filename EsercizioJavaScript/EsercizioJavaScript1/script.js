// 1. Dichiara una variabile num1, e assegnale un numero qualsiasi
let num1 = 21

// 2. Dichiara una variabile num2, e assegnale un numero qualsiasi
let num2 = 57;

// 3. Visualizza a schermo "Il valore della variabile num1 e' tot". Fai la stessa cosa per num2
alert("Il valore della variabile num1 e' " + num1);
alert("Il valore della variabile num2 e' " + num2);

// 4. Dichiara una variabile, e assegnale come valore una stringa qualsiasi
let miaStringa = "JavaScript è un linguaggio fantastico!";

// 5. Stampa a schermo "Il valore della variabile stringa e' tot"
alert("Il valore della variabile stringa e' " + miaStringa);

// 6. Sostituisci il valore della variabile stringa con un qualsiasi altro valore e poi stampalo a schermo
miaStringa = "Nuovo valore assegnato alla stringa.";
alert("Il valore della variabile stringa modificata e' " + miaStringa);

// 7. Dichiara una costante chiamata PIGRECO, e assegnale un valore di 3.14159265359
const PIGRECO = 3.14159265359;

// 8. Visualizza a schermo "il valore di PIGRECO e' tot"
alert("Il valore di PIGRECO e' " + PIGRECO);

// 9. Prova a cambiare il valore della costante e vedi cosa succede
try {
    alert("Tentativo di riassegnare il valore a PIGRECO...");
    PIGRECO = 3.14; // Questo genererà un errore!
} catch (errore) {
    alert("ERRORE GENERATO: " + errore.message);
    console.error("Errore riscontrato:", errore);
}
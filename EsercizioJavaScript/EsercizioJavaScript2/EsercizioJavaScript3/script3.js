let nomeUtente = prompt("Inserisci il tuo nome:");
let etaUtente = Number(prompt("Quanti anni hai?"));

alert(`Benvenuto/a ${nomeUtente}!`);

if (etaUtente >= 18) {
    alert(`Sei maggiorenne (${etaUtente} anni). Puoi accedere all'area riservata.`);
} else {
    alert(`Sei minorenne (${etaUtente} anni). Accesso non consentito ai minori.`);
}

let gatti_totali = prompt 44;
let gatti_per_fila = prompt 7;

// Calcolo delle file complete
let file_complete = Math.floor(gatti_totali / gatti_per_fila);

// Calcolo dei gatti che rimangono fuori
let gatti_restanti = gatti_totali % gatti_per_fila;

// Calcolo dei gatti mancanti per una nuova fila
let gatti_mancanti = gatti_per_fila - gatti_restanti;

//In seguito, stampa in console la frase “Ci sono X file di gatti e ne mancano Y per una nuova fila, con un avanzo di Z”
console.log("Ci sono " + file_complete + " file di gatti e ne mancano " + gatti_mancanti + " per una nuova fila, con un avanzo di " + gatti_restanti);



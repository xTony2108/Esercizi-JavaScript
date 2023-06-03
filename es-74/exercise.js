const repeatHello = (callback) => {
  setInterval(callback, 1000);
};

repeatHello(() => {
  console.log("hello");
});

/*la funzione di callback è un arrow function perchè è anonima e ci permette
di scrivere meno codice migliorandone la leggibilità e per motivi di scope della funzione
la quale si adatta al context. Pertanto l'arrow function si definisce direttamente nella 
callback invece di dichiarare una funzione esterna. Inoltre è più conveniente se il suo 
contenuto viene utilizzato solo in una porzione di codice.*/

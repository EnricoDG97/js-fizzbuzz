// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
// BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.


// pseudo codice:
// Ripetere i numeri X volte
// SE i multipli sono sia di 3 che di 5
//     scrivi fizzbuzz;
// ALTRIMENTI SE il numero è multiplo di 3
//     scrivi solo fizz;
// ALTRIMENTI SE il numero è multiplo di 5
//     scrivi solo buzz;
// ALTRIMENTI
//     scrivi solo il numero;

// selezione del container principale
let containerElement = document.getElementById("container");


// logica di stampa fizz e buzz
for (let i = 1; i <= 140; i++) {
    // creazione elemento nel container
    let numberElement = document.createElement('div');
    //aggiungo la creazione di un elemento in container principale
    // i numeri saranno figli di container
    containerElement.append(numberElement);

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
        numberElement.innerText = "FizzBuzz";
    } else if (i % 3 == 0) {
        console.log("Fizz");
        numberElement.innerText = "Fizz";
    } else if (i % 5 == 0) {
        console.log("Buzz");
        numberElement.innerText = "Buzz";
    } else {
        console.log(i);
        numberElement.innerText = i;
    }
}
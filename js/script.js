//Descrizione:
//Visualizzare in pagina (html) 5 numeri casuali.
//Avviare un timer di 30 secondi
//Dopo 30 secondi, nascondere i numeri.
//L’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite un prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let containerRandomNumbers = document.querySelector(".container-numeri-casuali")
// dichiaro variabile numeriCasuali
let numeriCasuali = [];
// dichiaro variabil numeriUtente
let numeriUtente = [];

let secondiRimanenti = 30

// funzione per creare 5 numeri casuali e pusharli dentro l array dei numeri casuali
function createRandomNumbers(){

    while (numeriCasuali.length < 5) {
        const randomNumber = Math.floor(Math.random() * 100)
        // se il numero non è incluso nell array lo pusho altrimenti continuo a creare numeri finchè la lunghezza dell array è minore di 5
        if (!numeriCasuali.includes(randomNumber)) {
            numeriCasuali.push(randomNumber)
        }
        
    }
    renderRandomNumber()

    return numeriCasuali;
}

createRandomNumbers()

// funzione per stampare in html i numeriRandome
function renderRandomNumber() {
    for (let i = 0; i < numeriCasuali.length; i++) {
        const singleNumber = numeriCasuali[i]

        containerRandomNumbers.innerHTML += " " + singleNumber

        
    }
}

// creo intervallo di 30 secondi quando arraiva a 0 i numeri spariscono
const stopWatch = setInterval(function(){
    // ad ogni secondo che passa diminuisco i 
    secondiRimanenti --;
    console.log(secondiRimanenti)

    // svuoto l html quando i secondi rimanenti sono uguali a 0 
    if (secondiRimanenti === 0) {
        clearInterval(stopWatch)

        containerRandomNumbers.innerHTML = "" 
    }

}, 1000)


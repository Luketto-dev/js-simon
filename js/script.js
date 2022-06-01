//Descrizione:
//Visualizzare in pagina (html) 5 numeri casuali.
//Avviare un timer di 30 secondi
//Dopo 30 secondi, nascondere i numeri.
//L’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite un prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let containerRandomNumbers = document.querySelector(".container-numeri-casuali")
// dichiaro variabile numeriCasuali
let numeriCasuali = [];
// dichiaro variabil numeriUtente che popolerò tramite un prompt
let numeriUtente = [];

let secondiRimanenti = 30

// funzione per creare 5 numeri casuali e pusharli dentro l array dei numeri casuali
function createRandomNumbers(){

    while (numeriCasuali.length < 5) {
        const randomNumber = Math.floor(Math.random() * 99) +1
        // se il numero non è incluso nell array lo pusho altrimenti continuo a creare numeri finchè la lunghezza dell array è minore di 5
        if (!numeriCasuali.includes(randomNumber)) {
            numeriCasuali.push(randomNumber)
        }
        
    }
    renderRandomNumber()

    return numeriCasuali;
}

console.log(numeriCasuali)
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
    // ad ogni secondo che passa diminuisco i secondiRimanenti
    secondiRimanenti --;
    console.log(secondiRimanenti)

    // svuoto l html e interrompo l intervallo quando i secondi rimanenti sono uguali a 0 
    if (secondiRimanenti === 0) {

        // interrompo intervallo
        clearInterval(stopWatch)
        
        //svuoto html
        containerRandomNumbers.innerHTML = "" 

        // creo variabile numeriPresi
        let numeriPresi = []

        //creo un timeout per avere un delay e far apparire il prompt quando scompaiono i numeri
        setTimeout(function(){
            for (let i = 0; i < numeriCasuali.length; i++) {

                let numeroUtente = +prompt("inserisci un numero da 1 a 100")

                if (isNaN(numeroUtente)  || numeroUtente <= 0 ) {
                    alert("inserisci un numero adeguato")
                    i--
                }else if(numeriUtente.includes(numeroUtente)){
                    alert("numero gia inserito, inserisci un nuovo numero")
                    i--
                }
                else{
                    // pusho ogni numero che mi da l utente nell array numeriUtente
                    numeriUtente.push(numeroUtente)
                }
                
                console.log(numeriUtente)
                // controllo se nell'array dei numeriCasuali sono presenti elementi che si trovano nell array dei numeriUtente 
                if (numeriCasuali.includes(numeriUtente[i])) {
                    if (!numeriPresi.includes(numeriUtente[i])) {
                        //se sono inclusi li pusho in un altro array che ho chiamato numeriPresi
                        numeriPresi.push(numeriUtente[i])
                        console.log(numeriPresi);
                    }
                
                }
            }

            alert("hai indovinato " + numeriPresi.length + " numeri: " + numeriPresi)

        }, 150)
        
    }

}, 1000)





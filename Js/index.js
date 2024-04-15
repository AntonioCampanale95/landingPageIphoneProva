
//Qui controllo la validità dei campi con l'utilizzo delle regex (è un pò un casino ho fatto tanti alert per ogni singolo controllo)

document.addEventListener("DOMContentLoaded", function () {      //metto il domcontentloaded anche se in teoria non dovrebbe servire visto che è in fondo al body il mio script
    let form = document.getElementById("formContatti");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let nome = document.getElementById("nome").value;
        let cognome = document.getElementById("cognome").value;
        let telefono = document.getElementById("telefono").value;
        let email = document.getElementById("email").value;
        let messaggio = document.getElementById("messaggio").value;

        let errore = false;  //mi creo una variabile errore per poter gestire gli errori all'interno dei controlli

        if (nome === "") {                         //ho fatto per tutti i campi il controllo sull'input vuoto
            alert("Inserisci il tuo nome.");
            errore = true;
        } else if (!/^[a-zA-Z]+$/.test(nome)) {
            alert("Il nome deve contenere solo lettere.");
            errore = true;
        }

        if (cognome === "") {
            alert("Inserisci il tuo cognome.");
            errore = true;
        } else if (!/^[a-zA-Z]+$/.test(cognome)) {
            alert("Il cognome deve contenere solo lettere.");
            errore = true;
        }
        if (telefono === "") {
            alert("Inserisci il tuo numero di telefono.");
            errore = true;
        } else if (!/^\d{8,}$/.test(telefono)) {
            alert(
                "Il numero di telefono non è valido. Inserisci un numero di telefono valido (almeno 8 cifre)."
            );
            errore = true;
        }
        if (email === "") {
            alert("Inserisci la tua email.");
            errore = true;
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("L'indirizzo email non è valido. Inserisci un indirizzo email valido.");
            errore = true;
        }

    });
});



//------------------------------------------------------


//Qui trasformo l'input in oggetto e gli passo il codice sconto in console (NON HO FATTO IN TEMPO A FARE UN CONTROLLO
//NEL MOMENTO IN CUI VIENE INSERITO UN CAMPO VUOTO. SE NON SCRIVO NULLA NEL FORM
//CI SARA' L'ERRORE MA COMUNQUE VERRA' CREATO UN OGG CON ELEMENTI VUOTI :(
// ps viene aggiunto l'oggetto anche alla lista dei partecipanti per il concorso

let form = document.getElementById("formContatti");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let datiInput = new FormData(this);
    let datiInputObj = {};
    datiInput.forEach(function (value, key) {
        datiInputObj[key] = value;
    });
    console.log(datiInputObj);

    let cognome = document.getElementById('cognome').value;
    let data = new Date();
    let anno = data.getFullYear().toString().slice(-4); // qui mi vado a prendere gli ultimi 4 elementi dell'anno
    let mese = ("0" + (data.getMonth() + 1)).slice(-2); // qui mi vado a prendere i due caratteri per il mese
    let giorno = ("0" + data.getDate()).slice(-2); // qui mi vado a prendere i due caratteri per il giorno


    let codiceSconto = anno + mese + giorno + cognome.toUpperCase() + "10";


    console.log("Grazie per aver inserito i tuoi dati. Ecco il tuo codice sconto: " + codiceSconto);


let nome = document.getElementById('nome').value;
let email = document.getElementById('email').value;
let telefono = document.getElementById('telefono').value;

    let nuovoPartecipante = {
        nome,
        cognome,
        email,
        telefono
    }

    partecipanti.push(nuovoPartecipante);

    console.log(nuovoPartecipante);
    return console.log(partecipanti);

});



//---------------------------------------------



//Sistema di estrazione per il concorso



const partecipanti = [
    {
        nome: 'Gianni',
        cognome: 'Carelli',
        email: 'gianniCarelli95@gmail.com',
        telefono: '3478765678',
    },
    {
        nome: 'Luca',
        cognome: 'Mastrangelo',
        email: 'lucaMastrangelo@gmail.com',
        telefono: '3467898765'
    },
    {
        nome: 'Mirco',
        cognome: 'Diamante',
        email: 'mircoDiamante@gmail.com',
        telefono: '3467898765'
    },
    {
        nome: 'Rocco',
        cognome: 'Tanica',
        email: 'roccoTanica@gmail.com',
        telefono: '4789876564'
    },
    {
        nome: 'Francesca',
        cognome: 'Schettini',
        email: 'francescaSchettini@gmail.com',
        telefono: '3789876564'
    },
    {
        nome: 'Michela',
        cognome: 'Amato',
        email: 'michelaAmato@gmail.com',
        telefono: '3898736787'
    }
];



function random(partecipanti) {
    if (partecipanti.length > 0) {
        const numeroRan = Math.floor(Math.random() * partecipanti.length);
        const vincitore = partecipanti[numeroRan];
        console.log(partecipanti);
        return `Complimenti ${vincitore.nome} ${vincitore.cognome}. Hai vinto un iPhone15!`; //interpolazione
    } else {
        console.log("La lista partecipanti è vuota! Aggiungerli!");
    }
}

const button = document.querySelector('#btnConcorso');

button.addEventListener('click', (event) => {
    console.log(random(partecipanti));
});










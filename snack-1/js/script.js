// creo un array di ogetti per descrivere le bici da corsa

const myBikes = [
    {
        name: "bike-1",
        weigth: 7.2
    },

    {
        name: "bike-2",
        weigth: 6.8
    },

    {
        name: "bike-3",
        weigth: 6.5
    },
]

// definisco una variabile d'appoggio per salvare il risultato
let ligthBike = "";

// imposto un ciclo for per trovare la bici con il peso minore

for (let i = 1; i < myBikes.length; i++) {
    if (myBikes[i].weigth < 6.8) {
        ligthBike = myBikes[i];
    }
}

// prelevo l'elemento dal DOM tramite classe
let bike = document.querySelector(".bike");

// salvo i valori che desidero nella variabile tramite destructuring
let {name, weigth} = ligthBike;

// stampo in console il risultato
console.log("la bici più leggera è ${name}");

// stampo nel dom il risultato
bike.innerHTML = `la bici più leggera è ${name}`;

// creo un array di oggetti
const people = [
    {
        nome: "mario",
        cognome: "rossi",
        età: 15
    },

    {
        nome: "giovanni",
        cognome: "bianchi",
        età: 19
    },

    {
        nome: "marco",
        cognome: "ferrari",
        età: 48
    },
]
console.log(people);
// definisco con una variabile un arry vuoto

let newPeople = [];

// imposto un ciclo foreach

people.forEach((curDrivers) => {
    if (curDrivers.età >= 18) {
        newPeople.push (curDrivers);
    } else {
        newPeople.push (curDrivers);
    }
})

console.log(newPeople);
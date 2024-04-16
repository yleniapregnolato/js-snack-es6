//  creare un array composta da 4 automobili
const automobili = [
    { marca: "Toyota", modello: "Yaris", alimentazione: "ibrida" },
    { marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
    { marca: "BMW", modello: "i3", alimentazione: "elettrico" },
    { marca: "Fiat", modello: "Panda", alimentazione: "metano" },
    { marca: "Renault", modello: "Clio", alimentazione: "diesel" },
    { marca: "Tesla", modello: "Model S", alimentazione: "elettrico" },
    { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
    { marca: "Audi", modello: "A3", alimentazione: "diesel" },
    { marca: "Mercedes-Benz", modello: "EQC", alimentazione: "elettrico" },
    { marca: "Opel", modello: "Corsa", alimentazione: "gpl" }
  ];

console.log(automobili);

let autoBenzina = [];
let autoDiesel = [];
let auto = [];

autoBenzina = automobili.filter((curAuto) => {
    if (curAuto.alimentazione === "benzina") {
        return true;
    } else {
        return false;
    }
})

console.log(autoBenzina);

autoDiesel = automobili.filter((curAuto) => {
    if (curAuto.alimentazione === "diesel") {
        return true;
    } else {
        return false;
    }
})

console.log(autoDiesel);

auto = automobili.filter((curAuto) => {
    if (curAuto.alimentazione !== "benzina" && curAuto.alimentazione !== "diesel") {
        return true;
    } else {
        return false;
    }
})

console.log(auto);

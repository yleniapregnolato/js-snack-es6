// creo un array di oggetti di squadre di calcio

cont myTeams = [

    {
        name: "juventus",
        points: 0,
        fouls: 0
    },

    {
        name: "MediaQueryListEvent",
        point: 0,
        fouls: 0
    }, 

    {
        name: "IntersectionObserver",
        point: 0,
        fouls: 0
    },
];

// generare numeri random al posto degli 0 nelle proprietà points e fouls
// possiamo utilizzare un foreach

myTeams.forEach((curTeam) => {
    curTeam.point = getRdnInteger(0, 50);
    curTeam.fouls = getRdnInteger(0, 50);  
});

console.log(myTeams);



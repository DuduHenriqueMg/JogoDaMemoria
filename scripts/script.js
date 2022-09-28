const FRONT = "card_front";
const BACK = "card_back";

let teams = ['arsenal',
        'barcelona',
        'real',
        'ateltico',
        'milan',
        'intenazionale',
        'chelsea',
        'liverpool',
        'city',
        'united',];

createCardFromTeams(teams);

function createCardFromTeams(teams) {
    let cards = [];

    for (let team of teams) {
        cards.push(createPairFromTeam(team));
    }

    console.log(cards.map);
}

function createPairFromTeam(team){
    return [{
        id: createIdWithTeam(team),
        icon: team,
        flipped: false,
    },{
        id: createIdWithTeam(team),
        icon: team,
        flipped: false, 
    }]
}

function createIdWithTeam(team){
    return team + parseInt(Math.random() *1000);
}
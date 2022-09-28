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

let cards = null;

startGame();

function startGame() {
    cards =createCardFromTeams(teams);
    shuffleCards(cards);
    console.log(cards);
}

function shuffleCards(cards){
    let currentIndex = cards.length;
    let randomIndex = 0;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]
    }

}

function createCardFromTeams(teams) {
    let cards = [];

    for (let team of teams) {
        cards.push(createPairFromTeam(team));
    }

    return cards.flatMap(pair => pair);
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
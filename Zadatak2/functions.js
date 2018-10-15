class Player {
    constructor(name){
        this.name = name;
        this.health = 10; 
    }
    rechargeTime() {
        return 1000 * this.health/100;
    }
    damage() {
        return this.health/100;
    }
    criticalChance() {
        return (10 - this.health/10)
    }
    reduceHealth() {
        this.health--;
    }
}
const mainFun = (player1, player2, player3,  player4, player5) =>
{
    const activePlayer = [];
    if (player1) {
        activePlayer.push(new Player(player1));
    }
    if (player2) {
        activePlayer.push(new Player(player2));
    }
    if (player3) {
        activePlayer.push(new Player(player3));
    }
    if (player4) {
        activePlayer.push(new Player(player4));
    }
    if (player5) {
        activePlayer.push(new Player(player5));
    }
    while (activePlayer.length > 1) {
        atk(activePlayer);
    };
}
// splice mutira 
const atk = (items) => {
    const index = Math.floor(Math.random()*items.length);
    const atk = items[index];
    items.splice(index, 1);
    const indexDef = Math.floor(Math.random()*items.length);
    items[indexDef].reduceHealth();
    console.log("Igrac "+atk.name+"("+atk.health+")"+"je napao igraca "+ items[indexDef].name +"("+atk.health+")");
};

mainFun("Djomla", "Svrsak", "Gitara", "Deathless", "WolfePriest");

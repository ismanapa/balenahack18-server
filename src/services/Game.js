class Game {

    constructor(field){
        this.field = field;
        this.players = [];
    }

    addPlayer(player){
        this.players.push(player);
    }

}

module.exports = Game;
class Game {

    constructor(field){
        this.field = field;
        this.players = [];
    }

    addPlayer(player){
        this.players.push(player);
    }

    movePlayer(movement){
        const player = this.players.find((x) => x.id === movement.id); //object
        player.position.x = movement.x;
        player.position.y = movement.y;
    }
}

module.exports = Game;
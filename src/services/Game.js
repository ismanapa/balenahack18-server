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
        let isLegal = this.field.checkMovement(player, movement.move);
        if (isLegal){
            player.setPosition(movement.move);
        }
        
    }
}

module.exports = Game;
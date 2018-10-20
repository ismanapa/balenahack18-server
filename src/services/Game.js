class Game {

    constructor(field){
        this.field = field;
        this.players = [];
    }

    addPlayer(player){
        this.players.push(player);
        player.position = this.field.getFreePosition();
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
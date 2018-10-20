const uuidv1 = require('uuid/v1');

class Player {
    constructor() {
        this.id = uuidv1();
        this.color = [255, 0, 0];
        this.position = {
            x: null,
            y: null
        };
    }

    setPosition(move){
        this.position.x += move.x;
        this.position.y += move.y;
    }
}

module.exports = Player;
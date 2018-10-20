const uuidv1 = require('uuid/v1');

class Player {
    constructor() {
        this.id = uuidv1();
        this.color = [255, 0, 0];
        this.position = {x: 0, y: 1};
    }

    setPosition(move){
        const newX = this.position.x + move.x;
        const newY = this.position.y + move.y;

        if (newX > 0 || newY > 0) {
            this.position.x += move.x;
            this.position.y += move.y;
        }

    }
}

module.exports = Player;
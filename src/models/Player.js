const uuidv1 = require('uuid/v1');

class Player {
    constructor() {
        this.id = uuidv1();
        this.color = [255, 0, 0];
        this.position = {x: 0, y: 1};
    }
}

module.exports = Player;
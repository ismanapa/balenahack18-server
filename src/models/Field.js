class Field{
    constructor(rows, columns){
        this.rows = rows;
        this.columns = columns;
    }

    checkMovement(player, move){
        const newX = player.position.x + move.x;
        const newY = player.position.y + move.y;

        if (newX < 0 || newY < 0) {
            return false;
        }
        if (newX > this.rows || newY > this.columns){
            return false;
        }

        return true;
    }
}

module.exports = Field;
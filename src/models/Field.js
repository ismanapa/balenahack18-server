class Field{
    constructor(rows, columns){
        this.rows = rows;
        this.columns = columns;
        
        this.field = [];

        for (let i = 0; i < this.rows; i++) {
            let row = [];
            for (let j = 0; j < this.columns; j++) {
                row.push(true);        
            }
            this.field.push(row);
        }
    }

    getFreePosition(){

        let x = Math.floor(Math.random() * (this.rows));
        let y = Math.floor(Math.random() * (this.columns));

        while (this.field[y][x] === false) {
            x = Math.floor(Math.random() * (this.rows));
            y = Math.floor(Math.random() * (this.columns));
        }

        this.field[y][x] = false;

        return { x, y };
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
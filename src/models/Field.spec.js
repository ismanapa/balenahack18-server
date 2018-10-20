const Field = require('./Field');

describe('Field', () => {
    it('Should add player with new position', () => {
        const xMax = 2;
        const yMax = 2;
        
        const field = new Field(xMax, yMax);

        field.field[0][0] = false;
        field.field[0][1] = false;
        field.field[1][0] = false;

        const positionGenerated = field.getFreePosition();

        expect(positionGenerated.x).toBeGreaterThanOrEqual(1);
        expect(positionGenerated.y).toBeGreaterThanOrEqual(1);
    });
});
const Game = require('./Game');
const Field = require('../models/Field');
const Player = require('../models/Player');



describe('Game', () => {

    it('Should add player', () => {
        const field = new Field(8, 8);
        const game = new Game(field);

        const player = new Player();
        game.addPlayer(player);
        
        expect(game.players[0].id).toBe(player.id);
    });

    it('Should move player', () => {
        const field = new Field(8, 8);
        const game = new Game(field);

        const player = new Player();
        player.position.x = 0;
        player.position.y = 0;

        const movement = {
            id: player.id,
            x: +1,
            y: +1
        };

        game.addPlayer(player);
        game.movePlayer(movement);

        expect(game.players[0].position.x).toBe(1);
        expect(game.players[0].position.y).toBe(1);

    });
});
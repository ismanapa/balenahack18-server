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
        player.position.x = 1;
        player.position.y = 2;

        const movement = {
            id: player.id,
            move: {
                x: +1,
                y: +1
            }
        };

        game.addPlayer(player);
        game.movePlayer(movement);

        expect(game.players[0].position.x).toBe(2);
        expect(game.players[0].position.y).toBe(3);
    });

    it('Should move player and check field limits', () => {
        const field = new Field(8, 8);
        const game = new Game(field);

        const player = new Player();
        player.position.x = 0;
        player.position.y = 0;

        const movement = {
            id: player.id,
            move: {
                x: -1,
                y: 0
            }
        };

        game.addPlayer(player);
        game.movePlayer(movement);

        expect(game.players[0].position.x).toBe(0);
        expect(game.players[0].position.y).toBe(0);
    });

    it('Should move player and check field limits at the top', () => {
        const field = new Field(2, 2);
        const game = new Game(field);

        const player = new Player();
        player.position.x = 1;
        player.position.y = 2;

        const movement = {
            id: player.id,
            move: {
                x: 0,
                y: 1
            }
        };

        game.addPlayer(player);
        game.movePlayer(movement);

        expect(game.players[0].position.x).toBe(1);
        expect(game.players[0].position.y).toBe(2);
    });
});
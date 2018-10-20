var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const Player = require('./models/Player');
const events = require('./models/Events');
const Game = require('./services/Game');
const Field = require('./models/Field');

// app.get('/', function(req, res){
//  res.sendFile(__dirname + '/index.html');
// });

const field = new Field(7, 7);

const game = new Game(field);

io.on('connection', function(client){
   
    /*
    1 - Usuario conectado
    2 - Generamos id aleatorio
    3 - Generamos color aleatorio
    4 - Generamos pos aletatorio (habra que tener en cuenta que no existe nadie en esa pos)
    */
    const newPlayer = new Player();
    game.addPlayer(newPlayer);

    console.log('User Conected', newPlayer.id);

    client.emit(events.emit.start, newPlayer);
    io.sockets.emit(events.emit.update, game.players);

    client.on(events.on.move, (movement) => {
        
        game.movePlayer(movement);
        console.log('Player moved', movement)
        io.sockets.emit(events.emit.update, game.players);
        console.log('Positions sent', game.players)
    });


 });

http.listen(8000, function(){
 console.log('listening on *:8000');
});
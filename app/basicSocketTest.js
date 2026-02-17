const express = require("express");
const http = require("http");
const path = require("path");
const {Server} = require("socket.io")

const {cardFactory} = require("./server-side-game/card.js");
const {Amalgamation} = require("./server-side-game/amalgamation.js");
const {Player} = require("./server-side-game/player.js");
const {Game} = require("./server-side-game/game.js");


const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, resp)=>{
    resp.sendFile(path.join(__dirname, "public", "test.html"));
});

const logCard = cardFactory("log", "material");
const swordCard = cardFactory("sword", "material");

io.on("connection", (socket)=>{
    const player = new Player();
    
    for (let i = 0; i < 10; i++) {
        player.addToPersonalDeck(logCard)
    }

    console.log('A user connected');

    socket.on("personal-draw", () => {
        let {card, cardKey} = player.drawFromPersonalDeck();
        if (card) {
           card = card.getAll(); 
            socket.emit("personal-draw", {card, cardKey}); 
        }
    })

    socket.on("global-draw", () => {
        let {card, cardKey} = player.drawFromExternal(swordCard);
        if (card) {
            card = card.getAll(); 
            socket.emit("personal-draw", {card, cardKey});
        }
    })


    // socket.on('message', (data) => {
    //     console.log('Message received:', data);
    //     io.emit('message', data); // Broadcast to all clients
    // });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
})

server.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`);
})



const socket = io();

function createCard(data) {
    const parent = document.querySelector("#hand-container")
    const template = document.querySelector("#hand-card-template");

    const clone = template.content.cloneNode(true);
    const li = clone.querySelector("li")
    li.dataset.cardKey = data.cardKey
    const h1 = clone.querySelector(".title")
    h1.textContent = data.card.name;
    parent.appendChild(li);


}
document.addEventListener("DOMContentLoaded", ()=>{

    

    socket.on('connect', () => {
        console.log('Connected to server');
    });

    // // Send a message
    // socket.emit('message', 'Hello World');

    // // Receive a message
    // socket.on('message', (data) => {
    //     console.log('Message from server:', data);
    // });

    const personalDeckDrawBtn = document.querySelector("#draw-personal");
    personalDeckDrawBtn.addEventListener("click", (e)=>{
        socket.emit("personal-draw");
    })

    socket.on("personal-draw", (data) => {
        console.log(data)
        createCard(data);
    })

    const globalDeckDrawBtn = document.querySelector("#draw-global");
    globalDeckDrawBtn.addEventListener("click", (e)=>{
        socket.emit("global-draw");
    })

    socket.on("global-draw", (data) => {
        console.log(data)
        createCard(data);
    })

    socket.on("disconnect", (reason) => {
        alert("Disconnect!")
    })
    
});
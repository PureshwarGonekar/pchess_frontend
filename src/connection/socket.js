import io from 'socket.io-client'

const socket = io('https://stone-lime-vise.glitch.me/')
console.log(socket)

var mySocketId
// register preliminary event listeners here:


socket.on("createNewGame", statusUpdate => {
    console.log("A new game has been created! Username: " + statusUpdate.userName + ", Game id: " + statusUpdate.gameId + " Socket id: " + statusUpdate.mySocketId)
    mySocketId = statusUpdate.mySocketId
})

export {
    socket,
    mySocketId
}

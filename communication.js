/* DO NOT MODIFY THIS FILE */

const socket = new WebSocket('wss://tres-abilities-server.glitch.me');

//Event listener for incoming messages FROM websocket server
socket.onmessage = ({ data }) => {
  handleMessage(data);
}
/* DO NOT MODIFY THIS FILE */

const socket = new WebSocket('wss://https://tres-abilities-server.glitch.me');

//Event listener for incoming messages FROM websocket server
socket.onmessage = ({ data }) => {
  handleMessage(data);
}
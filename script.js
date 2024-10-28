//Create Game Button
function createGame() {
  document.getElementById("createGame").style = "display: block;";
  document.getElementById("joinGame").style = "display: none;";
}

//Join Game Button
function joinGame() {
  document.getElementById("createGame").style = "display: none;";
  document.getElementById("joinGame").style = "display: block;";
}

//Enter the code, and press "Join"
function joinTheGame() {
  let code = document.getElementById("enterCode").value;

  let data = {
    "type": "join",
    "code": code
  }
  
  socket.send(JSON.stringify(data));
}

//Set up the game, and press "Create"
function createTheGame() {
  let players = parseInt(document.getElementById("players").value);

  let data = {
    "type": "create",
    "players": players
  }

  socket.send(JSON.stringify(data));
}

/**
 * This function is called when a message is received from the server.
 */
function handleMessage(message) {
  console.log(message);
}
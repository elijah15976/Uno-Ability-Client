//Server-side
//https://glitch.com/edit/#!/tres-abilities-server

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

  //When a user joins a room
  if(message.includes("Code: ")){
    let code = message.substring(message.indexOf("Code: ") + 6);
    let build = `<p>Waiting (${code})...</p>`;

    document.getElementById("joinGame").style = "display: block;";
    document.getElementById("createGame").style = document.getElementById("joinGame").style;

    document.getElementById("create").setAttribute("disabled", "");
    document.getElementById("join").setAttribute("disabled", "");

    let preppers = document.getElementsByClassName("prep");
    for(let i = 0; i < preppers.length; i++) {
      let element = preppers[i];
      element.innerHTML = build;
    }
  }
  //Room code cannot be found on server-side
  else if(message == "Room not found"){
    alert("Room not found");
  }

  //Game is starting
  else if(message.includes("Game Start: ")){
    let code = message.substring(12);

    sessionStorage.setItem("code", code);

    window.location.href = "/game.html";
  }
}
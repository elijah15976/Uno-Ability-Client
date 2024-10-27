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

  console.log(code);
}
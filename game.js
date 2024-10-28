function init(){
  let gameCode;
  try{
    gameCode = sessionStorage.getItem("code");
  }
  catch(e){
    window.location.href = "/";
  }

  let data = {
    "type": "joinRoom",
    "code": gameCode
  }
  
  socket.send(JSON.stringify(data));
}

function handleMessage(message) {
  console.log(message);
  if(message == "Connection Secured"){
    init();
  }
}
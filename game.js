/**
 * Resources:
 *
 * https://www.codemahal.com/make-2d-game-javascript
 */

//Game element on webpage
var gameCanvas = document.querySelector("canvas");

gameCanvas.width = (window.innerHeight * (16 / 9) < window.innerWidth) ? window.innerHeight * (16 / 9) * 0.9 : window.innerWidth * 0.9;
gameCanvas.height = (window.innerHeight * (16 / 9) < window.innerWidth) ? window.innerHeight * 0.9 : window.innerWidth * (9 / 16) * 0.9;
var ctx = gameCanvas.getContext("2d");

//Images
var background;
var numberCards = [];
var specialCards = [];

function init() {
  let gameCode;
  try {
    gameCode = sessionStorage.getItem("code");
  }
  catch (e) {
    //window.location.href = "/";
  }

  let data = {
    "type": "joinRoom",
    "code": gameCode
  }

  socket.send(JSON.stringify(data));
}

/**
 * Communication Handler
 */
function handleMessage(message) {
  console.log(message);
  if (message == "Connection Secured") {
    load();
    init();
  }
}

/**
 * Game Logic
 */
function load() {
  /**
   * Number cards are in labeled as is
   *
   * Colors:
   * 
   * Red = 0
   * Yellow = 1
   * Green = 2
   * Blue = 3
   */
  for (let i = 0; i < 4; i++) {
    let temp = [];
    for (let j = 0; j < 10; j++) {
      let card = new Image();
      card.src = `/Assets/Cards/Number/${i}-${j}.jpg`;
      temp.push(card);
    }
    numberCards.push(temp);
  }

  /**
   * Special Cards are numbers assigned to each type
   *
   * drawTwo = 0
   * reverse = 1
   * skip = 2
   *
   * Wild Cards are different
   *
   * drawFour = 0
   * wild = 1
   * 
   * Colors:
   * 
   * Red = 0
   * Yellow = 1
   * Green = 2
   * Blue = 3
   * Wild = 4
   */
  for (let i = 0; i < 5; i++) {
    let temp = [];
    for (let j = 0; j < 3; j++) {
      if (i == 4) {
        break;
      }
      let identifier = "";
      switch (j) {
        case 0:
          identifier = "drawTwo";
          break;
        case 1:
          identifier = "reverse";
          break;
        case 2:
          identifier = "skip";
          break;
      }
      let card = new Image();
      card.src = `/Assets/Cards/Special/${i}-${identifier}.jpg`;
      temp.push(card);
    }
    if (i == 4) {
      temp.push(new Image());
      temp[0].src = `/Assets/Cards/Special/drawFour.jpg`;
      temp.push(new Image());
      temp[1].src = `/Assets/Cards/Special/wild.jpg`;
    }
    specialCards.push(temp);
  }


  /**
   * Load background image
   */
  background = new Image();
  background.src = "/Assets/background.jpg";

  background.onload = () => {
    drawBackground();
  }
}

function drawBackground() {
  ctx.drawImage(background, 0, 0, gameCanvas.width, gameCanvas.height);
}
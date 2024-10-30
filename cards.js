class Card {
  constructor(color, value) {
    //Red = 0
    //Yellow = 1
    //Green = 2
    //Blue = 3
    this.color = color;

    if (value == "reverse" || value == "skip" || value == "drawTwo" || value == "drawFour" || value == "wild") {
      this.special = true;
    }
    else {
      this.special = false;
    }
    
    this.value = value;

    this.flipped = false;
  }

  flip() {
    this.flipped = !this.flipped;
  }
}                         
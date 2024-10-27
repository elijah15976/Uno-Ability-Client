class Card {
  constructor(color, value) {
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
export default class Ball {
  #x;

  #y;

  #xs;

  #ys;

  constructor(x, y, xs, ys) {
    this.#x = x;
    this.#y = y;
    this.#xs = xs;
    this.#ys = ys;
  }

  move = () => {
    this.#x += this.#xs;
    this.#y += this.#ys;
    this.#ys += 0.1;
    this.#xs *= 0.999;
    this.ys *= 0.999;
    if (this.#y > 480) {
      this.#ys *= -1;
      this.#y = 480;
    }
    if (this.#x > 480) {
      this.#xs *= -1;
      this.#x = 480;
    }
    if (this.#x < 20) {
      this.#xs *= -1;
      this.#x = 20;
    }
  };

  display = (p5) => {
    p5.stroke(255);
    p5.strokeWeight(40);
    p5.point(this.#x, this.#y);
  };
}

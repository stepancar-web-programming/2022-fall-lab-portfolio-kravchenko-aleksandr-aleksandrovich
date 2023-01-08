export default class Boid {
  pos;

  vel;

  #r = 3;

  #cr = 80;

  #sr = 40;

  #n = 5;

  #tail = [];

  MAX_S = 4;

  GROUP_C = 0.05;

  VEL_C = 0.1;

  SEPARATE_C = 10;

  constructor(x, y, p5) {
    this.pos = p5.createVector(x, y);
    this.vel = p5.createVector(p5.random(-6, 6), p5.random(-6, 6));
    this.vel.setMag(p5.random(2, 6));
    for (let i = 0; i < this.#n; i++) {
      this.#tail.push(p5.createVector().set(this.pos));
    }
  }

  move = (p5, boids) => {
    for (let i = this.#n - 1; i > 0; i--) {
      this.#tail[i].set(this.#tail[i - 1]);
    }
    this.#tail[0].set(this.pos);

    let nc = 0;
    let sc = 0;
    const csum = new p5.createVector();
    const asum = new p5.createVector();
    const ssum = new p5.createVector();

    for (const boid of boids) {
      if (boid !== this) {
        const dist = p5.createVector().set(this.pos).sub(boid.pos).magSq();
        if (dist < this.#cr * this.#cr) {
          nc++;
          csum.add(boid.pos);
          asum.add(boid.vel);
          if (dist < this.#sr * this.#sr) {
            sc++;
            ssum.add(p5.createVector().set(this.pos).sub(boid.pos).normalize()
              .div(p5.sqrt(dist)));
          }
        }
      }
    }
    if (nc > 0) {
      csum.div(nc).sub(this.pos);
      const d = csum.mag();
      if (d < 100) {
        csum.mult(this.MAX_S * 0.01);
      } else {
        csum.mult(this.MAX_S);
      }
      csum.limit(this.MAX_S);
      asum.div(nc);
    }
    asum.limit(this.MAX_S);
    if (sc > 0) ssum.div(sc);

    this.vel.add(csum.mult(this.GROUP_C))
      .add(asum.mult(this.VEL_C))
      .add(ssum.mult(this.SEPARATE_C));

    this.vel.limit(this.MAX_S);
    this.pos.add(this.vel);

    if (this.pos.x > 510) {
      this.pos.x = -10;
      // if(this.vel.x>0)
      // this.vel.x*=-1;
    }
    if (this.pos.y > 510) {
      this.pos.y = -10;
      // if(this.vel.y>0)
      // this.vel.y*=-1;
    }
    if (this.pos.x < -10) {
      this.pos.x = 510;
      // if(this.vel.x<0)
      // this.vel.x*=-1;
    }
    if (this.pos.y < -10) {
      this.pos.y = 510;
      // if(this.vel.y<0)
      // this.vel.y*=-1;
    }
  };

  display = (p5) => {
    const { x } = this.pos;
    const { y } = this.pos;
    p5.stroke(255, 255, 255);
    p5.strokeWeight(this.#r * 2);
    p5.point(x, y);

    // tail
    const pp = p5.createVector(this.pos);
    let tr = this.#r * 2;
    for (const p of this.#tail) {
      p5.stroke(255);
      p5.strokeWeight(tr);
      tr -= 1;
      if ((p5.abs(pp.x - p.x) < 250) && (p5.abs(pp.y - p.y) < 250)) {
        p5.line(pp.x, pp.y, p.x, p.y);
      }
      pp.set(p);
    }
  };
}

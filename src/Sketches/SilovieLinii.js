import React, { Component } from "react";
import Sketch from "react-p5";

let particles = [];
let num = 4;
class Particle {
    pos;
    z;
    vel;
    acc;
    r = 20;
    stat = false;
    constructor(x, y, p5) {
        this.pos = p5.createVector(x, y);
        this.vel = p5.createVector(p5.random(-1, 1), p5.random(-1, 1)).setMag(p5.random(0, 1));
        this.z = p5.random(4, 14) * (p5.random(-1, 1) > 0 ? 1 : -1);
        this.acc = p5.createVector(0, 0);
    }

    move = (p5) => {
        this.pos.add(this.vel.mult(0.999));
        this.pos.set((this.pos.x + 500 + 3 * this.r) % (500 + 2 * this.r) - this.r, (this.pos.y + 500 + 3 * this.r) % (500 + 2 * this.r) - 1 * this.r);
        this.vel.add(this.acc);
        let tacc = p5.createVector(0, 0);
        for (let part of particles) {
            if (part !== this) {
                let differ = p5.createVector().set(part.pos).sub(this.pos);
                let mag = differ.mag();
                tacc.add(part.findE(this.pos, p5).mult(this.z));
                if (mag < 2 * this.r) {
                    tacc.mult(0);
                    this.pos.add(differ.setMag(mag - 2 * this.r));
                }
            }
        }
        this.acc.set(tacc.mult(0.5));
    }

    drawPoint = (p5) => {
        if (this.z > 0) {
            p5.stroke(255, 0, 0);
        } else {
            p5.stroke(150);
        }
        p5.strokeWeight(2 * this.r);
        p5.point(this.pos.x, this.pos.y);
    }

    drawLines = (p5) => {
        if (this.z > 0) {
            for (let fi = 0; fi < p5.TWO_PI; fi += p5.PI * 0.08) {
                let line = p5.createVector(this.r * p5.cos(fi), this.r * p5.sin(fi));
                let dpos = p5.createVector().add(this.pos);
                let ddpos = p5.createVector().add(this.pos);
                for (let l = 0; l < 400; l++) {
                    let E = p5.createVector();

                    dpos.add(line);

                    p5.strokeWeight(1);
                    p5.stroke(255, 0, 0);
                    if (l > 0) {
                        p5.line(ddpos.x, ddpos.y, dpos.x, dpos.y);
                    }
                    for (let particle of particles) {

                        let tmp = p5.createVector().set(dpos);
                        if (tmp.sub(particle.pos).mag() < this.r / 2 && particle !== this) {
                            l = 3000;
                            break;
                        }
                        E.add(particle.findE(dpos, p5));
                    }

                    line = E.setMag(4);
                    ddpos.set(dpos);
                }
            }
        }
    }

    findE = (pos1, p5) => {
        let e = p5.createVector();
        let diag = e.add(pos1).sub(this.pos);
        return diag.setMag(this.z / (diag.magSq()));
    }
}
export default class SilovieLinii extends Component {

    setup = (p5, parent) => {
        p5.createCanvas(500, 500).parent(
            parent
        );
        for (let i = 0; i < num; i++) {
            particles.push(new Particle(p5.random(0, 500), p5.random(0, 500), p5));
        }
    };
    draw = p5 => {
        p5.background(0);
        for (let particle of particles) {
            particle.move(p5);
            particle.drawLines(p5);
        }
        for (let particle of particles) {
            particle.drawPoint(p5);
        }
    };

    render() {
        return <Sketch width="600px" setup={this.setup} draw={this.draw} />;
    }
}

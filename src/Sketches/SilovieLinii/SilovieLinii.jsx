import React, { Component } from 'react';
import Sketch from 'react-p5';

import Particle from './Particle';

const particles = [];
const num = 4;

export default class SilovieLinii extends Component {
  setup = (p5, parent) => {
    p5.createCanvas(500, 500).parent(
      parent
    );
    for (let i = 0; i < num; i++) {
      particles.push(new Particle(p5.random(0, 500), p5.random(0, 500), p5));
    }
  };

  draw = (p5) => {
    p5.background(0);
    for (const particle of particles) {
      particle.move(p5, particles);
      particle.drawLines(p5, particles);
    }
    for (const particle of particles) {
      particle.drawPoint(p5);
    }
  };

  render() {
    return <Sketch width="600px" setup={this.setup} draw={this.draw} />;
  }
}

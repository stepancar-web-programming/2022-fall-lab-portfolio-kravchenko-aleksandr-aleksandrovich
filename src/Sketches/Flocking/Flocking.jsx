import React, { Component } from 'react';
import Sketch from 'react-p5';

import Boid from './Boid';

const boids = [];

export default class Flocking extends Component {
  NUMBER_OF_BOIDS = 20;

  setup = (p5, parent) => {
    p5.createCanvas(500, 500).parent(
      parent
    );
    for (let i = 0; i < this.NUMBER_OF_BOIDS; i++) {
      boids.push(new Boid(p5.random(0, 500), p5.random(0, 500), p5));
    }
  };

  draw = (p5) => {
    p5.background(166, 143, 210);
    for (const boid of boids) {
      boid.move(p5, boids);
      boid.display(p5);
    }
  };

  render() {
    return <Sketch width="600px" setup={this.setup} draw={this.draw} />;
  }
}

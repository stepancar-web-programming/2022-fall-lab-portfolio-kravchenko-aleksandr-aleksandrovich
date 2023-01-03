import React, { Component } from 'react';
import Sketch from 'react-p5';

import Ball from './Ball';

export default class BouncyBall extends Component {
  #ball;

  setup = (p5, parent) => {
    p5.createCanvas(500, 500).parent(
      parent
    );
    this.#ball = new Ball(250, 250, 7, -5);
  };

  draw = (p5) => {
    p5.background(0);
    this.#ball.move();
    this.#ball.display(p5);
  };

  render() {
    return <Sketch width="600px" setup={this.setup} draw={this.draw} />;
  }
}

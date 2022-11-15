import React, { Component } from "react";
import Sketch from "react-p5";
class Ball {
  x;
  y;
  xs;
  ys;
  constructor(x,y,xs,ys){
    this.x = x;
    this.y = y;
    this.xs = xs;
    this.ys = ys;
  }
  move = () => {
    this.x+=this.xs;
    this.y+=this.ys;
    this.ys+=0.1;
    this.xs*=0.999;
    this.ys*=0.999;
    if(this.y>480){
      this.ys*=-1;
      this.y = 480;
    }
    if(this.x>480){
      this.xs*=-1;
      this.x = 480;
    }
    if(this.x<20){
      this.xs*=-1;
      this.x = 20;
    }
  }

  display = (p5) => {
    p5.stroke(255);
    p5.strokeWeight(40);
    p5.point(this.x, this.y);
  }
}
export default class BouncyBall extends Component {
  ball;
  setup = (p5, parent) => {
    p5.createCanvas(500, 500).parent(
      parent
    );
    this.ball = new Ball(250, 250, 7, -5);
  };
  draw = p5 => {
    p5.background(0);
    this.ball.move();
    this.ball.display(p5);
  };

  render() {
    return <Sketch width="600px" setup={this.setup} draw={this.draw} />;
  }
}

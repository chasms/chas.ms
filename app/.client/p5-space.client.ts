import P5 from "p5";
import { createEasyCamCreator } from "./p5EasyCam.client.js";

interface EasyCamOptions {
  distance: number;
}

interface P5WithEasyCam extends P5 {
  createEasyCam: (easyCamOptions: EasyCamOptions) => void;
}
type SketchCleanup = { cleanup: () => void };

export const p5SpaceInstance = (): SketchCleanup => {
  const p5sketch = (p5: P5WithEasyCam) => {
    const createEasyCam = createEasyCamCreator(p5);

    const stars: Star[] = [];

    p5.setup = () => {
      const size = 5000;
      p5.createCanvas(
        window.innerWidth - 20,
        window.innerHeight - 20,
        p5.WEBGL,
      );
      p5.setAttributes("antialias", true);
      createEasyCam({ distance: size });
      setupStars(size);
    };

    p5.draw = () => {
      p5.background(0);
      drawEarth();
      stars.forEach((star) => star.display());
    };

    function setupStars(size: number) {
      Array.from(Array(size)).forEach(() => {
        stars.push(new Star(size));
      });
    }

    class Star {
      size: number;
      x: number;
      y: number;
      z: number;
      color: P5.Color;
      display: () => void;

      constructor(size: number) {
        this.size = p5.random(0.1, 10);
        this.x = p5.random(-size, size);
        this.y = p5.random(-size, size);
        this.z = p5.random(-size, size);
        this.color = p5.color(
          p5.random(0, 255),
          p5.random(0, 255),
          p5.random(0, 255),
          p5.random(25, 100),
        );

        this.display = function () {
          p5.push();
          p5.fill(this.color);
          p5.stroke(this.color);
          // noStroke();
          p5.translate(this.x, this.y, this.z);
          p5.sphere(this.size);
          p5.pop();
        };
      }
    }

    function drawEarth() {
      p5.push();
      p5.colorMode(p5.HSB);
      p5.fill(255, 204, 100);
      p5.noStroke();
      p5.sphere(10);
      p5.pop();
    }
  };

  const p5Runtime = new P5(p5sketch);

  return {
    cleanup: p5Runtime.remove,
  };
};

import { Character } from "./character";

export class Bots extends Character {
  constructor(
    image: HTMLImageElement,
    x: number,
    y: number,
    spriteWidth: number,
    spriteHeight: number,
    width: number,
    height: number
  ) {
    super(image, x, y, spriteWidth, spriteHeight, width, height);
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.currentAnimation) {
      const frame = this.currentAnimation.getFrame();
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(
        this.image,
        frame.x,
        frame.y,
        this.spriteWidth,
        this.spriteHeight,
        -this.x,
        this.y,
        this.width,
        this.height
      );
      ctx.strokeStyle = "red";
      ctx.lineWidth = 2;
      ctx.strokeRect(-this.x, this.y, this.width, this.height);
      ctx.restore();
    }
  }
}

import { botChoose } from "../main";
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

  /**
   * Draw the bot flipped horizontally.
   * @param ctx The CanvasRenderingContext2D to draw on.
   */
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
        -this.x, // Draw position adjusted for flip
        this.y,
        this.width,
        this.height
      );
      ctx.restore();
    }
  }

  /**
   * Draw the bot facing the direction of botChoose.
   * @param ctx The CanvasRenderingContext2D to draw on.
   */
  draw2(ctx: CanvasRenderingContext2D) {
    if (this.currentAnimation) {
      const frame = this.currentAnimation.getFrame();
      ctx.drawImage(
        this.image,
        frame.x,
        frame.y,
        this.spriteWidth,
        this.spriteHeight,
        botChoose.x - botChoose.width,
        botChoose.y,
        this.width,
        this.height
      );
    }
  }
}

import { player } from "../main";
import { AnimationSprite } from "./sprite";

export class Character {
  private animations: { [key: string]: AnimationSprite } = {};
  private currentAnimation: AnimationSprite | null = null;
  public state: string = "stand";

  constructor(
    public image: HTMLImageElement,
    public x: number,
    public y: number,
    public spriteWidth: number,
    public spriteHeight: number,
    public width: number,
    public height: number
  ) {}
  /**
   * performs animation using sprites
   * @param name state
   * @param frames size of sprite
   * @param fraeRate frame rate for animation
   */
  loadAnimation(
    name: string,
    frames: { x: number; y: number }[],
    frameRate: number
  ) {
    this.animations[name] = new AnimationSprite(frames, frameRate);
  }

  /**
   *
   * @param name  animation name
   */
  setAnimation(name: string) {
    this.currentAnimation = this.animations[name];
  }
  /**
   *
   * @param state set sprite state like walk, attack
   */
  setState(state: string) {
    this.state = state;
    this.setAnimation(state);
  }
  /**
   * for update the game
   * @param deltaTime to set animation time
   */
  update(deltaTime: number) {
    if (this.currentAnimation) {
      this.currentAnimation.update(deltaTime);
    }
  }
  /**
   *
   * @param ctx for draw image
   */
  draw(ctx: CanvasRenderingContext2D) {
    if (this.currentAnimation) {
      const frame = this.currentAnimation.getFrame();
      ctx.drawImage(
        this.image,
        frame.x,
        frame.y,
        this.spriteWidth,
        this.spriteHeight,
        this.x,
        this.y,
        this.width,
        this.height
      );
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
  }
  draw2(ctx: CanvasRenderingContext2D) {
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
        player.y,
        this.width,
        this.height
      );
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.strokeRect(this.x, this.y, this.width, this.height);
      ctx.restore();
    }
  }
}

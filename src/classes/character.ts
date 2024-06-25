import { player } from "../main";
import { AnimationSprite } from "./sprite";

export class Character {
  private animations: { [key: string]: AnimationSprite } = {};
  public currentAnimation: AnimationSprite | null = null;
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
   * Loads animation frames into the character's animations dictionary.
   * @param name of the animation state
   * @param frames  Array of frame coordinates {x, y}.
   * @param fraeRate Frame rate for the animation.
   */
  loadAnimation(
    name: string,
    frames: { x: number; y: number }[],
    frameRate: number
  ) {
    this.animations[name] = new AnimationSprite(frames, frameRate);
  }

  /**
   *Sets the current animation for the character.
   * @param name  animation name
   */
  setAnimation(name: string) {
    this.currentAnimation = this.animations[name];
  }

  /**
   * Sets the state of the character and updates the current animation.
   * @param state set sprite state (eg."Walk", "attack")
   */
  setState(state: string) {
    this.state = state;
    this.setAnimation(state);
  }

  /**
   * Updates the characters current animation frame based on deltaTime.
   * @param deltaTime The time difference since the last update.
   */
  update(deltaTime: number) {
    if (this.currentAnimation) {
      this.currentAnimation.update(deltaTime);
    }
  }

  /**
   * For draw image
   * @param ctx ctx The CanvasRenderingContext2D to draw on.
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

  /**
   * Draws the character flipped horizontally relative to the players position.
   * @param ctx The CanvasRenderingContext2D to draw on.
   */
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
        -player.x - player.width,
        player.y,
        this.width,
        this.height
      );
    }
  }
}

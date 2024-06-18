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
  update(deltaTime: number) {
    if (this.currentAnimation) {
      this.currentAnimation.update(deltaTime);
    }
  }
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
      // ctx.strokeStyle = "black";
      // ctx.lineWidth = 2;
      // ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
  }
}

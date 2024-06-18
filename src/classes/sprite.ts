/**
 *  Represents an animated sprite that cycles through frames.
 */

export class AnimationSprite {
  private frames: { x: number; y: number }[];
  private currentFrame: number;
  private frameRate: number; // time interval
  private elapsedTime = 0; // since last frame change
  constructor(frames: { x: number; y: number }[], frameRate: number) {
    this.frames = frames;
    this.frameRate = frameRate;
    this.currentFrame = 0;
    this.elapsedTime = 0;
  }

  update(deltaTime: number) {
    this.elapsedTime += deltaTime;
    if (this.elapsedTime >= this.frameRate) {
      this.currentFrame = (this.currentFrame + 1) % this.frames.length;
      this.elapsedTime = 0;
    }
  }

  // retrieve current frame
  getFrame() {
    return this.frames[this.currentFrame];
  }
}

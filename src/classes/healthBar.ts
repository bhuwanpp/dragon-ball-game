import { canvasWidth } from "../constants/game";
import { redValue } from "../constants/health";
export let gameOver: boolean = false;

export function changeGameOver() {
  gameOver = false;
}

// health bar class
export class HealthBar {
  private x: number;
  private y: number;
  private w: number;
  private h: number;
  private maxHealth: number;
  private maxWidth: number;
  private health: number;
  private color: string;

  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    maxHealth: number,
    color: string
  ) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.maxHealth = maxHealth;
    this.maxWidth = w;
    this.health = maxHealth;
    this.color = color;
  }

  /**
   * Draws the health bar on the canvas.
   * @param ctx The CanvasRenderingctx2D to draw on.
   */
  public show(ctx: CanvasRenderingContext2D): void {
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#333";
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.strokeRect(this.x, this.y, this.maxWidth, this.h);
    ctx.fillStyle = "red";
    ctx.font = "30px Teko";
    ctx.fillText("Ki bar", 30, 38);
    ctx.font = "30px Teko";
    ctx.fillText("Ki bar", canvasWidth - 100, 38);
  }

  /**
   * Updates the health value of the health bar.
   * @param val The new health value.
   */
  public updateHealth(val: number): void {
    if (val < redValue) {
      this.color = "red";
    }
    if (val > redValue) {
      this.color = "green";
    }
    if (val <= 0) {
      gameOver = true;
    }

    if (val >= 0) {
      this.health = val;
      this.w = (this.health / this.maxHealth) * this.maxWidth;
    }
  }
}

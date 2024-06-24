import { canvasWidth } from "../constants/game";
import { redValue } from "../constants/health";
export let gameOver: boolean = false;
export function changeGameOver() {
  gameOver = false;
}
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
   *
   * @param context for fillText and fillStroke
   */

  public show(context: CanvasRenderingContext2D): void {
    context.lineWidth = 4;
    context.strokeStyle = "#333";
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.w, this.h);
    context.strokeRect(this.x, this.y, this.maxWidth, this.h);
    context.fillStyle = "red";
    context.font = "30px Teko";
    context.fillText("Ki bar", 30, 38);
    context.font = "30px Teko";
    context.fillText("Ki bar", canvasWidth - 100, 38);
  }
  /**
   *
   * @param val for  health status bar
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

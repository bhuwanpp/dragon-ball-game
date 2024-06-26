import { canvasHeight, canvasWidth } from "../constants/game";
import { gameSprite } from "../images/preload";

export function drawBackground(ctx: CanvasRenderingContext2D) {
  ctx.drawImage(gameSprite.background, 0, 0, canvasWidth, canvasHeight);
}
export function drawBackgroundFirst(ctx: CanvasRenderingContext2D) {
  ctx.drawImage(gameSprite.backgroundFirstL, 0, 0, canvasWidth, canvasHeight);
}
export function drawBackgroundSecond(ctx: CanvasRenderingContext2D) {
  ctx.drawImage(gameSprite.backgroundSecondL, 0, 0, canvasWidth, canvasHeight);
}

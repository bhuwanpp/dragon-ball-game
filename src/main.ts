import "./style.css";
import { goku } from "./characters/goku";
import { blast, finalFlash, kamehame, smallAttack } from "./effects/kagehame";
import {
  botFunction,
  final,
  gameLoop,
  healthBarHero,
  healthBarVillain,
  healthHero,
  healthVillan,
} from "./gameloop";
import { vegita } from "./characters/vegeta";
import { gameOver } from "./classes/healthBar";
import { blastFunction, gameUpdate } from "./gameUpdate";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

export const ctx = canvas.getContext("2d")!;

// let lastTime = performance.now();
let isGameRunning = true;

const nextLevelWidth = 200;
const nextLevelHeight = 50;

let lastTime = 0;
const FPS = 60;
const Frame_duriation = 1000 / FPS;

/**
 *Update all the game
 * @param currentTime Get from request animation frame
 */

function updateGame(currentTime: number) {
  const deltaTime = currentTime - lastTime;
  if (deltaTime < Frame_duriation) {
    requestAnimationFrame(updateGame);
    return;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // lastTime = currentTime;
  lastTime = currentTime - (deltaTime % Frame_duriation);

  goku.update(deltaTime);
  kamehame.update(deltaTime);
  blast.update(deltaTime);
  vegita.update(deltaTime);

  goku.draw(ctx);
  vegita.draw(ctx);
  smallAttack.draw(ctx);
  smallAttack.draw(ctx);
  finalFlash.draw(ctx);

  if (final) {
    kamehame.draw(ctx);
    blast.draw(ctx);
  }
  goku.setState("stand");
  vegita.setState("stand");

  // put delta time in game loop and boot
  gameLoop();
  botFunction();
  blastFunction();
  gameUpdate(deltaTime);
  healthBarHero.show(ctx);
  healthBarVillain.show(ctx);

  if (gameOver) {
    isGameRunning = false;
    if (healthHero <= 0) {
      ctx.font = "bold 50px Arvo";
      ctx.fillText("You Lose ", canvas.width / 2 - 110, 420);
    } else if (healthVillan <= 0) {
      ctx.font = "bold 50px Arvo ";
      ctx.fillText("You Win ", canvas.width / 2 - 110, 420);
    }
    const gameOverImg = new Image();
    gameOverImg.src = "/images/gameover.png";
    gameOverImg.onload = function () {
      ctx.drawImage(gameOverImg, canvas.width / 2 - 200, 50, 400, 400);
    };

    const nextLevel = new Image();
    nextLevel.src = "/images/next.png";
    nextLevel.onload = function () {
      ctx.drawImage(
        nextLevel,
        canvas.width / 2 - 100,
        canvas.height / 2 + 50,
        nextLevelWidth,
        nextLevelHeight
      );
    };
    canvas.addEventListener("click", handleCanvasClick);
  }

  if (isGameRunning) {
    requestAnimationFrame(updateGame);
  }
}
requestAnimationFrame(updateGame);

function handleCanvasClick(event: MouseEvent) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  if (
    x >= canvas.width / 2 - 100 &&
    x <= canvas.width / 2 - 100 + nextLevelWidth &&
    y >= canvas.height / 2 + 50 &&
    y <= canvas.height / 2 + 50 + nextLevelHeight
  ) {
    console.log("click");
  }
}

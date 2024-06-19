import "./style.css";
import { goku } from "./characters/goku";
import {
  blast,
  blastHero,
  finalFlash,
  kamehame,
  piccoloAttack,
  smallAttack,
} from "./effects/kagehame";
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
import { gameUpdate } from "./gameUpdate";
import { picolo } from "./characters/picolo";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

export const ctx = canvas.getContext("2d")!;

// player selected
export let selectedCharacter: string;

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
  canvas.style.background = "url('/images/bg.gif')";
  canvas.style.backgroundSize = "cover";
  canvas.style.backgroundRepeat = "no-repeat";
  canvas.style.backgroundPosition = "center center";

  const deltaTime = currentTime - lastTime;
  if (deltaTime < Frame_duriation) {
    requestAnimationFrame(updateGame);
    return;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  lastTime = currentTime - (deltaTime % Frame_duriation);

  ctx.font = "20px Silkscreen";
  ctx.fillText("f:👊, k :🦵 b:🚫 ", 100, 100);
  ctx.fillText("l:🔥 ", 100, 130);

  if (selectedCharacter === "goku") {
    goku.draw(ctx);
  }
  if (selectedCharacter === "piccolo") {
    picolo.draw(ctx);
  }

  goku.update(deltaTime);
  kamehame.update(deltaTime);
  blast.update(deltaTime);
  blastHero.update(deltaTime);
  vegita.update(deltaTime);
  picolo.update(deltaTime);
  // goku.draw(ctx);
  vegita.draw(ctx);
  smallAttack.draw(ctx);
  smallAttack.draw(ctx);

  finalFlash.draw(ctx);
  blastHero.draw(ctx);
  piccoloAttack.draw(ctx);

  if (final) {
    kamehame.draw(ctx);
    blast.draw(ctx);
  }
  goku.setState("stand");
  vegita.setState("stand");
  picolo.setState("stand");

  // put delta time in game loop and boot
  gameLoop();
  botFunction(deltaTime);
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

const start = document.getElementById("start");
const text = document.querySelector(".text") as HTMLDivElement;
start?.addEventListener("click", firstFunction);
canvas.style.background = "url('/images/wallpaper2.jpg')";
function firstFunction() {
  canvas.style.backgroundSize = "cover";
  canvas.style.backgroundRepeat = "no-repeat";
  canvas.style.backgroundPosition = "center center";
  text.style.display = "none";
  displayCharacterSelection();
}

const characters = [
  { name: "goku", image: "/images/gokucharacter.jpg" },
  { name: "piccolo", image: "/images/picolocharacter.jpg" },
];

function displayCharacterSelection() {
  canvas.style.background = "url('/images/wallpaper2.jpg')";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.font = "50px Silkscreen";
  ctx.fillText("Choose a character", canvas.width / 4, 110);
  // Render each character's image and name
  characters.forEach((character, index) => {
    const x = (index + 1) * 400;
    const y = canvas.height / 4;
    const img = new Image();
    img.style.cursor = "pointer";

    img.onload = function () {
      ctx.drawImage(img, x - 50, y - 50, 300, 300);
      ctx.font = "30px Silkscreen";
      ctx.fillText(character.name, x + 50, y + 300);
    };
    img.src = character.image;
  });
}

canvas.addEventListener("click", (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  characters.forEach((character, index) => {
    const charX = (index + 1) * 400;
    const charY = canvas.height / 4;
    if (
      x >= charX - 50 &&
      x <= charX + 50 + 200 &&
      y >= charY - 50 &&
      y <= charY + 50 + 200
    ) {
      selectedCharacter = character.name;

      requestAnimationFrame(updateGame);
    }
  });
});

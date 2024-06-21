import "./style.css";
import { goku } from "./characters/goku";

import {
  blast,
  blastHero,
  deathBall,
  finalFlash,
  friezaBlast,
  kamehame,
  piccoloAttack,
  piccoloBlast,
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
  nextLevelHeroHealth,
  nextLevelVillanHealth,
  resetHeroHealth,
  resetVillanHealth,
} from "./gameUpdates/gameloop";

import { vegita } from "./characters/vegeta";
import { changeGameOver, gameOver } from "./classes/healthBar";
import { gameUpdate } from "./gameUpdates/gameloop2";
import { picolo } from "./characters/picolo";
import { nextLevelHeight, nextLevelWidth } from "./contants";
import { frieza } from "./characters/frieza";
import { Bots } from "./classes/bot";
import { gameSprite } from "./images/preload";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

export const ctx = canvas.getContext("2d")!;

// player selected
export let selectedCharacter: string;

export let isGameRunning = false;

let lastTime = 0;
const FPS = 60;
const Frame_duriation = 1000 / FPS;

let isPaused = false;

let animationGame: number;

document.addEventListener("keydown", (event) => {
  // timeStamp = current
  if (event.code === "KeyP") {
    isPaused = !isPaused;
    cancelAnimationFrame(animationGame);
    if (!isPaused) {
      requestAnimationFrame(updateGame);
    }
  }
});

let botChoose: Bots;
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

  // pause

  ctx.font = "20px Silkscreen";
  ctx.fillText("f:👊, k :🦵 b:🚫 ", 10, 100);
  ctx.fillText("l:🔥 ", 10, 130);

  if (selectedCharacter === "goku") {
    goku.draw(ctx);
  }
  if (selectedCharacter === "piccolo") {
    picolo.draw(ctx);
  }
  if (nextForReset) {
    botChoose = frieza;
  } else {
    botChoose = vegita;
  }

  // character update
  picolo.update(deltaTime);
  goku.update(deltaTime);

  // botChoose draw
  botChoose.draw(ctx);
  botChoose.update(deltaTime);

  // attack
  smallAttack.draw(ctx);
  smallAttack.draw(ctx);
  blast.update(deltaTime);
  piccoloBlast.update(deltaTime);
  friezaBlast.update(deltaTime);
  blastHero.update(deltaTime);
  kamehame.update(deltaTime);
  finalFlash.draw(ctx);
  friezaBlast.draw(ctx);
  deathBall.draw(ctx);
  blastHero.draw(ctx);
  piccoloAttack.draw(ctx);

  goku.setState("stand");
  botChoose.setState("stand");
  picolo.setState("stand");

  if (final) {
    kamehame.draw(ctx);
    blast.draw(ctx);
    piccoloBlast.draw(ctx);
  }

  // put delta time in game loop and boot
  gameLoop();
  gameUpdate(deltaTime, currentTime);
  botFunction(deltaTime);

  healthBarHero.show(ctx);
  healthBarVillain.show(ctx);

  // game over
  if (gameOver) {
    isGameRunning = false;
    changeGameOver();
    GameOver();
  }

  if (changeBg) {
    canvas.style.background = "url('/images/bg2.gif')";
    canvas.style.backgroundSize = "cover";
    canvas.style.backgroundRepeat = "no-repeat";
    canvas.style.backgroundPosition = "center center";
  }
  if (!isPaused && isGameRunning) {
    animationGame = requestAnimationFrame(updateGame);
  }
}

// dom
const start = document.getElementById("start");
const text = document.querySelector(".text") as HTMLDivElement;
// canvas.style.background = "url('/images/wallpaper2.jpg')";
window.onload = () => {
  console.log("onload");
  canvas.style.backgroundImage = `url(${gameSprite.background})`;
  // console.log(gameSprite.background);
  start?.addEventListener("click", firstFunction);
  requestAnimationFrame(updateGame);
};

function firstFunction() {
  canvas.style.backgroundSize = "cover";
  canvas.style.backgroundRepeat = "no-repeat";
  canvas.style.backgroundPosition = "center center";
  text.style.display = "none";
  displayCharacterSelection();
}

// choose character
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
  canvas.addEventListener("click", handleCharacterSelection);
}

// make select image cursor pointer
function handleCharacterSelection(event: MouseEvent) {
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
      isGameRunning = true;

      canvas.removeEventListener("click", handleCharacterSelection);
      window.onload = () => {
        requestAnimationFrame(updateGame);
      };
    }
  });
}

function levelClick(event: MouseEvent) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  if (
    x >= canvas.width / 2 - 100 &&
    x <= canvas.width / 2 - 100 + nextLevelWidth &&
    y >= canvas.height / 2 + 50 &&
    y <= canvas.height / 2 + 50 + nextLevelHeight
  ) {
    goToNextLevel();
    canvas.removeEventListener("click", levelClick);
  }
}

// game over
export function GameOver() {
  changeGameOver(); //make it game over false
  cancelAnimationFrame(animationGame);
  // game over image
  const gameOverImg = new Image();
  gameOverImg.src = "/images/gameover.png";
  gameOverImg.onload = function () {
    ctx.drawImage(gameOverImg, canvas.width / 2 - 200, 50, 400, 400);
  };
  if (healthHero <= 0) {
    ctx.font = "bold 50px Arvo";
    ctx.fillText("You Lose ", canvas.width / 2 - 100, 420);
    ctx.fillText("press Enter to play again  ", canvas.width / 2 - 200, 500);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        resetGameFunction();
      }
    });
  } else if (healthVillan <= 0 && nextForReset === false) {
    ctx.font = "bold 50px Arvo ";
    ctx.fillText("You Win ", canvas.width / 2 - 100, 420);

    const nextLevelImg = new Image();
    nextLevelImg.src = "/images/next.png";
    nextLevelImg.onload = function () {
      ctx.drawImage(
        nextLevelImg,
        canvas.width / 2 - 100,
        canvas.height / 2 + 50,
        nextLevelWidth,
        nextLevelHeight
      );
    };

    canvas.addEventListener("click", levelClick);
  } else {
    ctx.font = "bold 50px Arvo ";
    ctx.fillText("You Win ", canvas.width / 2 - 100, 420);
    ctx.fillText("Press Enter to play again  ", canvas.width / 2 - 250, 500);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        nextLevel = false;
        resetGameFunction();
      }
    });
  }
}

export let resetVariable = false;
function resetGameFunction() {
  resetVariable = true;
  nextForReset = false;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.style.background = "url('/images/bg.gif')";
  canvas.style.backgroundSize = "cover";
  canvas.style.backgroundRepeat = "no-repeat";
  canvas.style.backgroundPosition = "center center";

  isGameRunning = true;
  nextLevel = false;
  changeBg = false;
  resetHeroHealth();
  resetVillanHealth();
  smallAttack.setState("");
  goku.x = 0;
  picolo.x = 0;
  botChoose.x = canvas.width - 10;
  goku.y = canvas.height - goku.height;
  botChoose.y = canvas.height - botChoose.height;
  picolo.y = canvas.height - picolo.height;
  requestAnimationFrame(updateGame);
}
export function resetVFunction() {
  resetVariable = false;
}

// for next level
export let nextLevel = false;
export let changeBg = false;
export let nextForReset = false;
function goToNextLevel() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  isGameRunning = true;
  nextForReset = true; // don't change it  if change only for reset function
  nextLevel = true; // change for elapsed time
  changeBg = true;
  nextLevelHeroHealth();
  nextLevelVillanHealth();
  smallAttack.setState("");
  goku.x = 0;
  picolo.x = 0;
  botChoose.x = canvas.width - 10;
  goku.y = canvas.height - goku.height;
  botChoose.y = canvas.height - botChoose.height;
  picolo.y = canvas.height - picolo.height;

  requestAnimationFrame(updateGame);
}

export function falseNextLevel() {
  nextLevel = false;
}

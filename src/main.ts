import { Bots } from "./classes/bot";
import { changeGameOver, gameOver } from "./classes/healthBar";
import { gameSprite } from "./images/preload";
import "./style.css";
import { canvasTexts } from "./ui/canvasText";

import { gameSound } from "./audio/audio";
import { frieza } from "./characters/frieza";
import { goku } from "./characters/goku";
import { picolo } from "./characters/picolo";
import { vegita } from "./characters/vegeta";
import { Character } from "./classes/character";
import { Effects } from "./classes/effects";
import {
  blast,
  blastHero,
  clashEffect,
  deathBall,
  finalFlash,
  friezaBlast,
  kamehame,
  piccoloAttack,
  piccoloBlast,
  powerUpEffect,
  smallAttack,
} from "./effects/allEffects";
import { characterAnimationState } from "./enums/character";
import {
  botFunction,
  counterResetFunction,
  gameLoop,
  soundFunction,
} from "./game/gameloop";
import {
  healthBarHero,
  healthBarVillain,
  healthHero,
  healthVillain,
  resetHeroHealth,
  resetVillainHealth,
} from "./game/health";
import { gameUpdate } from "./game/update";
import {
  drawBackground,
  drawBackgroundFirst,
  drawBackgroundSecond,
} from "./ui/backgroudImage";
import { nextLevelHeight, nextLevelWidth } from "./constants/game";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
export const ctx = canvas.getContext("2d")!;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// variables
export let isGameRunning = false;
export let isPaused: boolean = false;
export let selectedCharacter: string | undefined;
let animationGame: number;
export let botChoose: Bots;
export let player: Character;
export let finalMove: Effects;

let lastTime = 0;
const FPS = 60;
const frameDuriation = 1000 / FPS;
let gameTime = 0;
// paused

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyP") {
    isPaused = !isPaused;
    ctx.fillStyle = "black";
    ctx.font = "50px Silkscreen";
    ctx.fillText("Paused", canvas.width / 2 - 150, canvas.height / 2);
    cancelAnimationFrame(animationGame);
    if (!isPaused) {
      updateGame();
    }
  }
});

/**
 *Update all the game
 * @param currentTime Get from request animation frame
 */
export function updateGame(currentTime: number = 0) {
  const deltaTime = currentTime - lastTime;

  if (deltaTime >= frameDuriation) {
    lastTime = currentTime - (deltaTime % frameDuriation);
    gameTime += frameDuriation;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (changeBg) {
      drawBackgroundSecond(ctx);
    } else {
      drawBackgroundFirst(ctx);
    }
    // canvas text
    canvasTexts(ctx);
    // change characters
    if (selectedCharacter === "goku") {
      player = goku;
      finalMove = kamehame;
    }
    if (selectedCharacter === "piccolo") {
      player = picolo;
      finalMove = piccoloAttack;
    }
    if (nextForReset) {
      botChoose = frieza;
    } else {
      botChoose = vegita;
    }

    // character update
    picolo.update(deltaTime);
    goku.update(deltaTime);
    botChoose.update(deltaTime);
    blast.update(deltaTime);
    piccoloBlast.update(deltaTime);
    friezaBlast.update(deltaTime);
    blastHero.update(deltaTime);
    kamehame.update(deltaTime);
    clashEffect.update(deltaTime);
    powerUpEffect.update(deltaTime);

    // sawp character
    const distance: number =
      player.x + player.width - botChoose.x + botChoose.width;
    if (distance > 608) {
      player.draw2(ctx);
      botChoose.draw2(ctx);
    } else {
      player.draw(ctx);
      botChoose.draw(ctx);
    }

    //  draw
    smallAttack.draw(ctx);
    finalFlash.draw(ctx);
    friezaBlast.draw(ctx);
    deathBall.draw(ctx);
    blastHero.draw(ctx);
    piccoloAttack.draw(ctx);
    kamehame.draw(ctx);
    blast.draw(ctx);
    piccoloBlast.draw(ctx);
    clashEffect.draw(ctx);
    powerUpEffect.draw(ctx);

    // health
    healthBarHero.show(ctx);
    healthBarVillain.show(ctx);

    player.setState(characterAnimationState.Stand);
    botChoose.setState(characterAnimationState.Stand);

    // game loops
    gameLoop();
    gameUpdate(deltaTime, currentTime);
    botFunction(deltaTime);
    soundFunction();
  }
  // game over

  if (gameOver) {
    isGameRunning = false;
    changeGameOver();
    GameOver();
  }
  if (!isPaused && isGameRunning) {
    animationGame = requestAnimationFrame(updateGame);
  }
}

// dom

window.onload = () => {
  initializeGame();
};

function initializeGame() {
  drawBackground(ctx);
  const start = document.getElementById("startBtn") as HTMLButtonElement;
  const text = document.querySelector(".game__text") as HTMLDivElement;

  start?.addEventListener("click", () => {
    text.style.display = "none";
    displayCharacterSelection();
    gameSound.firstIntro.play();
    gameSound.firstIntro.addEventListener("ended", function () {
      gameSound.firstIntro.play();
    });
  });
}

// choose character
const characters: ChooseCharacter[] = [
  { name: "goku", imgSrc: "/images/logos/gokucharacter.jpg" },
  { name: "piccolo", imgSrc: "/images/logos/picolocharacter.jpg" },
];

function displayCharacterSelection() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground(ctx);
  ctx.fillStyle = "white";
  ctx.font = "50px Silkscreen";
  ctx.fillText("Choose a character", canvas.width / 4, 110);
  // Render each characters image and name
  characters.forEach((character, index) => {
    const x = (index + 1) * 400;
    const y = canvas.height / 4;
    const img: HTMLImageElement = new Image();

    img.onload = function () {
      ctx.drawImage(img, x - 50, y - 50, 300, 300);
      ctx.font = "30px Silkscreen";
      ctx.fillText(character.name, x + 50, y + 300);
    };
    img.src = character.imgSrc;
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
      lastTime = 0;
      gameSound.firstIntro.pause();
      updateGame();
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
  cancelAnimationFrame(animationGame);
  changeGameOver(); //make it game over false
  ctx.drawImage(gameSprite.gameOverImg, canvas.width / 2 - 200, 50, 400, 400);
  if (healthHero <= 0) {
    ctx.font = "bold 50px Arvo";
    ctx.fillText("You Lose ", canvas.width / 2 - 100, 420);
    ctx.fillText("press Enter to play again  ", canvas.width / 2 - 200, 500);
    if (botChoose === vegita) {
      gameSound.vegitaWin.play();
    } else {
      gameSound.friezaWin.play();
    }

    if (nextForReset) {
      document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          goToNextLevel();
        }
      });
    } else {
      document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          resetGameFunction();
        }
      });
    }
  } else if (healthVillain <= 0 && nextForReset === false) {
    ctx.font = "bold 50px Arvo ";
    ctx.fillText("You Win ", canvas.width / 2 - 100, 420);
    ctx.drawImage(
      gameSprite.nextLevelImg,
      canvas.width / 2 - 100,
      canvas.height / 2 + 50,
      nextLevelWidth,
      nextLevelHeight
    );
    canvas.addEventListener("click", levelClick);
  } else {
    ctx.font = "bold 50px Arvo";
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
// game reset
export let resetVariable = false;

function resetGameFunction() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  resetVariable = true;
  nextForReset = false;
  drawBackgroundFirst(ctx);
  isGameRunning = true;
  nextLevel = false;
  changeBg = false;
  resetHeroHealth();
  resetVillainHealth();
  counterResetFunction();
  // game time
  gameTime = 0;

  smallAttack.setState("");
  goku.x = 0;
  picolo.x = 0;
  botChoose.x = canvas.width - 10;
  goku.y = canvas.height - goku.height;
  botChoose.y = canvas.height - botChoose.height;
  picolo.y = canvas.height - picolo.height;
  updateGame();
}
export function resetVFunction() {
  resetVariable = false;
}

// for next level
export let nextLevel: boolean = false;
export let changeBg: boolean = false;
export let nextForReset: boolean = false;
function goToNextLevel() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  isGameRunning = true;
  nextForReset = true; // change only for reset function
  nextLevel = true; // change for elapsed time
  changeBg = true;
  gameTime = 0;
  resetHeroHealth();
  resetVillainHealth();
  counterResetFunction();
  smallAttack.setState("");
  goku.x = 0;
  picolo.x = 0;
  botChoose.x = canvas.width - 10;
  goku.y = canvas.height - goku.height;
  botChoose.y = canvas.height - botChoose.height;
  picolo.y = canvas.height - picolo.height;

  updateGame();
}

export function falseNextLevel() {
  nextLevel = false;
}

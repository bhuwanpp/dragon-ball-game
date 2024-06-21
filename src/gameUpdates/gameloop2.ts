import { vegita } from "../characters/vegeta";
import { Character } from "../classes/character";
import { Effects } from "../classes/effects";
import { Bots } from "../classes/bot";
import {
  blast,
  blastHero,
  deathBall,
  finalFlash,
  friezaBlast,
  piccoloBlast,
} from "../effects/kagehame";
import {
  decreaseHeroHealth,
  decreaseVillanHealth,
  finalMove,
  player,
} from "./gameloop";
import {
  falseNextLevel,
  nextForReset,
  nextLevel,
  resetVariable,
  resetVFunction,
} from "../main";
import { frieza } from "../characters/frieza";
import { picolo } from "../characters/picolo";
import { goku } from "../characters/goku";
import { detectCollision, detectCollision2 } from "../collisiondetect/detect";

const callInterval = 14000;
const finalAttack = 4000;
let elapsedTime = 0;
let attackTime = 0;
let blastHeroTime = 0;

let started: boolean = false;
let botFinal: Effects;

export let chooseBot: Bots;

/**
 *
 * @param deltaTime for smooth animation
 */
export function gameUpdate(deltaTime: number, currentTime: number) {
  if (!started) {
    started = true;
    elapsedTime -= currentTime;
    attackTime -= currentTime;
  }

  // boot choose
  if (nextForReset) {
    chooseBot = frieza;
    botFinal = deathBall;
  } else {
    chooseBot = vegita;
    botFinal = finalFlash;
  }

  blast.x = chooseBot.x - chooseBot.width / 2 - 100;
  blast.y = chooseBot.y;
  piccoloBlast.x = chooseBot.x - chooseBot.width / 2 - 100;
  piccoloBlast.y = chooseBot.y;

  if (player.state === "stand") {
    elapsedTime += deltaTime;
    blastHeroTime += deltaTime;
    attackTime += deltaTime;
  }
  // for where chooseBot travels
  botFinal.y = chooseBot.y + 100;

  const distance = player.x + player.width - chooseBot.x + chooseBot.width;
  // if player stand for 5 sec
  if (nextLevel) {
    elapsedTime = 0;
    blastHeroTime = 0;
    falseNextLevel();
    attackTime = 0;
  }
  if (resetVariable) {
    elapsedTime = 0;
    blastHeroTime = 0;
    resetVFunction();
    attackTime = 0;
  }

  if (
    attackTime >= finalAttack &&
    distance < 300 &&
    chooseBot.state === "stand"
  ) {
    chooseBot.setState("final");
    botFinal.setState("final-flash");
    botFinal.x -= 10;
  }
  // detect collision betn player and bot final move
  if (detectCollision(player, botFinal)) {
    blastHero.y = player.y + 100;
    blastHero.x = player.x;
    friezaBlast.y = player.y + 100;
    friezaBlast.x = player.x;
    botFinal.x = chooseBot.x - 600;
    botFinal.y = chooseBot.y + 100;

    // decrease hero health
    if (botFinal === deathBall) {
      decreaseHeroHealth(20);
      friezaBlast.setState("blast");
      player.setState("hitFlash");
    }
    if (botFinal === finalFlash) {
      decreaseHeroHealth(10);
      blastHero.setState("blast");
    }
    if (player.state === "block") {
      decreaseHeroHealth(5);
    }
    botFinal.setState("");
    blastHeroTime = 0;
    chooseBot.setState("stand");
    attackTime = 0;
  }
  if (elapsedTime >= callInterval && distance < 300) {
    botFinal.setState("");
    chooseBot.setState("walk");
    chooseBot.x -= 10;
  }

  if (blastHeroTime >= 1000) {
    blastHero.setState("");
    friezaBlast.setState("");
  }
  // detection collision between bot and player final move
  if (detectCollision2(chooseBot, finalMove) && player.state === "final") {
    chooseBot.setState("hitKame");
    if (player === picolo) {
      piccoloBlast.setState("blast");
    }
    if (player === goku) {
      blast.setState("blast");
    }
    finalMove.setState("");
    player.setState("stand");
    decreaseVillanHealth(0.05);
  } else {
    blast.setState("");
    piccoloBlast.setState("");
  }
}

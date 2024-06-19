import { picolo } from "./characters/picolo";
import { vegita } from "./characters/vegeta";
import { Character } from "./classes/character";
import { Effects } from "./classes/effects";
import { Vegita } from "./classes/vegitaClass";
import {
  blast,
  blastHero,
  finalFlash,
  kamehame,
  piccoloAttack,
} from "./effects/kagehame";
import { decreaseHeroHealth, decreaseVillanHealth } from "./gameloop";
import { selectedCharacter } from "./main";
import { goku } from "./characters/goku";

const callInterval = 10000;
let elapsedTime = 0;
let blastHeroTime = 0;

let player: Character;
let finalMove: Effects;
/**
 *
 * @param deltaTime for smooth animation
 */
export function gameUpdate(deltaTime: number) {
  if (selectedCharacter === "piccolo") {
    player = picolo;
    finalMove = piccoloAttack;
  }
  if (selectedCharacter === "goku") {
    player = goku;
    finalMove = kamehame;
  }
  elapsedTime += deltaTime;
  blastHeroTime += deltaTime;

  // for whrere vegita travels
  finalFlash.y = vegita.y + 100;
  const distance = player.x + player.width - vegita.x + vegita.width;

  if (elapsedTime >= callInterval && distance < 240) {
    vegita.setState("final");
    finalFlash.setState("final-flash");
    finalFlash.x -= 6;

    if (detectCollision(player, finalFlash)) {
      blastHero.y = player.y + 100;
      blastHero.x = player.x;
      player.setState("hitFlash");
      finalFlash.x = vegita.x - vegita.width / 2 - 100;
      finalFlash.y = vegita.y + 100;
      decreaseHeroHealth(10);
      finalFlash.setState("");
      blastHero.setState("blast");
      elapsedTime = 0;
      blastHeroTime = 0;
    }
  }
  if (blastHeroTime >= 1000) {
    blastHero.setState("");
  }
  // if (effectDistance > -125) {
  //   finalFlash.x = vegita.x - vegita.width / 2 - 100;
  //   finalFlash.y = vegita.y + 100;
  //   finalFlash.setState("");
  //   elapsedTime = 0;
  // }
  if (detectCollision2(vegita, finalMove)) {
    vegita.setState("hitKame");
    blast.setState("blast");
    finalMove.setState("");
    player.setState("stand");
    decreaseVillanHealth(0.05);
  } else {
    blast.setState("");
  }
}

let ignoreNumber = 380;

/**
 * detects the collision
 * @param a character or villain
 * @param b for character effect
 * @returns if collide true
 */
export function detectCollision(a: Character | Vegita, b: Effects): boolean {
  return (
    a.x < b.x + b.width - ignoreNumber &&
    a.x + a.width - ignoreNumber > b.x &&
    a.y < b.y + b.height - ignoreNumber &&
    a.y + a.height - ignoreNumber > b.y
  );
}

// for finalMove for villain because it is reverse image
let ignoreNumber2 = -200;

/**
 * detect the bot attack collision
 * @param a for bot attack
 * @param b for effects
 * @returns   if collide true
 */
export function detectCollision2(a: Character | Vegita, b: Effects): boolean {
  return (
    a.x < b.x + b.width - ignoreNumber2 &&
    a.x + a.width - ignoreNumber2 > b.x &&
    a.y < b.y + b.height - ignoreNumber2 &&
    a.y + a.height - ignoreNumber2 > b.y
  );
}

import { Bots } from "../classes/bot";
import { Character } from "../classes/character";
import { Effects } from "../classes/effects";

let ignoreNumber = 300;

/**
 * detects the collision
 * @param a character or villain
 * @param b for character effect
 * @returns if collide true
 */
export function detectCollision(a: Character | Bots, b: Effects): boolean {
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
export function detectCollision2(
  a: Character | Bots,
  b: Effects | Bots
): boolean {
  return (
    a.x < b.x + b.width - ignoreNumber2 &&
    a.x + a.width - ignoreNumber2 > b.x &&
    a.y < b.y + b.height - ignoreNumber2 &&
    a.y + a.height - ignoreNumber2 > b.y
  );
}

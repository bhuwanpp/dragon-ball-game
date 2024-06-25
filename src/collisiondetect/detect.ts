import { Bots } from "../classes/bot";
import { Character } from "../classes/character";
import { Effects } from "../classes/effects";
import { offsetMinusTwo, offsetThree, offsetTwo } from "../constants/collision";

/**
 * detects the collision
 * @param a character or villain
 * @param b for character effect
 * @returns if collide true
 */
export function detectCollision(a: Character | Bots, b: Effects): boolean {
  return (
    a.x < b.x + b.width - offsetThree &&
    a.x + a.width - offsetThree > b.x &&
    a.y < b.y + b.height - offsetThree &&
    a.y + a.height - offsetThree > b.y
  );
}

/**
 * for finalMove for villain because it is reverse image
 * @param a for bot attack
 * @param b for effects
 * @returns   if collide true
 */
export function detectCollision2(
  a: Character | Bots,
  b: Effects | Bots
): boolean {
  return (
    a.x < b.x + b.width - offsetMinusTwo &&
    a.x + a.width - offsetMinusTwo > b.x &&
    a.y < b.y + b.height - offsetMinusTwo &&
    a.y + a.height - offsetMinusTwo > b.y
  );
}

/**
 * detects the collision betn two effects clash
 * @param a character or villain
 * @param b for character effect
 * @returns if collide true
 */
export function detectCollisionMove(a: Effects, b: Effects): boolean {
  return (
    a.x < b.x + b.width - offsetTwo &&
    a.x + a.width - offsetTwo > b.x &&
    a.y < b.y + b.height - offsetTwo &&
    a.y + a.height - offsetTwo > b.y
  );
}

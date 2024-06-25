import { HealthBar } from "../classes/healthBar";
import { canvasWidth } from "../constants/game";
import {
  firstFull,
  healthBarHeight,
  healthBarWidth,
  secondFull,
} from "../constants/health";

export let healthVillain: number = 100;
export let healthHero: number = 100;

/**
 * Health bar for hero character
 */
export const healthBarHero = new HealthBar(
  10,
  10,
  healthBarWidth,
  healthBarHeight,
  healthHero,
  "green"
);
/**
 * Health bar for villain character
 */
export const healthBarVillain = new HealthBar(
  canvasWidth / 2,
  10,
  healthBarWidth,
  healthBarHeight,
  healthVillain,
  "green"
);

/**
 * Decrease hero's health by specific amount.
 * @param amount - The amount of decrease hero's health
 */
export function decreaseHeroHealth(amount: number) {
  healthHero -= amount;
  healthBarHero.updateHealth(healthHero);
}
/**
 * Decreases the villain's health by the specified amount.
 * Updates the health bar accordingly.
 * @param amount - The amount to decrease the villain's health by.
 */
export function decreaseVillainHealth(amount: number) {
  healthVillain -= amount;
  healthBarVillain.updateHealth(healthVillain);
}
/**
 * Resets the villain's health to the initial full health value.
 */
export function resetVillainHealth() {
  healthVillain = firstFull;
  healthBarVillain.updateHealth(healthVillain);
}

/**
 * Resets the hero's health to the initial full health value.
 */
export function resetHeroHealth() {
  healthHero = firstFull;
  healthBarHero.updateHealth(healthHero);
}

/**
 * Sets the hero's health to the next level full health value.
 */
export function nextLevelHeroHealth() {
  healthHero = secondFull;
  healthBarHero.updateHealth(healthHero);
}
/**
 * Sets the villain's health to the next level full health value.
 */
export function nextLevelVillainHealth() {
  healthVillain = firstFull;
  healthBarVillain.updateHealth(healthVillain);
}

export function powerUpHero() {
  healthHero = 60;
  healthBarHero.updateHealth(healthHero);
}

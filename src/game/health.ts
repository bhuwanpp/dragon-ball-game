import { HealthBar } from "../classes/healthBar";
import { canvasWidth } from "../constants/game";
import {
  fullHealth,
  healthBarHeight,
  healthBarWidth,
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
 * Decrease hero health by specific amount.
 * @param amount - The amount of decrease hero's health
 */
export function decreaseHeroHealth(amount: number) {
  healthHero -= amount;
  healthBarHero.updateHealth(healthHero);
}

/**
 * Decreases the villains health by the specified amount.
 * Updates the health bar accordingly.
 * @param amount - The amount to decrease the villains health by.
 */
export function decreaseVillainHealth(amount: number) {
  healthVillain -= amount;
  healthBarVillain.updateHealth(healthVillain);
}
/**
 * Resets the villains health to the initial full health value.
 */
export function resetVillainHealth() {
  healthVillain = fullHealth;
  healthBarVillain.updateHealth(healthVillain);
}

/**
 * Resets the heros health to the initial full health value.
 */
export function resetHeroHealth() {
  healthHero = fullHealth;
  healthBarHero.updateHealth(healthHero);
}

export function powerUpHero() {
  healthHero = 60;
  healthBarHero.updateHealth(healthHero);
}

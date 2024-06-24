import { HealthBar } from "../classes/healthBar";
import { canvasWidth } from "../constants/game";
import { firstFull, secondFull } from "../constants/health";

export let healthVillain: number = 100;
export let healthHero: number = 100;

const healthBarWidth: number = canvasWidth / 2 - 10;
const healthBarHeight: number = 40;

export const healthBarHero = new HealthBar(
  10,
  10,
  healthBarWidth,
  healthBarHeight,
  healthHero,
  "green"
);
export const healthBarVillain = new HealthBar(
  canvasWidth / 2,
  10,
  healthBarWidth,
  healthBarHeight,
  healthVillain,
  "green"
);

export function decreaseHeroHealth(amount: number) {
  healthHero -= amount;
  healthBarHero.updateHealth(healthHero);
}

export function decreaseVillainHealth(amount: number) {
  healthVillain -= amount;
  healthBarVillain.updateHealth(healthVillain);
}

export function resetVillainHealth() {
  healthVillain = firstFull;
  healthBarVillain.updateHealth(healthVillain);
}

export function resetHeroHealth() {
  healthHero = firstFull;
  healthBarHero.updateHealth(healthHero);
}

export function nextLevelHeroHealth() {
  healthHero = secondFull;
  healthBarHero.updateHealth(healthHero);
}

export function nextLevelVillainHealth() {
  healthVillain = firstFull;
  healthBarVillain.updateHealth(healthVillain);
}

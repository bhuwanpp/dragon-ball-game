import { HealthBar } from "../classes/healthBar";
import { canvasWidth } from "../utils/contants";

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
  healthVillain = 100;
  healthBarVillain.updateHealth(healthVillain);
}

export function resetHeroHealth() {
  healthHero = 100;
  healthBarHero.updateHealth(healthHero);
}

export function nextLevelHeroHealth() {
  healthHero = 130;
  healthBarHero.updateHealth(healthHero);
}

export function nextLevelVillainHealth() {
  healthVillain = 100;
  healthBarVillain.updateHealth(healthVillain);
}

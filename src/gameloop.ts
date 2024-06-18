import { goku } from "./characters/goku";
import { canvasWidth, characterWidth } from "./contants";
import { kamehame, smallAttack } from "./effects/kagehame";

// Audio
//  fistSound
import fistS from "/audio/fist.wav";
const fistSound = new Audio(fistS) as HTMLAudioElement;
fistSound.playbackRate = 2;

import kickS from "/audio/kick.wav";
const kickSound = new Audio(kickS) as HTMLAudioElement;
kickSound.playbackRate = 2;

import walk from "/audio/walk.wav";
const walkSound = new Audio(walk) as HTMLAudioElement;

// kamehame sound
import kame from "/audio/kamefast.wav";
import { vegita } from "./characters/vegeta";
import { HealthBar } from "./classes/healthBar";
const kameSound = new Audio(kame) as HTMLAudioElement;

export let healthVillan = 100;
export let healthHero = 100;
const healthBarWidth = canvasWidth / 2 - 10;
const healthBarHeight = 40;

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
  healthVillan,
  "green"
);

let left: boolean,
  right: boolean,
  up: boolean,
  down: boolean,
  kick: boolean,
  fist: boolean,
  block: boolean = false;
export let final = false;
let villanFinal = false;

document.addEventListener("keydown", press);
document.addEventListener("keyup", release);
let counterVillan: number = 0;
let counterHero: number = 0;

function press(e: KeyboardEvent) {
  if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
    left = true;
  }
  if (e.key === "ArrowRight" || e.key === "D" || e.key === "d") {
    right = true;
  }
  if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
    up = true;
  }
  if (e.key === "ArrowDown" || e.key === "z" || e.key === "Z") {
    down = true;
  }
  if (e.key === "b" || e.key === "B") {
    block = true;
  }
  if (e.key === "k" || e.key === "K") {
    kick = true;
    counterVillan++;
  }
  if (e.key === "f" || e.key === "F") {
    fist = true;
    counterVillan++;
  }
  if (e.key === "l" || e.key === "L") {
    final = true;
  }
  if (e.key === "v" || e.key === "V") {
    villanFinal = true;
  }
}

function release(e: KeyboardEvent) {
  if (e.key === "ArrowLeft" || e.key === "A" || e.key === "a") {
    left = false;
  }
  if (e.key === "ArrowRight" || e.key === "D" || e.key === "d") {
    right = false;
  }
  if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
    up = false;
  }
  if (e.key === "ArrowDown" || e.key === "z" || e.key === "Z") {
    down = false;
  }
  if (e.key === "b" || e.key === "B") {
    block = false;
  }
  if (e.key === "k" || e.key === "K") {
    kick = false;
  }
  if (e.key === "f" || e.key === "F") {
    fist = false;
  }
  if (e.key === "l" || e.key === "L") {
    final = false;
  }
  if (e.key === "v" || e.key === "V") {
    villanFinal = false;
  }
}

export function gameLoop() {
  const distance = goku.x + goku.width - vegita.x + vegita.width;
  if (left && goku.x > -90) {
    walkSound.play();
    goku.setState("back");
    goku.x -= 10;
  }
  if (right && goku.x + characterWidth - 100 < canvasWidth && distance < 300) {
    walkSound.play();
    goku.setState("walk");
    goku.x += 10;
  }

  if (up && goku.y > -50) {
    goku.y -= 60;
    vegita.y -= 60;
  }
  if (down && goku.y + 150 < characterWidth) {
    goku.y += 60;
    vegita.y += 60;
  }

  if (block) {
    goku.setState("block");
  }
  if (kick) {
    kickSound.play();
    goku.setState("kick");
  }
  if (fist) {
    fistSound.play();
    goku.setState("fist");
  }
  if (final) {
    goku.setState("final");
    kamehame.setState("kame");
    kamehame.x += 10;
    kameSound.play();
  }
  if (!final) {
    kamehame.x = goku.x + goku.width / 2 - 100;
    kamehame.y = goku.y + 200;
    kameSound.pause();
  }
}

export function botFunction() {
  // slow down request animation frame ??
  const distance = goku.x + goku.width - vegita.x + vegita.width;

  const movesArray: string[] = ["kick", "fist"];
  const move: string =
    movesArray[Math.floor(Math.random() * movesArray.length)];
  // villan attack
  if (goku.state === "stand" && distance > 240) {
    vegita.setState(move);
    counterHero++;
  }

  // goku attack
  if (goku.state === "fist" && distance > 240) {
    vegita.setState("block");
    smallAttack.setState("sattack");
  }
  if (goku.state === "kick" && distance > 240) {
    vegita.setState("block");
    smallAttack.setState("sattack");
  } else {
    smallAttack.setState("none");
  }
  if (goku.state === "fist" && distance > 240 && counterVillan > 10) {
    vegita.setState("hit");
    healthVillan -= 0.5;
    healthBarVillain.updateHealth(healthVillan);
  }

  if (
    counterHero > 100 &&
    (vegita.state === "kick" || vegita.state === "fist")
  ) {
    healthHero -= 0.09;
    healthBarHero.updateHealth(healthHero);
  }

  if (goku.state === "kick" && distance > 240 && counterVillan > 10) {
    vegita.setState("hit");
    healthVillan -= 0.5;
    healthBarVillain.updateHealth(healthVillan);
  }
  if (vegita.state === "fist" && distance > 240) {
    goku.setState("hit");
  }
}

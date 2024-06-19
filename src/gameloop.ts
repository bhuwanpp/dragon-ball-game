import { canvasWidth, characterWidth } from "./contants";
import { kamehame, piccoloAttack, smallAttack } from "./effects/kagehame";

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

// finalMove sound
// import kame from "/audio/kamefast.wav";
import { vegita } from "./characters/vegeta";
import { HealthBar } from "./classes/healthBar";
import { selectedCharacter } from "./main";
import { Character } from "./classes/character";
import { picolo } from "./characters/picolo";
import { goku } from "./characters/goku";
import { Effects } from "./classes/effects";
// const kameSound = new Audio(kame) as HTMLAudioElement;

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
}

let player: Character;
let finalMove: Effects;
export function gameLoop() {
  if (selectedCharacter === "piccolo") {
    player = picolo;
    finalMove = piccoloAttack;
  }
  if (selectedCharacter === "goku") {
    player = goku;
    finalMove = kamehame;
  }
  const distance = player.x + player.width - vegita.x + vegita.width;
  if (left && player.x > -90) {
    walkSound.play();
    player.setState("back");
    player.x -= 10;
  }
  if (
    right &&
    player.x + characterWidth - 100 < canvasWidth &&
    distance < 300
  ) {
    walkSound.play();
    player.setState("walk");
    player.x += 10;
  }

  if (up && player.y > -50) {
    player.y -= 60;
    vegita.y -= 60;
  }
  if (down && player.y + 150 < characterWidth) {
    player.y += 60;
    vegita.y += 60;
  }

  if (block) {
    player.setState("block");
  }
  if (kick) {
    kickSound.play();
    player.setState("kick");
  }
  if (fist) {
    fistSound.play();
    player.setState("fist");
  }
  if (final) {
    player.setState("final");
    finalMove.setState("kame");
    finalMove.x += 10;
  }
  if (!final) {
    finalMove.x = player.x + player.width / 2 - 100;
    finalMove.y = player.y + 150;
    finalMove.setState("");
  }

  // kameSound.play();
}

// kameSound.pause();

let elapsedTime = 0;
export function botFunction(deltaTime: number) {
  smallAttack.x = vegita.x - vegita.width / 2 - 100;
  smallAttack.y = vegita.y + 100;
  elapsedTime += deltaTime;

  // slow down request animation frame ??
  const distance = player.x + player.width - vegita.x + vegita.width;
  const movesArray: string[] = ["kick", "fist"];

  let move: string = movesArray[Math.floor(Math.random() * movesArray.length)];
  if (player.state === "stand" && distance > 240) {
    vegita.setState(move);
    counterHero++;
  }

  // player attack
  if (player.state === "fist" && distance > 240) {
    vegita.setState("block");
  }
  if (player.state === "kick" && distance > 240) {
    vegita.setState("block");
    smallAttack.setState("sattack");
  } else {
    smallAttack.setState("none");
  }
  if (player.state === "fist" && distance > 240 && counterVillan > 10) {
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

  if (player.state === "kick" && distance > 240 && counterVillan > 10) {
    vegita.setState("hit");
    healthVillan -= 0.5;
    healthBarVillain.updateHealth(healthVillan);
  }
  if (vegita.state === "fist" && distance > 240) {
    player.setState("hit");
  }
}
export function decreaseHeroHealth(amount: number) {
  healthHero -= amount;
  healthBarHero.updateHealth(healthHero);
}
export function decreaseVillanHealth(amount: number) {
  healthVillan -= amount;
  healthBarVillain.updateHealth(healthVillan);
}

import {
  gameSound,
  gokuSound,
  piccoloSound,
  playerSound,
} from "../audio/audio";
import { frieza } from "../characters/frieza";
import { goku } from "../characters/goku";
import { vegita } from "../characters/vegeta";
import { Bots } from "../classes/bot";
import { detectCollision2 } from "../collisiondetect/detect";
import { smallAttack } from "../effects/kagehame";
import { AttackState } from "../enums/attacks";
import { characterAnimationState } from "../enums/character";
import { finalMove, nextForReset, player } from "../main";
import { canvasWidth, characterWidth } from "../utils/contants";
import { block, down, final, fist, kick, left, right, up } from "./controls";
import { decreaseHeroHealth, decreaseVillainHealth } from "./health";

let chooseBot: Bots;

export function gameLoop() {
  chooseBot = nextForReset ? frieza : vegita;

  if (left && player.x > -90) {
    player.setState(characterAnimationState.Back);
    player.x -= 10;
  }
  if (right && player.x + characterWidth - 100 < canvasWidth) {
    player.setState(characterAnimationState.Walk);
    player.x += 10;
  }
  if (up && player.y > -50) {
    player.y -= 60;
    chooseBot.y -= 60;
  }
  if (down && player.y + 150 < characterWidth) {
    player.y += 60;
    chooseBot.y += 60;
  }
  if (block) {
    player.setState(characterAnimationState.Block);
  }
  if (kick) {
    player.setState(characterAnimationState.Kick);
  }
  if (fist) {
    player.setState(characterAnimationState.Fist);
  }
  if (final && !detectCollision2(player, chooseBot)) {
    player.setState(characterAnimationState.FinalAttack);
    finalMove.setState(AttackState.Kame);
    finalMove.x += 10;
  } else {
    finalMove.x = player.x + player.width / 2 - 100;
    finalMove.y = player.y + 150;
    finalMove.setState("");
  }
}

let elapsedTime: number = 0;
export function botFunction(deltaTime: number) {
  smallAttack.x = chooseBot.x - chooseBot.width / 2 - 100;
  smallAttack.y = chooseBot.y + 100;
  elapsedTime += deltaTime;

  if (detectCollision2(player, chooseBot)) {
    if (elapsedTime > 5000) {
      elapsedTime = 0;
    }
    if (elapsedTime > 2000) {
      chooseBot.setState(characterAnimationState.Kick);
    }
    if (elapsedTime > 4000) {
      chooseBot.setState(characterAnimationState.Fist);
    }
    if (
      chooseBot.state === characterAnimationState.Fist ||
      chooseBot.state === characterAnimationState.Kick
    ) {
      player.setState(characterAnimationState.Hit);
      // decreaseHeroHealth(0.06);
      decreaseHeroHealth(0.09);
    }
    if (
      player.state === characterAnimationState.Fist ||
      player.state === characterAnimationState.Kick
    ) {
      chooseBot.setState(characterAnimationState.Block);
    }
    if (player.state === characterAnimationState.Fist) {
      decreaseVillainHealth(0.09);
    }
    if (player.state === characterAnimationState.Kick) {
      decreaseVillainHealth(1);
    }
  }
}

export function soundFunction() {
  if (
    player.state === characterAnimationState.Fist ||
    player.state === characterAnimationState.Kick
  ) {
    if (player === goku) {
      gokuSound.gokuFist.play();
    } else {
      piccoloSound.piccoloFist.play();
    }
  }
  if (player.state === characterAnimationState.Walk) {
    if (player === goku) {
      playerSound.walkSound.play();
    }
  }
  if (player.state === characterAnimationState.FinalAttack) {
    if (player === goku) {
      gokuSound.kameSound.play();
    } else {
      piccoloSound.piccoloFinal.play();
    }
  }
  if (
    chooseBot.state === characterAnimationState.Fist ||
    chooseBot.state === characterAnimationState.Kick
  ) {
    if (chooseBot === vegita) {
      gameSound.vegitaFist.play();
    } else {
      gameSound.friezaFist.play();
    }
  }
}

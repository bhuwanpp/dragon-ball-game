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
import { characterWidth } from "../constants/character";
import { canvasWidth } from "../constants/game";
import {
  firstInterval,
  secondInterval,
  thirdInterval,
} from "../constants/loop";
import { powerUpEffect, smallAttack } from "../effects/allEffects";
import { AttackState } from "../enums/attacks";
import { characterAnimationState } from "../enums/character";
import { finalMove, nextForReset, player } from "../main";
import {
  block,
  down,
  final,
  fist,
  kick,
  left,
  powerUp,
  right,
  up,
} from "./controls";
import {
  decreaseHeroHealth,
  decreaseVillainHealth,
  healthHero,
  powerUpHero,
} from "./health";

let chooseBot: Bots;
export let counterPower: number = 0;

/**
 * Reset to power up counter
 */
export function counterResetFunction() {
  counterPower = 0;
}

/**
 * It represents the player movements in the game
 */
export function gameLoop() {
  chooseBot = nextForReset ? frieza : vegita;
  powerUpEffect.x = player.x + 50;
  if (player) {
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
      powerUpEffect.height = player.height;
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
    if (powerUp) {
      player.setState(characterAnimationState.PowerUp);
    }
    if (powerUp && healthHero < 30 && counterPower < 2) {
      powerUpEffect.setState(AttackState.PowerUp);
      player.setState(characterAnimationState.PowerUp);
      gameSound.powerUpSound.play();
      setTimeout(() => {
        counterPower += 1;
        powerUpHero();
        powerUpEffect.setState("");
      }, 2000);
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
}

let elapsedTime: number = 0;

/**
 * It represents the bot movements in game
 * @param deltaTime for Calculate time  for attack player from bot
 */
export function botFunction(deltaTime: number) {
  smallAttack.x = chooseBot.x - chooseBot.width / 2 - 100;
  smallAttack.y = chooseBot.y + 100;
  elapsedTime += deltaTime;

  if (detectCollision2(player, chooseBot)) {
    // 2s
    if (elapsedTime > firstInterval) {
      chooseBot.setState(characterAnimationState.Kick);
    }
    //4s
    if (elapsedTime > secondInterval) {
      chooseBot.setState(characterAnimationState.Fist);
    }
    //5s
    if (elapsedTime > thirdInterval) {
      elapsedTime = 0;
    }
    if (
      chooseBot.state === characterAnimationState.Fist ||
      (chooseBot.state === characterAnimationState.Kick &&
        player.state !== characterAnimationState.PowerUp)
    ) {
      player.setState(characterAnimationState.Hit);
      if (chooseBot === vegita) {
        decreaseHeroHealth(0.09);
      } else {
        decreaseHeroHealth(0.15);
      }
    }

    if (
      player.state === characterAnimationState.Fist ||
      player.state === characterAnimationState.Kick
    ) {
      chooseBot.setState(characterAnimationState.Block);
    }
    if (
      player.state === characterAnimationState.Fist ||
      player.state === characterAnimationState.Kick
    ) {
      if (chooseBot === vegita) {
        decreaseVillainHealth(0.5);
      } else {
        decreaseVillainHealth(0.3);
      }
    }
  }
}

/**
 * It represents the sound in the game
 */
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

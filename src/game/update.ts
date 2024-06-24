import { vegita } from "../characters/vegeta";
import { Effects } from "../classes/effects";
import {
  blast,
  blastHero,
  deathBall,
  finalFlash,
  friezaBlast,
  piccoloBlast,
} from "../effects/kagehame";

import { frieza } from "../characters/frieza";
import { goku } from "../characters/goku";
import { picolo } from "../characters/picolo";
import { detectCollision, detectCollision2 } from "../collisiondetect/detect";
import { AttackState } from "../enums/attacks";
import { characterAnimationState } from "../enums/character";
import {
  botChoose,
  falseNextLevel,
  finalMove,
  nextLevel,
  player,
  resetVariable,
  resetVFunction,
} from "../main";
import { makeFinalFalse } from "./controls";
import { decreaseHeroHealth, decreaseVillainHealth } from "./health";
import { gameSound } from "../audio/audio";
import { callInterval, finalAttack, firstSecond } from "../constants/loop";

let elapsedTime: number = 0;
let attackTime: number = 0;
let blastHeroTime: number = 0;

let started: boolean = false;
let botFinal: Effects;

/**
 *
 * @param deltaTime for smooth animation
 */
export function gameUpdate(deltaTime: number, currentTime: number) {
  if (!started) {
    started = true;
    elapsedTime -= currentTime;
    attackTime -= currentTime;
    blastHeroTime -= currentTime;
  }

  // boot choose
  if (botChoose === vegita) {
    botFinal = finalFlash;
  } else {
    botFinal = deathBall;
  }

  blast.x = botChoose.x - botChoose.width / 2 - 100;
  blast.y = botChoose.y;
  piccoloBlast.x = botChoose.x - botChoose.width / 2 - 200;
  piccoloBlast.y = botChoose.y + 100;

  if (player.state === "stand") {
    elapsedTime += deltaTime;
    blastHeroTime += deltaTime;
    attackTime += deltaTime;
  }

  // for where botChoose travels
  botFinal.y = botChoose.y + 100;

  const distance = player.x + player.width - botChoose.x + botChoose.width;
  // console.log(distance);
  // if (distance > 608) {
  //   console.log("it here");
  // }
  // if player stand for 5 sec
  if (nextLevel) {
    elapsedTime = 0;
    blastHeroTime = 0;
    falseNextLevel();
    attackTime = 0;
  }
  if (resetVariable) {
    elapsedTime = 0;
    blastHeroTime = 0;
    resetVFunction();
    attackTime = 0;
  }

  if (attackTime >= finalAttack && distance < 200) {
    botChoose.setState(characterAnimationState.FinalAttack);
    botFinal.setState(AttackState.FinalFlash);
    botFinal.x -= 10;
  }
  //sound
  // if (botChoose.state === characterAnimationState.FinalAttack) {
  //   if (botChoose === vegita) {
  //     gameSound.finalFlashSound.play();
  //   } else {
  //     gameSound.friezaFSound.play();
  //   }
  // }
  // detect collision betn player and bot final move
  if (botChoose.state === characterAnimationState.FinalAttack) {
    if (detectCollision(player, botFinal)) {
      blastHeroTime = 0;
      attackTime = 0;
      botChoose.setState(characterAnimationState.Stand);
      botFinal.setState("");
      blastHero.y = player.y + 100;
      blastHero.x = player.x;
      friezaBlast.y = player.y + 100;
      friezaBlast.x = player.x;
      botFinal.x = botChoose.x - botChoose.width;
      botFinal.y = botChoose.y + 100;

      player.setState(characterAnimationState.HitByFinal);

      // decrease hero health
      if (botChoose === frieza) {
        friezaBlast.setState(AttackState.Blast);
        decreaseHeroHealth(10);
      }
      if (botChoose === vegita) {
        blastHero.setState(AttackState.Blast);
        decreaseHeroHealth(5);
      }
      // if (player.state === characterAnimationState.Block) {
      // decreaseHeroHealth(5);
      // }
    }
  }
  if (elapsedTime >= callInterval && distance < 300) {
    botFinal.setState("");
    botChoose.setState("walk");
    botChoose.x -= 10;
  }
  // detection collision between bot and player final move
  if (
    detectCollision2(botChoose, finalMove) &&
    player.state === characterAnimationState.FinalAttack
  ) {
    blast.y = botChoose.y + 100;
    blast.x = botChoose.x;
    piccoloBlast.y = botChoose.y + 300;
    piccoloBlast.x = botChoose.x - 500;
    finalMove.x = player.x;
    finalMove.y = player.y + 100;
    if (player === picolo) {
      piccoloBlast.setState(AttackState.Blast);
    }
    if (player === goku) {
      blast.setState(AttackState.Blast);
    }
    botChoose.setState(characterAnimationState.HitByFinal);
    finalMove.setState("");
    player.setState(characterAnimationState.Stand);
    decreaseVillainHealth(1);
    blastHeroTime = 0;
    makeFinalFalse();
  }

  //detect collision between two final attack
  // if (detectCollisionMove(finalMove, botFinal)) {
  //   attackTime = 0;
  //   console.log("it detect");

  //   finalMove.x = player.x;
  //   finalMove.y = player.y + 100;
  //   botFinal.x = botChoose.x - 400;
  //   botFinal.y = botChoose.y + 100;

  //   finalMove.setState("");
  //   botFinal.setState("");
  //   makeFinalFalse();
  //   clashEffect.setState(AttackState.Clash);
  // } else {
  //   clashEffect.setState("");
  // }
  if (blastHeroTime >= firstSecond) {
    blastHero.setState("");
    friezaBlast.setState("");
    // for villan
    blast.setState("");
    piccoloBlast.setState("");
  }
}

import { frieza } from "../characters/frieza";
import { goku } from "../characters/goku";
import { picolo } from "../characters/picolo";
import { vegita } from "../characters/vegeta";
import { Effects } from "../classes/effects";
import { AttackState } from "../enums/attacks";
import { effectSpriteImage } from "../images/preload";
import {
  canvasHeight,
  canvasWidth,
  kameHeight,
  kameImgHeight,
  kameImgWidth,
  kameWidth,
} from "../utils/contants";

// plyer
export const kamehame = new Effects(
  effectSpriteImage.kameImg,
  goku.x + goku.width / 2 - 100,
  goku.y + 200,
  kameWidth,
  kameHeight,
  kameImgWidth,
  kameImgHeight
);

export const blast = new Effects(
  effectSpriteImage.effects,
  vegita.x - vegita.width / 2 - 100,
  vegita.y,
  118,
  113,
  400,
  400
);
export const piccoloBlast = new Effects(
  effectSpriteImage.piccoloBImg,
  vegita.x - vegita.width / 2 - 100,
  vegita.y,
  159,
  135,
  400,
  400
);
export const friezaBlast = new Effects(
  effectSpriteImage.friezaBImg,
  goku.x,
  goku.y,
  159,
  135,
  400,
  400
);
export const blastHero = new Effects(
  effectSpriteImage.effects,
  goku.x,
  goku.y + 100,
  118,
  113,
  400,
  400
);
export const smallAttack = new Effects(
  effectSpriteImage.smallA,
  vegita.x - vegita.width / 2 - 100,
  vegita.y + 100,
  267,
  200,
  267,
  200
);
export const finalFlash = new Effects(
  effectSpriteImage.finalf,
  vegita.x - vegita.width,
  vegita.y + 100,
  504,
  529,
  300,
  300
);
export const deathBall = new Effects(
  effectSpriteImage.deathBallImg,
  frieza.x - frieza.width,
  frieza.y + 100,
  236,
  231,
  300,
  300
);
export const piccoloAttack = new Effects(
  effectSpriteImage.piccoloAttackImg,
  picolo.x - picolo.width / 2 - 100,
  picolo.y,
  256,
  64,
  256,
  64
);
export const clashEffect = new Effects(
  effectSpriteImage.clashEffectImg,
  canvasWidth / 2,
  canvasHeight / 2,
  202,
  197,
  500,
  500
);

// kamehame
kamehame.loadAnimation(AttackState.Kame, [{ x: 18, y: 14 }], 100);
// blast
blast.loadAnimation(AttackState.Blast, [{ x: 208, y: 535 }], 100);
piccoloBlast.loadAnimation(
  AttackState.Blast,
  [
    { x: 845, y: 68 },
    { x: 834, y: 194 },
    { x: 540, y: 462 },
    { x: 815, y: 336 },
  ],
  100
);
friezaBlast.loadAnimation(
  AttackState.Blast,
  [
    { x: 361, y: 821 },
    { x: 552, y: 787 },
    { x: 139, y: 833 },
    { x: 146, y: 579 },
  ],
  100
);
blastHero.loadAnimation(AttackState.Blast, [{ x: 208, y: 535 }], 100);

smallAttack.loadAnimation(AttackState.SmallAttack, [{ x: 260, y: 24 }], 100);

finalFlash.loadAnimation(
  AttackState.FinalFlash,
  [
    { x: 0, y: 0 },
    { x: 100, y: 100 },
  ],
  100
);
deathBall.loadAnimation(AttackState.FinalFlash, [{ x: 325, y: 752 }], 100);

piccoloAttack.loadAnimation(AttackState.Kame, [{ x: 0, y: 0 }], 100);
clashEffect.loadAnimation(
  AttackState.Clash,
  [
    { x: 13, y: 801 },
    { x: 241, y: 801 },
    { x: 482, y: 801 },
  ],
  100
);

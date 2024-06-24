import { frieza } from "../characters/frieza";
import { goku } from "../characters/goku";
import { picolo } from "../characters/picolo";
import { vegita } from "../characters/vegeta";
import { Effects } from "../classes/effects";
import {
  blastSHeight,
  blastSWidth,
  clashImgHeight,
  clashImgWidth,
  clashSHeight,
  clashSWidth,
  deathBSHeight,
  deathBSWidth,
  effectsHeight,
  effectsWidth,
  finalFSHeight,
  finalFSWidth,
  friezaBlastSHeight,
  friezaBlastSWidth,
  kameHeight,
  kameImgHeight,
  kameImgWidth,
  kameWidth,
  piccoloAttackSHeight,
  piccoloAttackSWidth,
  piccoloBlastSHeight,
  piccoloBlastSWidth,
  smallASHeight,
  smallASWidth,
} from "../constants/efftect";
import { frameRateTwo } from "../constants/frame";
import { canvasHeight, canvasWidth } from "../constants/game";
import { AttackState } from "../enums/attacks";
import { effectSpriteImage } from "../images/preload";

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
  blastSWidth,
  blastSHeight,
  effectsWidth,
  effectsHeight
);
export const piccoloBlast = new Effects(
  effectSpriteImage.piccoloBImg,
  vegita.x - vegita.width / 2 - 100,
  vegita.y,
  piccoloBlastSWidth,
  piccoloBlastSHeight,
  effectsWidth,
  effectsHeight
);
export const friezaBlast = new Effects(
  effectSpriteImage.friezaBImg,
  goku.x,
  goku.y,
  friezaBlastSWidth,
  friezaBlastSHeight,
  effectsWidth,
  effectsHeight
);
export const blastHero = new Effects(
  effectSpriteImage.effects,
  goku.x,
  goku.y + 100,
  blastSWidth,
  blastSHeight,
  effectsWidth,
  effectsHeight
);
export const smallAttack = new Effects(
  effectSpriteImage.smallA,
  vegita.x - vegita.width / 2 - 100,
  vegita.y + 100,
  smallASWidth,
  smallASHeight,
  smallASWidth,
  smallASHeight
);
export const finalFlash = new Effects(
  effectSpriteImage.finalf,
  vegita.x - vegita.width,
  vegita.y + 100,
  finalFSWidth,
  finalFSHeight,
  effectsWidth,
  effectsHeight
);
export const deathBall = new Effects(
  effectSpriteImage.deathBallImg,
  frieza.x - frieza.width,
  frieza.y + 100,
  deathBSWidth,
  deathBSHeight,
  effectsWidth,
  effectsHeight
);
export const piccoloAttack = new Effects(
  effectSpriteImage.piccoloAttackImg,
  picolo.x - picolo.width / 2 - 100,
  picolo.y,
  piccoloAttackSWidth,
  piccoloAttackSHeight,
  piccoloAttackSWidth,
  piccoloBlastSHeight
);
export const clashEffect = new Effects(
  effectSpriteImage.clashEffectImg,
  canvasWidth / 2,
  canvasHeight / 2,
  clashSWidth,
  clashSHeight,
  clashImgWidth,
  clashImgHeight
);

// kamehame
kamehame.loadAnimation(AttackState.Kame, [{ x: 18, y: 14 }], frameRateTwo);
// blast
blast.loadAnimation(AttackState.Blast, [{ x: 208, y: 535 }], frameRateTwo);
piccoloBlast.loadAnimation(
  AttackState.Blast,
  [
    { x: 845, y: 68 },
    { x: 834, y: 194 },
    { x: 540, y: 462 },
    { x: 815, y: 336 },
  ],
  frameRateTwo
);
friezaBlast.loadAnimation(
  AttackState.Blast,
  [
    { x: 361, y: 821 },
    { x: 552, y: 787 },
    { x: 139, y: 833 },
    { x: 146, y: 579 },
  ],
  frameRateTwo
);
blastHero.loadAnimation(AttackState.Blast, [{ x: 208, y: 535 }], frameRateTwo);

smallAttack.loadAnimation(
  AttackState.SmallAttack,
  [{ x: 260, y: 24 }],
  frameRateTwo
);

finalFlash.loadAnimation(
  AttackState.FinalFlash,
  [
    { x: 0, y: 0 },
    { x: 100, y: 100 },
  ],
  frameRateTwo
);
deathBall.loadAnimation(
  AttackState.FinalFlash,
  [{ x: 325, y: 752 }],
  frameRateTwo
);

piccoloAttack.loadAnimation(AttackState.Kame, [{ x: 0, y: 0 }], frameRateTwo);
clashEffect.loadAnimation(
  AttackState.Clash,
  [
    { x: 13, y: 801 },
    { x: 241, y: 801 },
    { x: 482, y: 801 },
  ],
  frameRateTwo
);

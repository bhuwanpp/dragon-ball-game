import { goku } from "../characters/goku";
import { picolo } from "../characters/picolo";
import { vegita } from "../characters/vegeta";
import { Effects } from "../classes/effects";
import {
  kameHeight,
  kameImgHeight,
  kameImgWidth,
  kameWidth,
} from "../contants";

const kameImg = new Image();
kameImg.src = "/images/kamehame.png";
const effects = new Image();
effects.src = "/images/effect.png";
const blasts = new Image();
blasts.src = "/images/effect.png";
const smallA = new Image();
smallA.src = "/images/attackeff.png";

const finalf = new Image();
finalf.src = "/images/vegetafinal.png";

const piccoloAttackImg = new Image();
piccoloAttackImg.src = "/images/picoloAttack.png";

export const kamehame = new Effects(
  kameImg,
  goku.x + goku.width / 2 - 100,
  goku.y + 200,
  kameWidth,
  kameHeight,
  kameImgWidth,
  kameImgHeight
);
export const blast = new Effects(
  effects,
  vegita.x - vegita.width / 2 - 100,
  vegita.y,
  118,
  113,
  400,
  400
);
export const blastHero = new Effects(
  effects,
  goku.x,
  goku.y + 100,
  118,
  113,
  400,
  400
);

export const smallAttack = new Effects(
  smallA,
  vegita.x - vegita.width / 2 - 100,
  vegita.y + 100,
  267,
  200,
  267,
  200
);

export const finalFlash = new Effects(
  finalf,
  vegita.x - vegita.width / 2 - 100,
  vegita.y + 100,
  504,
  529,
  300,
  300
);
export const piccoloAttack = new Effects(
  piccoloAttackImg,
  picolo.x - picolo.width / 2 - 100,
  picolo.y,
  256,
  64,
  256,
  64
);

kamehame.loadAnimation("kame", [{ x: 18, y: 14 }], 100);
blast.loadAnimation("blast", [{ x: 208, y: 535 }], 100);
blastHero.loadAnimation("blast", [{ x: 208, y: 535 }], 100);

smallAttack.loadAnimation(
  "sattack",
  [
    // { x: 532, y: 24 },
    { x: 260, y: 24 },
  ],
  100
);

finalFlash.loadAnimation(
  "final-flash",
  [
    { x: 0, y: 0 },
    {
      x: 100,
      y: 100,
    },
  ],
  100
);

piccoloAttack.loadAnimation(
  "kame",
  [
    {
      x: 0,
      y: 0,
    },
  ],
  100
);

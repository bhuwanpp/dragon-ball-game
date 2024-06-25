import { getImage } from "../utils/getAssets";

// bg
const background = getImage("/images/bg/wallpaper2.jpg");
const backgroundFirstL = getImage("/images//bg/bg.gif");
const backgroundSecondL = getImage("/images/bg/bg2.gif");
const gameOverImg = getImage("/images/logos/gameover.png");
const nextLevelImg = getImage("/images/logos/next.png");
// characters
const friezaFinal = getImage("/images/characters/friezaFinal.png");
const gokuImg = getImage("/images/characters/gokubg.png");
const picoloImg = getImage("/images/characters/picolofight.png");
const vegitaImg = getImage("/images/characters/vegeta.png");

// effects

const kameImg = getImage("/images/effects/kamehame.png");
const effects = getImage("/images/effects/effect.png");
const piccoloBImg = getImage("/images/effects/piccloEffect.png");
const friezaBImg = getImage("/images/effects/friezablast.png");
const smallA = getImage("/images/effects/attackeff.png");
const finalf = getImage("/images/effects/vegetafinal.png");
const deathBallImg = getImage("/images/effects/deathball.png");
const piccoloAttackImg = getImage("/images/effects/picoloAttack.png");
const clashEffectImg = getImage("/images/effects/clash.png");
const powerUpEffectImg = getImage("/images/effects/powerUp.png");

//choose character
const gokuChoose = getImage("/images/logos/gokucharacter.jpg");
const picoloChoose = getImage("/images/logos/picolocharacter.jpg");

export const playerSpriteImage: { [key: string]: HTMLImageElement } = {
  friezaFinal,
  gokuImg,
  picoloImg,
  vegitaImg,
};
export const effectSpriteImage: { [key: string]: HTMLImageElement } = {
  kameImg,
  effects,
  piccoloBImg,
  friezaBImg,
  smallA,
  finalf,
  deathBallImg,
  piccoloAttackImg,
  clashEffectImg,
  powerUpEffectImg,
};

export const gameSprite: { [key: string]: HTMLImageElement } = {
  background,
  backgroundFirstL,
  backgroundSecondL,
  gameOverImg,
  nextLevelImg,
};

export const chooseImage: { [key: string]: HTMLImageElement } = {
  gokuChoose,
  picoloChoose,
};

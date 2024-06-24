import { Bots } from "../classes/bot";
import {
  characterHeight,
  characterWidth,
  friezaSpriteHeight,
  friezaSpriteWidth,
} from "../constants/character";
import { frameRateOneS, frameRateTwo } from "../constants/frame";
import { canvasHeight, canvasWidth } from "../constants/game";
import { characterAnimationState } from "../enums/character";
import { playerSpriteImage } from "../images/preload";

// frieza
export const frieza = new Bots(
  playerSpriteImage.friezaFinal,
  canvasWidth - 20,
  canvasHeight - characterHeight,
  friezaSpriteWidth,
  friezaSpriteHeight,
  characterWidth,
  characterHeight
);
// stand animation
frieza.loadAnimation(
  characterAnimationState.Stand,
  [
    { x: friezaSpriteWidth, y: 0 },
    { x: 2 * friezaSpriteWidth, y: 0 },
  ],
  frameRateTwo //200
);
// walk
frieza.loadAnimation(
  characterAnimationState.Walk,
  [
    { x: 2 * friezaSpriteWidth, y: 0 * friezaSpriteWidth },
    { x: 3 * friezaSpriteWidth, y: 0 * friezaSpriteHeight },
  ],
  frameRateTwo
);
// walk back
frieza.loadAnimation(
  characterAnimationState.Back,
  [
    { x: 1 * friezaSpriteWidth, y: 3 * friezaSpriteHeight },
    { x: 0 * friezaSpriteWidth, y: 3 * friezaSpriteHeight },
  ],
  frameRateTwo
);

frieza.loadAnimation(
  characterAnimationState.Kick,
  [
    { x: 4 * friezaSpriteWidth, y: 5 * friezaSpriteHeight },
    { x: 5 * friezaSpriteWidth, y: 5 * friezaSpriteHeight },
  ],
  frameRateTwo
);
// fist punch
frieza.loadAnimation(
  characterAnimationState.Fist,
  [
    { x: 3 * friezaSpriteWidth, y: 3 * friezaSpriteHeight },
    { x: 6 * friezaSpriteWidth, y: 3 * friezaSpriteHeight },
  ],
  frameRateTwo
);
// block
frieza.loadAnimation(
  characterAnimationState.Hit,
  [
    { x: 3 * friezaSpriteWidth, y: friezaSpriteHeight },
    { x: 4 * friezaSpriteWidth, y: friezaSpriteHeight },
  ],
  frameRateTwo
);
frieza.loadAnimation(
  characterAnimationState.Block,
  [{ x: 2 * friezaSpriteWidth, y: 1 * friezaSpriteHeight }],
  frameRateTwo
);
frieza.loadAnimation(
  characterAnimationState.HitByFinal,
  [
    { x: 5 * friezaSpriteWidth, y: friezaSpriteHeight },
    { x: 6 * friezaSpriteWidth, y: friezaSpriteHeight },
  ],
  frameRateTwo
);

// final blow
frieza.loadAnimation(
  characterAnimationState.FinalAttack,
  [
    { x: 2 * friezaSpriteWidth, y: 4 * friezaSpriteHeight },
    { x: 6 * friezaSpriteWidth, y: 4 * friezaSpriteHeight },
  ],
  frameRateOneS //1000
);

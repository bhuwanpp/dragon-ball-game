import { Character } from "../classes/character";
import { characterAnimationState } from "../enums/character";
import { playerSpriteImage } from "../images/preload";
import {
  canvasHeight,
  characterHeight,
  characterWidth,
  picoloHeight,
  picoloWidth,
} from "../utils/contants";

// picolo
export const picolo = new Character(
  playerSpriteImage.picoloImg,
  20,
  canvasHeight - characterHeight,
  picoloWidth,
  picoloHeight,
  characterWidth - 100,
  characterHeight
);
// stand animation
picolo.loadAnimation(
  characterAnimationState.Stand,
  [
    { x: picoloWidth, y: 0 },
    { x: 3 * picoloWidth, y: 10 * picoloHeight },
  ],
  800
);
// walk
picolo.loadAnimation(
  characterAnimationState.Walk,
  [{ x: 4 * picoloWidth, y: 3 * picoloHeight }],
  200
);
// walk back
picolo.loadAnimation(
  characterAnimationState.Back,
  [{ x: 0, y: 3 * picoloHeight }],
  200
);
// kick
picolo.loadAnimation(
  characterAnimationState.Kick,
  [
    { x: 0 * picoloWidth, y: 5 * picoloHeight },
    { x: 2 * picoloWidth, y: 5 * picoloHeight },
  ],
  200
);
// fist punch
picolo.loadAnimation(
  characterAnimationState.Fist,
  [
    { x: 0 * picoloWidth, y: 4 * picoloHeight },
    { x: 1 * picoloWidth, y: 4 * picoloHeight },
  ],
  200
);

// block
picolo.loadAnimation(
  characterAnimationState.Block,
  [{ x: 3 * picoloWidth, y: picoloHeight }],
  300
);

picolo.loadAnimation(
  characterAnimationState.Hit,
  [
    { x: 4 * picoloWidth, y: picoloHeight },
    { x: 5 * picoloWidth, y: picoloHeight },
    { x: 6 * picoloWidth, y: picoloHeight },
  ],
  200
);
picolo.loadAnimation(
  characterAnimationState.HitByFinal,
  [
    { x: 5 * picoloWidth, y: picoloHeight },
    { x: 6 * picoloWidth, y: picoloHeight },
    { x: 0, y: 2 * picoloHeight },
  ],
  200
);
// final blow
picolo.loadAnimation(
  characterAnimationState.FinalAttack,
  [
    { x: 6 * picoloWidth, y: 6 * picoloHeight },
    { x: 0 * picoloWidth, y: 7 * picoloHeight },
  ],
  1000
);

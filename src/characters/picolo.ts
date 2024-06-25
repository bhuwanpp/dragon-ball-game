import { Character } from "../classes/character";
import {
  characterHeight,
  characterWidth,
  picoloHeight,
  picoloWidth,
} from "../constants/character";
import { frameRateFive, frameRateTwo } from "../constants/frame";
import { canvasHeight } from "../constants/game";
import { characterAnimationState } from "../enums/character";
import { playerSpriteImage } from "../images/preload";

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
  frameRateFive
);
// walk
picolo.loadAnimation(
  characterAnimationState.Walk,
  [
    { x: 2 * picoloWidth, y: 0 * picoloHeight },
    { x: 3 * picoloWidth, y: 0 * picoloHeight },
  ],
  frameRateTwo
);
// walk back
picolo.loadAnimation(
  characterAnimationState.Back,
  [
    { x: 2 * picoloWidth, y: 0 * picoloHeight },
    { x: 3 * picoloWidth, y: 0 * picoloHeight },
  ],
  frameRateTwo
);
// kick
picolo.loadAnimation(
  characterAnimationState.Kick,
  [
    { x: 0 * picoloWidth, y: 5 * picoloHeight },
    { x: 2 * picoloWidth, y: 5 * picoloHeight },
  ],
  frameRateTwo
);
// fist punch
picolo.loadAnimation(
  characterAnimationState.Fist,
  [
    { x: 0 * picoloWidth, y: 4 * picoloHeight },
    { x: 1 * picoloWidth, y: 4 * picoloHeight },
  ],
  frameRateTwo
);

// block
picolo.loadAnimation(
  characterAnimationState.Block,
  [{ x: 3 * picoloWidth, y: picoloHeight }],
  frameRateTwo
);

picolo.loadAnimation(
  characterAnimationState.Hit,
  [
    { x: 4 * picoloWidth, y: picoloHeight },
    { x: 5 * picoloWidth, y: picoloHeight },
    { x: 6 * picoloWidth, y: picoloHeight },
  ],
  frameRateTwo
);
picolo.loadAnimation(
  characterAnimationState.HitByFinal,
  [
    { x: 5 * picoloWidth, y: picoloHeight },
    { x: 6 * picoloWidth, y: picoloHeight },
    { x: 0, y: 2 * picoloHeight },
  ],
  frameRateTwo
);
// final blow
picolo.loadAnimation(
  characterAnimationState.FinalAttack,
  [
    { x: 6 * picoloWidth, y: 6 * picoloHeight },
    { x: 0 * picoloWidth, y: 7 * picoloHeight },
  ],
  frameRateFive
);

// power up
picolo.loadAnimation(
  characterAnimationState.PowerUp,
  [
    { x: 6 * picoloWidth, y: 8 * picoloHeight },
    { x: 0 * picoloWidth, y: 9 * picoloHeight },
    { x: 1 * picoloWidth, y: 9 * picoloHeight },
  ],
  frameRateFive
);

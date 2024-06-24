import { Character } from "../classes/character";
import {
  characterHeight,
  characterWidth,
  charSpriteHeight,
  charSpriteWidth,
} from "../constants/character";
import { frameRateFive, frameRateOneS, frameRateTwo } from "../constants/frame";
import { canvasHeight } from "../constants/game";
import { characterAnimationState } from "../enums/character";
import { playerSpriteImage } from "../images/preload";

export const goku = new Character(
  playerSpriteImage.gokuImg,
  0,
  canvasHeight - characterHeight,
  charSpriteWidth,
  charSpriteHeight,
  characterWidth,
  characterHeight
);

// stand animation
goku.loadAnimation(
  characterAnimationState.Stand,
  [
    { x: charSpriteWidth, y: 0 },
    { x: 0, y: 9 * charSpriteHeight },
  ],
  frameRateFive
);
// walk
goku.loadAnimation(
  characterAnimationState.Walk,
  [
    { x: 2 * charSpriteWidth, y: 0 * charSpriteHeight },
    { x: 3 * charSpriteWidth, y: 0 * charSpriteHeight },
    // { x: 3 * charSpriteWidth, y: 3 * charSpriteHeight },
  ],
  frameRateTwo
);
// walk back
goku.loadAnimation(
  characterAnimationState.Back,
  [
    { x: 2 * charSpriteWidth, y: 0 * charSpriteHeight },
    { x: 3 * charSpriteWidth, y: 0 * charSpriteHeight },
    // { x: 0, y: 3 * charSpriteHeight },
  ],

  frameRateTwo
);
// kick
goku.loadAnimation(
  characterAnimationState.Kick,
  [
    { x: 4 * charSpriteWidth, y: 5 * charSpriteHeight },
    { x: 5 * charSpriteWidth, y: 5 * charSpriteHeight },
  ],
  frameRateTwo
);
// fist punch
goku.loadAnimation(
  characterAnimationState.Fist,
  [
    { x: 3 * charSpriteWidth, y: 3 * charSpriteHeight },
    { x: 6 * charSpriteWidth, y: 3 * charSpriteHeight },
  ],
  frameRateTwo
);

// block
goku.loadAnimation(
  characterAnimationState.Block,
  [{ x: 3 * charSpriteWidth, y: charSpriteHeight }],
  frameRateTwo
);

goku.loadAnimation(
  characterAnimationState.Hit,
  [
    { x: 3 * charSpriteWidth, y: charSpriteHeight },
    { x: 4 * charSpriteWidth, y: charSpriteHeight },
  ],
  frameRateTwo
);
goku.loadAnimation(
  characterAnimationState.HitByFinal,
  [
    { x: 5 * charSpriteWidth, y: charSpriteHeight },
    { x: 6 * charSpriteWidth, y: charSpriteHeight },
    { x: 0, y: 2 * charSpriteHeight },
  ],
  frameRateTwo
);
// final blow
goku.loadAnimation(
  characterAnimationState.FinalAttack,
  [
    { x: 4 * charSpriteWidth, y: 6 * charSpriteHeight },
    { x: 5 * charSpriteWidth, y: 6 * charSpriteHeight },
    { x: 6 * charSpriteWidth, y: 6 * charSpriteHeight },
  ],
  frameRateOneS
);

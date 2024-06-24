import { Bots } from "../classes/bot";
import {
  characterHeight,
  characterWidth,
  enemySpriteHeight,
  enemySpriteWidth,
} from "../constants/character";
import { frameRateFive, frameRateOneS, frameRateTwo } from "../constants/frame";
import { canvasHeight, canvasWidth } from "../constants/game";
import { characterAnimationState } from "../enums/character";
import { playerSpriteImage } from "../images/preload";

// vegita
export const vegita = new Bots(
  playerSpriteImage.vegitaImg,
  canvasWidth - 10,
  canvasHeight - characterHeight,
  enemySpriteWidth,
  enemySpriteHeight,
  characterWidth,
  characterHeight
);

// stand animation
vegita.loadAnimation(
  characterAnimationState.Stand,
  [
    { x: enemySpriteWidth, y: 0 },
    { x: 2 * enemySpriteWidth, y: 0 },
  ],
  frameRateFive
);
// walk
vegita.loadAnimation(
  characterAnimationState.Walk,
  [
    { x: 0 * enemySpriteWidth, y: 3 * enemySpriteHeight },
    { x: 3 * enemySpriteWidth, y: 3 * enemySpriteHeight },
  ],
  frameRateTwo
);
// walk back
vegita.loadAnimation(
  characterAnimationState.Back,
  [
    { x: 1 * enemySpriteWidth, y: 3 * enemySpriteHeight },
    { x: 0 * enemySpriteWidth, y: 3 * enemySpriteHeight },
  ],
  frameRateTwo
);

vegita.loadAnimation(
  characterAnimationState.Kick,
  [
    { x: 4 * enemySpriteWidth, y: 5 * enemySpriteHeight },
    { x: 5 * enemySpriteWidth, y: 5 * enemySpriteHeight },
  ],
  frameRateTwo
);
// fist punch
vegita.loadAnimation(
  characterAnimationState.Fist,
  [
    { x: 3 * enemySpriteWidth, y: 3 * enemySpriteHeight },
    { x: 6 * enemySpriteWidth, y: 3 * enemySpriteHeight },
  ],
  frameRateTwo
);
// block
vegita.loadAnimation(
  characterAnimationState.Block,
  [{ x: enemySpriteWidth, y: 6 * enemySpriteHeight }],
  frameRateTwo
);
// hit
vegita.loadAnimation(
  characterAnimationState.Hit,
  [
    { x: 3 * enemySpriteWidth, y: enemySpriteHeight },
    { x: 4 * enemySpriteWidth, y: enemySpriteHeight },
  ],
  frameRateTwo
);
vegita.loadAnimation(
  characterAnimationState.HitByFinal,
  [
    { x: 6 * enemySpriteWidth, y: enemySpriteHeight },
    { x: 0, y: 2 * enemySpriteHeight },
  ],
  frameRateTwo
);
// final blow
vegita.loadAnimation(
  characterAnimationState.FinalAttack,
  [
    { x: 2 * enemySpriteWidth, y: 9 * enemySpriteHeight },
    { x: 3 * enemySpriteWidth, y: 9 * enemySpriteHeight },
    { x: 4 * enemySpriteWidth, y: 9 * enemySpriteHeight },
  ],
  frameRateOneS
);

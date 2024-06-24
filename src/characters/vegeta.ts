import { Bots } from "../classes/bot";
import { characterAnimationState } from "../enums/character";
import { playerSpriteImage } from "../images/preload";
import {
  canvasHeight,
  canvasWidth,
  characterHeight,
  characterWidth,
  enemySpriteHeight,
  enemySpriteWidth,
} from "../utils/contants";
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
  500
);
// walk
vegita.loadAnimation(
  characterAnimationState.Walk,
  [
    { x: 0 * enemySpriteWidth, y: 3 * enemySpriteHeight },
    { x: 3 * enemySpriteWidth, y: 3 * enemySpriteHeight },
  ],
  200
);
// walk back
vegita.loadAnimation(
  characterAnimationState.Back,
  [
    { x: 1 * enemySpriteWidth, y: 3 * enemySpriteHeight },
    { x: 0 * enemySpriteWidth, y: 3 * enemySpriteHeight },
  ],
  200
);

vegita.loadAnimation(
  characterAnimationState.Kick,
  [
    { x: 4 * enemySpriteWidth, y: 5 * enemySpriteHeight },
    { x: 5 * enemySpriteWidth, y: 5 * enemySpriteHeight },
  ],
  200
);
// fist punch
vegita.loadAnimation(
  characterAnimationState.Fist,
  [
    { x: 3 * enemySpriteWidth, y: 3 * enemySpriteHeight },
    { x: 6 * enemySpriteWidth, y: 3 * enemySpriteHeight },
  ],
  200
);
// block
vegita.loadAnimation(
  characterAnimationState.Block,
  [{ x: enemySpriteWidth, y: 6 * enemySpriteHeight }],
  200
);
// hit
vegita.loadAnimation(
  characterAnimationState.Hit,
  [
    { x: 3 * enemySpriteWidth, y: enemySpriteHeight },
    { x: 4 * enemySpriteWidth, y: enemySpriteHeight },
  ],
  200
);
vegita.loadAnimation(
  characterAnimationState.HitByFinal,
  [
    { x: 6 * enemySpriteWidth, y: enemySpriteHeight },
    { x: 0, y: 2 * enemySpriteHeight },
  ],
  200
);
// final blow
vegita.loadAnimation(
  characterAnimationState.FinalAttack,
  [
    { x: 2 * enemySpriteWidth, y: 9 * enemySpriteHeight },
    { x: 3 * enemySpriteWidth, y: 9 * enemySpriteHeight },
    { x: 4 * enemySpriteWidth, y: 9 * enemySpriteHeight },
  ],
  1000
);

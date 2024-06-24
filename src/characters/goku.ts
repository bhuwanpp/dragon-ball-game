import { Character } from "../classes/character";
import { characterAnimationState } from "../enums/character";
import { playerSpriteImage } from "../images/preload";
import {
  canvasHeight,
  characterHeight,
  characterWidth,
  charSpriteHeight,
  charSpriteWidth,
} from "../utils/contants";
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
  800
);
// walk
goku.loadAnimation(
  characterAnimationState.Walk,
  [{ x: 3 * charSpriteWidth, y: 3 * charSpriteHeight }],
  200
);
// walk back
goku.loadAnimation(
  characterAnimationState.Back,
  [{ x: 0, y: 3 * charSpriteHeight }],
  200
);
// kick
goku.loadAnimation(
  characterAnimationState.Kick,
  [
    { x: 4 * charSpriteWidth, y: 5 * charSpriteHeight },
    { x: 5 * charSpriteWidth, y: 5 * charSpriteHeight },
  ],
  200
);
// fist punch
goku.loadAnimation(
  characterAnimationState.Fist,
  [
    { x: 3 * charSpriteWidth, y: 3 * charSpriteHeight },
    { x: 6 * charSpriteWidth, y: 3 * charSpriteHeight },
  ],
  200
);

// block
goku.loadAnimation(
  characterAnimationState.Block,
  [{ x: 3 * charSpriteWidth, y: charSpriteHeight }],
  300
);

goku.loadAnimation(
  characterAnimationState.Hit,
  [
    { x: 3 * charSpriteWidth, y: charSpriteHeight },
    { x: 4 * charSpriteWidth, y: charSpriteHeight },
  ],
  200
);
goku.loadAnimation(
  characterAnimationState.HitByFinal,
  [
    { x: 5 * charSpriteWidth, y: charSpriteHeight },
    { x: 6 * charSpriteWidth, y: charSpriteHeight },
    { x: 0, y: 2 * charSpriteHeight },
  ],
  200
);
// final blow
goku.loadAnimation(
  characterAnimationState.FinalAttack,
  [
    { x: 4 * charSpriteWidth, y: 6 * charSpriteHeight },
    { x: 5 * charSpriteWidth, y: 6 * charSpriteHeight },
    { x: 6 * charSpriteWidth, y: 6 * charSpriteHeight },
  ],
  1000
);

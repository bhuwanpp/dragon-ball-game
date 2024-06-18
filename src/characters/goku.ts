import { Character } from "../classes/character";
import {
  canvasHeight,
  characterHeight,
  characterWidth,
  charSpriteHeight,
  charSpriteWidth,
} from "../contants";

const spriteSheet = new Image();
spriteSheet.src = "/images/gokubg.png";

// goku
export const goku = new Character(
  spriteSheet,
  0,
  canvasHeight - characterHeight,
  charSpriteWidth,
  charSpriteHeight,
  characterWidth,
  characterHeight
);

// stand animation
goku.loadAnimation(
  "stand",
  [
    { x: charSpriteWidth, y: 0 },
    { x: 0, y: 9 * charSpriteHeight },
  ],
  500
);
// walk
goku.loadAnimation(
  "walk",
  [
    // { x: 0, y: 98 },
    { x: 0, y: 3 * charSpriteHeight },
    { x: 3 * charSpriteWidth, y: 3 * charSpriteHeight },
  ],
  200
);
// walk back
goku.loadAnimation(
  "back",
  [
    { x: 1 * characterWidth, y: 3 * charSpriteHeight },
    { x: 0 * charSpriteWidth, y: 3 * charSpriteHeight },
  ],
  200
);
// kick
goku.loadAnimation(
  "kick",
  [
    { x: 4 * charSpriteWidth, y: 5 * charSpriteHeight },
    { x: 5 * charSpriteWidth, y: 5 * charSpriteHeight },
  ],
  200
);
// fist punch
goku.loadAnimation(
  "fist",
  [
    { x: 3 * charSpriteWidth, y: 3 * charSpriteHeight },
    { x: 6 * charSpriteWidth, y: 3 * charSpriteHeight },
  ],
  200
);
// block
goku.loadAnimation(
  "hit",
  [
    { x: 3 * charSpriteWidth, y: charSpriteHeight },
    { x: 4 * charSpriteWidth, y: charSpriteHeight },
  ],
  200
);
goku.loadAnimation(
  "hitFlash",
  [
    { x: 5 * charSpriteWidth, y: charSpriteHeight },
    { x: 6 * charSpriteWidth, y: charSpriteHeight },
    { x: 0, y: 2 * charSpriteHeight },
  ],
  200
);
// final blow
goku.loadAnimation(
  "final",
  [
    { x: 4 * charSpriteWidth, y: 6 * charSpriteHeight },
    { x: 5 * charSpriteWidth, y: 6 * charSpriteHeight },
    { x: 6 * charSpriteWidth, y: 6 * charSpriteHeight },
  ],
  1000
);

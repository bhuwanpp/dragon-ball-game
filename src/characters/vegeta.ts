import { Vegita } from "../classes/vegitaClass";
import {
  canvasHeight,
  canvasWidth,
  characterHeight,
  characterWidth,
  charSpriteHeight,
  enemySpriteHeight,
  enemySpriteWidth,
} from "../contants";

const spriteSheet = new Image();
spriteSheet.src = "/images/SS_Vegetanobg.png";

// goku
export const vegita = new Vegita(
  spriteSheet,
  canvasWidth - 10,
  canvasHeight - characterHeight,
  enemySpriteWidth,
  enemySpriteHeight,
  characterWidth,
  characterHeight
);

// stand animation
vegita.loadAnimation(
  "stand",
  [
    { x: enemySpriteWidth, y: 0 },
    { x: 2 * enemySpriteHeight, y: 0 },
  ],
  500
);
// walk
vegita.loadAnimation(
  "walk",
  [
    { x: 0 * enemySpriteWidth, y: 3 * charSpriteHeight },
    { x: 3 * enemySpriteWidth, y: 3 * charSpriteHeight },
  ],
  200
);
// walk back
vegita.loadAnimation(
  "back",
  [
    { x: 1 * enemySpriteWidth, y: 3 * enemySpriteHeight },
    { x: 0 * enemySpriteWidth, y: 3 * enemySpriteHeight },
  ],
  200
);

vegita.loadAnimation(
  "kick",
  [
    { x: 4 * enemySpriteWidth, y: 5 * enemySpriteHeight },
    { x: 5 * enemySpriteWidth, y: 5 * enemySpriteHeight },
  ],
  200
);
// fist punch
vegita.loadAnimation(
  "fist",
  [
    { x: 3 * enemySpriteWidth, y: 3 * enemySpriteHeight },
    { x: 6 * enemySpriteWidth, y: 3 * enemySpriteHeight },
  ],
  200
);
// block
vegita.loadAnimation(
  "hit",
  [
    { x: 3 * enemySpriteWidth, y: enemySpriteHeight },
    { x: 4 * enemySpriteWidth, y: enemySpriteHeight },
  ],
  200
);
vegita.loadAnimation(
  "block",
  [
    { x: enemySpriteWidth, y: 6 * enemySpriteHeight },
    // { x: 4 * enemySpriteWidth, y: enemySpriteHeight },
  ],
  200
);
vegita.loadAnimation(
  "hitKame",
  [
    { x: 6 * enemySpriteWidth, y: enemySpriteHeight },
    { x: 0, y: 2 * enemySpriteHeight },
  ],
  200
);

// final blow
vegita.loadAnimation(
  "final",
  [
    { x: 2 * enemySpriteWidth, y: 9 * enemySpriteHeight },
    { x: 3 * enemySpriteWidth, y: 9 * enemySpriteHeight },
    { x: 4 * enemySpriteWidth, y: 9 * enemySpriteHeight },
  ],
  1000
);

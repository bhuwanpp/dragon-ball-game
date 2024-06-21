import { Bots } from "../classes/bot";
import {
  canvasHeight,
  canvasWidth,
  characterHeight,
  characterWidth,
  friezaSpriteHeight,
  friezaSpriteWidth,
} from "../contants";

const spriteSheet = new Image();
spriteSheet.src = "/images/friezaFinal.png";

export const frieza = new Bots(
  spriteSheet,
  canvasWidth - 20,
  canvasHeight - characterHeight,
  friezaSpriteWidth,
  friezaSpriteHeight,
  characterWidth,
  characterHeight
);

// stand animation
frieza.loadAnimation(
  "stand",
  [
    { x: friezaSpriteWidth, y: 0 },
    { x: 2 * friezaSpriteWidth, y: 0 },
  ],
  500
);
// walk
frieza.loadAnimation(
  "walk",
  [
    { x: 2 * friezaSpriteWidth, y: 0 * friezaSpriteWidth },
    { x: 3 * friezaSpriteWidth, y: 0 * friezaSpriteHeight },
  ],
  200
);
// walk back
frieza.loadAnimation(
  "back",
  [
    { x: 1 * friezaSpriteWidth, y: 3 * friezaSpriteHeight },
    { x: 0 * friezaSpriteWidth, y: 3 * friezaSpriteHeight },
  ],
  200
);

frieza.loadAnimation(
  "kick",
  [
    { x: 4 * friezaSpriteWidth, y: 5 * friezaSpriteHeight },
    { x: 5 * friezaSpriteWidth, y: 5 * friezaSpriteHeight },
  ],
  200
);
// fist punch
frieza.loadAnimation(
  "fist",
  [
    { x: 3 * friezaSpriteWidth, y: 3 * friezaSpriteHeight },
    { x: 6 * friezaSpriteWidth, y: 3 * friezaSpriteHeight },
  ],
  200
);
// block
frieza.loadAnimation(
  "hit",
  [
    { x: 3 * friezaSpriteWidth, y: friezaSpriteHeight },
    { x: 4 * friezaSpriteWidth, y: friezaSpriteHeight },
  ],
  200
);
frieza.loadAnimation(
  "block",
  [{ x: friezaSpriteWidth, y: 6 * friezaSpriteHeight }],
  200
);
frieza.loadAnimation(
  "hitKame",
  [
    { x: 6 * friezaSpriteWidth, y: friezaSpriteHeight },
    { x: 0, y: 2 * friezaSpriteHeight },
  ],
  200
);

// final blow
frieza.loadAnimation(
  "final",
  [
    { x: 2 * friezaSpriteWidth, y: 4 * friezaSpriteHeight },
    { x: 6 * friezaSpriteWidth, y: 4 * friezaSpriteHeight },
  ],
  1000
);

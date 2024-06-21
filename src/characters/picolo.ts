import { Character } from "../classes/character";
import {
  canvasHeight,
  characterHeight,
  characterWidth,
  picoloHeight,
  picoloWidth,
} from "../contants";

const spriteSheet = new Image();
spriteSheet.src = "/images/picolofight.png";

// goku
export const picolo = new Character(
  spriteSheet,
  20,
  canvasHeight - characterHeight,
  picoloWidth,
  picoloHeight,
  characterWidth - 100,
  characterHeight
);

// stand animation
picolo.loadAnimation(
  "stand",
  [
    { x: picoloWidth, y: 0 },
    { x: 3 * picoloWidth, y: 10 * picoloHeight },
  ],
  800
);
// walk
picolo.loadAnimation(
  "walk",
  [{ x: 4 * picoloWidth, y: 3 * picoloHeight }],
  200
);
// walk back
picolo.loadAnimation("back", [{ x: 0, y: 3 * picoloHeight }], 200);
// kick
picolo.loadAnimation(
  "kick",
  [
    { x: 0 * picoloWidth, y: 5 * picoloHeight },
    { x: 2 * picoloWidth, y: 5 * picoloHeight },
  ],
  200
);
// fist punch
picolo.loadAnimation(
  "fist",
  [
    { x: 0 * picoloWidth, y: 4 * picoloHeight },
    { x: 1 * picoloWidth, y: 4 * picoloHeight },
  ],
  200
);

// block
picolo.loadAnimation(
  "block",
  [
    { x: 3 * picoloWidth, y: picoloHeight },
    // { x: 5 * picoloWidth, y: 0 },
  ],
  300
);

picolo.loadAnimation(
  "hit",
  [
    { x: 4 * picoloWidth, y: picoloHeight },
    { x: 5 * picoloWidth, y: picoloHeight },
    { x: 6 * picoloWidth, y: picoloHeight },
  ],
  200
);
picolo.loadAnimation(
  "hitFlash",
  [
    { x: 5 * picoloWidth, y: picoloHeight },
    { x: 6 * picoloWidth, y: picoloHeight },
    { x: 0, y: 2 * picoloHeight },
  ],
  200
);
// final blow
picolo.loadAnimation(
  "final",
  [
    { x: 6 * picoloWidth, y: 6 * picoloHeight },
    { x: 0 * picoloWidth, y: 7 * picoloHeight },
  ],
  1000
);

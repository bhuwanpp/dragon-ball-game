import { Bots } from "../classes/bot";
import { characterAnimationState } from "../enums/character";
import { playerSpriteImage } from "../images/preload";
import {
  canvasHeight,
  canvasWidth,
  characterHeight,
  characterWidth,
  friezaSpriteHeight,
  friezaSpriteWidth,
} from "../utils/contants";
// frieza
export const frieza = new Bots(
  playerSpriteImage.friezaFinal,
  canvasWidth - 20,
  canvasHeight - characterHeight,
  friezaSpriteWidth,
  friezaSpriteHeight,
  characterWidth,
  characterHeight
);
// stand animation
frieza.loadAnimation(
  characterAnimationState.Stand,
  [
    { x: friezaSpriteWidth, y: 0 },
    { x: 2 * friezaSpriteWidth, y: 0 },
  ],
  500
);
// walk
frieza.loadAnimation(
  characterAnimationState.Walk,
  [
    { x: 2 * friezaSpriteWidth, y: 0 * friezaSpriteWidth },
    { x: 3 * friezaSpriteWidth, y: 0 * friezaSpriteHeight },
  ],
  200
);
// walk back
frieza.loadAnimation(
  characterAnimationState.Back,
  [
    { x: 1 * friezaSpriteWidth, y: 3 * friezaSpriteHeight },
    { x: 0 * friezaSpriteWidth, y: 3 * friezaSpriteHeight },
  ],
  200
);

frieza.loadAnimation(
  characterAnimationState.Kick,
  [
    { x: 4 * friezaSpriteWidth, y: 5 * friezaSpriteHeight },
    { x: 5 * friezaSpriteWidth, y: 5 * friezaSpriteHeight },
  ],
  200
);
// fist punch
frieza.loadAnimation(
  characterAnimationState.Fist,
  [
    { x: 3 * friezaSpriteWidth, y: 3 * friezaSpriteHeight },
    { x: 6 * friezaSpriteWidth, y: 3 * friezaSpriteHeight },
  ],
  200
);
// block
frieza.loadAnimation(
  characterAnimationState.Hit,
  [
    { x: 3 * friezaSpriteWidth, y: friezaSpriteHeight },
    { x: 4 * friezaSpriteWidth, y: friezaSpriteHeight },
  ],
  200
);
frieza.loadAnimation(
  characterAnimationState.Block,
  [{ x: 2 * friezaSpriteWidth, y: 1 * friezaSpriteHeight }],
  200
);
frieza.loadAnimation(
  characterAnimationState.HitByFinal,
  [
    { x: 5 * friezaSpriteWidth, y: friezaSpriteHeight },
    { x: 6 * friezaSpriteWidth, y: friezaSpriteHeight },
  ],
  200
);

// final blow
frieza.loadAnimation(
  characterAnimationState.FinalAttack,
  [
    { x: 2 * friezaSpriteWidth, y: 4 * friezaSpriteHeight },
    { x: 6 * friezaSpriteWidth, y: 4 * friezaSpriteHeight },
  ],
  1000
);

import { getImage } from "../utils/getAssets";

const background = getImage("/images/wallpaper2.jpg");

export const playerSpriteImage: { [key: string]: HTMLImageElement } = {};

export const gameSprite: { [key: string]: HTMLImageElement } = {
  background,
};

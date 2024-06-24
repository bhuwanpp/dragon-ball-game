import { getAudio } from "../utils/getAssets";

const gokuFist = getAudio("/audio//goku/fist.wav");
const gokuKick = getAudio("/audio/goku/kick.wav");
const gokuWin = getAudio("/audio/goku/win.wav");
const kameSound = getAudio("/audio/goku/kamefast.wav");
const walkSound = getAudio("/audio/game/walk.wav");
const piccoloFist = getAudio("/audio/piccolo/fist.wav");
const piccoloFinal = getAudio("/audio/piccolo/final.wav");
const piccoloWin = getAudio("/audio/piccolo/win.wav");

const finalFlashSound = getAudio("/audio/vegita/final.wav");
const friezaFSound = getAudio("/audio/frieza/death.wav");
const friezaFist = getAudio("/audio/frieza/fist.wav");
const vegitaWin = getAudio("/audio/vegita/win.wav");
const vegitaFist = getAudio("/audio/vegita/fist.wav");
const friezaWin = getAudio("/audio/frieza/win.wav");

const firstIntro = getAudio("/audio/game/theme.ogg");

export const playerSound: { [key: string]: HTMLAudioElement } = {
  walkSound,
};

export const gameSound: { [key: string]: HTMLAudioElement } = {
  firstIntro,
  finalFlashSound,
  friezaFSound,
  vegitaWin,
  friezaWin,
  vegitaFist,
  friezaFist,
};
export const gokuSound: { [key: string]: HTMLAudioElement } = {
  gokuFist,
  gokuKick,
  kameSound,
  gokuWin,
};
export const piccoloSound: { [key: string]: HTMLAudioElement } = {
  piccoloFist,
  piccoloFinal,
  piccoloWin,
};

import { goku } from "./characters/goku";
import { vegita } from "./characters/vegeta";
import { blast, finalFlash, kamehame } from "./effects/kagehame";

const callInterval = 6000;
const ThreeSecond = 12000;
let elapsedTime = 0;

export function gameUpdate(deltaTime: number) {
  elapsedTime += deltaTime;

  const distance = goku.x + goku.width - vegita.x + vegita.width;
  const effectDistance = goku.x + goku.width - finalFlash.x + finalFlash.width;

  if (elapsedTime >= callInterval && goku.state === "stand" && distance < 240) {
    vegita.setState("final");
    finalFlash.setState("final-flash");
    finalFlash.x -= 6;
  } else {
    finalFlash.x = vegita.x - vegita.width / 2 - 100;
    finalFlash.y = vegita.y + 100;
  }

  if (effectDistance > 700) {
    finalFlash.setState("");
    goku.setState("hitFlash");
    blast.setState("blast");

    if (elapsedTime >= ThreeSecond) {
      elapsedTime = 0;
    }
  }
}

export function blastFunction() {
  const kameDistance = vegita.x - kamehame.x;
  blast.setState("");
  if (kameDistance < 550) {
    blast.setState("blast");
    vegita.setState("hitKame");
    kamehame.setState("");
  }
}

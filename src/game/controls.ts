let left: boolean = false;
let right: boolean = false;
let up: boolean = false;
let down: boolean = false;
let kick: boolean = false;
let fist: boolean = false;
let block: boolean = false;
export let final = false;
export function makeFinalFalse() {
  final = false;
}

document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

function press(e: KeyboardEvent) {
  switch (e.key.toLowerCase()) {
    case "arrowleft":
    case "a":
      left = true;
      break;
    case "arrowright":
    case "d":
      right = true;
      break;
    case "arrowup":
    case "w":
      up = true;
      break;
    case "arrowdown":
    case "z":
      down = true;
      break;
    case "b":
      block = true;
      break;
    case "k":
      kick = true;
      break;
    case "f":
      fist = true;
      break;
    case "l":
      final = true;
      break;
  }
}

function release(e: KeyboardEvent) {
  switch (e.key.toLowerCase()) {
    case "arrowleft":
    case "a":
      left = false;
      break;
    case "arrowright":
    case "d":
      right = false;
      break;
    case "arrowup":
    case "w":
      up = false;
      break;
    case "arrowdown":
    case "z":
      down = false;
      break;
    case "b":
      block = false;
      break;
    case "k":
      kick = false;
      break;
    case "f":
      fist = false;
      break;
    case "l":
      final = true;
      break;
  }
}

export { left, right, up, down, kick, fist, block };

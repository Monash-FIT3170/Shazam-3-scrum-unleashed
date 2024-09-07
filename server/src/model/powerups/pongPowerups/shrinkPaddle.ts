import { PongMatch } from "src/model/matches/pongMatch";
import { PongPowerup } from "./pongPowerup";

export class ShrinkPaddle implements PongPowerup {
    name: string;
  
    constructor() {
      this.name = "smallerPaddle";
    }
    activate(match: PongMatch): void {
      const isPlayerTwo = match.ballState.yVelocity < 0;
      match.paddleStates[Number(isPlayerTwo)].width = 10;
    }
  }
  
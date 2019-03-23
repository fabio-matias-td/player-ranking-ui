import { Player } from "../types";

export interface Match {
  player1: Player;
  player2: Player;
  winnerId: number;
  result: string;
}

import { Player } from "../types";

export interface RankingPosition {
  player: Player;
  score: number;
}

export interface Ranking {
  [position: number]: RankingPosition;
}

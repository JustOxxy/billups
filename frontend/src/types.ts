export enum GameResult {
  Win = 'win',
  Lose = 'lose',
  Tie = 'tie',
}

export interface Choice {
  id: number;
  name: string;
}

export interface ComputerRoundResult {
  results: GameResult;
  player: number;
  computer: number;
}

export interface RoundResult {
  results: GameResult;
  player: string;
  contestant: string;
}

export interface RecentResult {
  playerChoice: string;
  contestantChoice: string;
  result: GameResult;
}

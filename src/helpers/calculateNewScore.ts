import { GameResult } from '../types';

export const calculateNewScore = (gameResult: GameResult, oldScore: number) => {
  switch (gameResult) {
    case GameResult.Win:
      return oldScore + 1;

    case GameResult.Lose:
      return oldScore - 1;

    case GameResult.Tie:
      return oldScore;
  }
};

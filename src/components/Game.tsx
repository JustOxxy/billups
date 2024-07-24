import { ScoreBoard } from './ScoreBoard';
import { useFetchChoicesQuery } from '../services/api';
import { RecentResultsBoard } from './RecentResultsBoard';
import { GameBoard } from './GameBoard';
import { useState } from 'react';

export const Game = () => {
  const [score, setScore] = useState(0);
  const { data: choices, isLoading, isError, isSuccess } = useFetchChoicesQuery();

  const handleResetScore = () => {
    setScore(0);
  };

  return (
    <>
      <ScoreBoard score={score} resetScore={handleResetScore} />
      <GameBoard />
      <RecentResultsBoard />
    </>
  );
};

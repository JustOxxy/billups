import { ScoreBoard } from './ScoreBoard';
import { useFetchChoicesQuery } from '../services/api';
import { RecentResultsBoard } from './RecentResultsBoard';
import { GameBoard } from './GameBoard';
import { useState } from 'react';
import { GameBoardWrapper } from './GameBoardWrapper';
import { Loading } from './Loading';
import { Error } from './Error';
import { RoundResult } from '../types';

export const Game = () => {
  const [score, setScore] = useState(0);
  const [roundResult, setRoundResult] = useState<RoundResult | null>(null);
  const { data: choices, isLoading, isError, isSuccess } = useFetchChoicesQuery();

  const handleSelection = () => {};

  const handleResetScore = () => {
    setScore(0);
  };

  const gameBoard = (
    <GameBoardWrapper>
      {isError && <Error />}
      {isLoading && <Loading />}
      {isSuccess && (roundResult ? <RoundResultBoard /> : <GameBoard handleSelection={handleSelection} />)}
    </GameBoardWrapper>
  );

  return (
    <>
      <ScoreBoard score={score} resetScore={handleResetScore} />
      {gameBoard}
      <RecentResultsBoard />
    </>
  );
};

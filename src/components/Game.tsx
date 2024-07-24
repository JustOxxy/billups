import { ScoreBoard } from './ScoreBoard';
import { useFetchChoicesQuery } from '../services/api';
import { RecentResultsBoard } from './RecentResultsBoard';
import { GameBoard } from './GameBoard';

export const Game = () => {
  const { data: choices, isLoading, isError, isSuccess } = useFetchChoicesQuery();

  return (
    <>
      <ScoreBoard />
      <GameBoard />
      <RecentResultsBoard />
    </>
  );
};

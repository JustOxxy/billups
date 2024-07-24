import { ScoreBoard } from './ScoreBoard';
import { useFetchChoicesQuery, usePlayRoundMutation } from '../services/api';
import { RecentResultsBoard } from './RecentResultsBoard';
import { GameBoard } from './GameBoard';
import { useState } from 'react';
import { GameBoardWrapper } from './GameBoardWrapper';
import { Loading } from './Loading';
import { Error } from './Error';
import { RoundResult } from '../types';
import { calculateNewScore } from '../helpers/calculateNewScore';

export const Game = () => {
  const [score, setScore] = useState(0);
  const [roundResult, setRoundResult] = useState<RoundResult | null>(null);
  const [playRound] = usePlayRoundMutation();
  const { data: choices, isLoading, isError, isSuccess } = useFetchChoicesQuery();

  const handleSelection = async (value: string) => {
    const choiceId = choices?.find((choice) => choice.name === value)?.id;

    if (!choiceId) return;

    const { data } = await playRound(choiceId);

    if (!data) return;

    const playerChoice = choices.find((choice) => choice.id === data.player)?.name;
    const contestantChoice = choices.find((choice) => choice.id === data.computer)?.name;

    if (!playerChoice || !contestantChoice) return;

    const preparedResultData: RoundResult = {
      results: data.results,
      player: playerChoice,
      contestant: contestantChoice,
    };

    setRoundResult(preparedResultData);
    const scoreValue = calculateNewScore(data.results, score);
    setScore(scoreValue);
  };

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

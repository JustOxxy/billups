import { useState } from 'react';

import { ScoreBoard } from './ScoreBoard';
import { useFetchChoicesQuery, usePlayRoundMutation } from '../services/api';
import { RecentResultsBoard } from './RecentResultsBoard';
import { GameBoard } from './GameBoard';
import { GameBoardWrapper } from './GameBoardWrapper';
import { Loading } from './Loading';
import { Error } from './Error';
import { GameResult, RecentResult, RoundResult } from '../types';
import { calculateNewScore } from '../helpers/calculateNewScore';
import { RoundResultBoard } from './RoundResultBoard';
import { useLocalStorageData } from '../hooks/useLocalStorageData';
import { Confetti } from './Confetti';

export const Game = () => {
  const [roundResult, setRoundResult] = useState<RoundResult | null>(null);
  const [playRound] = usePlayRoundMutation();
  const { data: choices, isLoading, isError, isSuccess } = useFetchChoicesQuery();
  const { data: score, update: updateScore } = useLocalStorageData<number>('score', 0);
  const { data: recentResults, update: updateRecentResults } = useLocalStorageData<RecentResult[]>('recentResults', []);

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
    updateScore(scoreValue);

    const updatedResults = [{ playerChoice, contestantChoice, result: data.results }, ...recentResults].slice(0, 10);
    updateRecentResults(updatedResults);
  };

  const handleResetRoundResult = () => {
    setRoundResult(null);
  };

  const handleResetScore = () => {
    updateScore(0);
    updateRecentResults([]);
  };

  const gameBoard = (
    <GameBoardWrapper>
      {isError && <Error />}
      {isLoading && <Loading />}
      {isSuccess &&
        (roundResult ? (
          <RoundResultBoard roundResult={roundResult} resetRoundResult={handleResetRoundResult} />
        ) : (
          <GameBoard handleSelection={handleSelection} />
        ))}
    </GameBoardWrapper>
  );

  return (
    <>
      <ScoreBoard score={score} resetScore={handleResetScore} />
      {gameBoard}
      <RecentResultsBoard recentResults={recentResults} />
      {roundResult?.results === GameResult.Win && <Confetti />}
    </>
  );
};

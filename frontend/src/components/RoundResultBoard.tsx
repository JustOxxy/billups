import { RoundResult } from '../types';
import { GameCard } from './GameCard';
import { getCardIcon } from '../helpers/getCardIcon';
import { Button } from './Button';
import { GameResult } from './GameResult';

interface RoundResultBoardProps {
  roundResult: RoundResult;
  resetRoundResult: () => void;
}

export const RoundResultBoard: React.FC<RoundResultBoardProps> = ({ roundResult, resetRoundResult }) => {
  const { player, contestant, results } = roundResult;

  const playerCardIcon = getCardIcon(player);
  const contestantCardIcon = getCardIcon(contestant);

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-center justify-center gap-4">
        <div className="flex flex-1 flex-col items-center gap-2">
          <h5 className="font-medium text-indigo-900">Your choice: </h5>
          <GameCard value={player} icon={playerCardIcon} />
        </div>

        <div className="h-full w-[2px] bg-gray-200" />

        <div className="flex flex-1 flex-col items-center gap-2">
          <h5 className="font-medium text-indigo-900">Contestant choice: </h5>
          <GameCard value={contestant} icon={contestantCardIcon} />
        </div>
      </div>

      <div className="flex justify-center">
        <span className="text-indigo-950">
          Result: <GameResult result={results} />
        </span>
      </div>
      <Button onClick={resetRoundResult}>Play again</Button>
    </div>
  );
};

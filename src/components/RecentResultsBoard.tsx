import { RecentResult } from '../types';
import { GameBoardWrapper } from './GameBoardWrapper';
import { GameResult } from './GameResult';

interface RecentResultsBoardProps {
  recentResults: RecentResult[];
}

const TABLE_CELL_CLASSNAME = 'border border-gray-300 px-4 py-2';

export const RecentResultsBoard: React.FC<RecentResultsBoardProps> = ({ recentResults }) => {
  if (!recentResults.length) return;

  return (
    <GameBoardWrapper>
      <h5 className="font-meduim flex justify-center pb-4 text-lg text-indigo-950">10 most recent results:</h5>
      <table className="w-full table-auto border-collapse overflow-auto border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className={TABLE_CELL_CLASSNAME}>Your Choice</th>
            <th className={TABLE_CELL_CLASSNAME}>Contestant Choice</th>
            <th className={TABLE_CELL_CLASSNAME}>Result</th>
          </tr>
        </thead>
        <tbody>
          {recentResults.map(({ playerChoice, contestantChoice, result }, index) => (
            <tr key={index} className="text-center">
              <td className={TABLE_CELL_CLASSNAME}>{playerChoice}</td>
              <td className={TABLE_CELL_CLASSNAME}>{contestantChoice}</td>
              <td className={TABLE_CELL_CLASSNAME}>
                <GameResult result={result} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </GameBoardWrapper>
  );
};

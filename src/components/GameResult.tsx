import { GameResult as GameResultEnum } from '../types';

interface GameResultProps {
  result: GameResultEnum;
}

export const GameResult: React.FC<GameResultProps> = ({ result }) => {
  return (
    <span
      className={[
        'font-medium',
        result === GameResultEnum.Win && 'text-green-600',
        result === GameResultEnum.Lose && 'text-red-600',
        result === GameResultEnum.Tie && 'text-gray-600',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {result}
    </span>
  );
};

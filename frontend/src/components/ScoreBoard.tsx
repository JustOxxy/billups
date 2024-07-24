import { Button } from './Button';

interface ScoreBoardProps {
  score: number;
  resetScore: () => void;
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, resetScore }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex items-center gap-2 rounded-md border-2 border-indigo-200 px-3 py-2 text-indigo-950">
        <span>Score: {score}</span>
      </div>

      <Button onClick={resetScore}>Reset</Button>
    </div>
  );
};

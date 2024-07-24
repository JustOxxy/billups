import { faHand, faHandBackFist, faHandLizard, faHandScissors, faHandSpock } from '@fortawesome/free-solid-svg-icons';
import { GameCard } from './GameCard';

interface GameBoardProps {
  handleSelection: (choice: string) => void;
}

export const GameBoard: React.FC<GameBoardProps> = ({ handleSelection }) => {
  return (
    <>
      <div className="flex justify-center">
        <GameCard value="paper" icon={faHand} onClick={handleSelection} />
      </div>
      <div className="flex justify-between px-8 md:px-5">
        <GameCard value="scissors" icon={faHandScissors} onClick={handleSelection} />
        <GameCard value="rock" icon={faHandBackFist} onClick={handleSelection} />
      </div>
      <div className="mt-6 flex justify-around px-10">
        <GameCard value="lizard" icon={faHandLizard} onClick={handleSelection} />
        <GameCard value="spock" icon={faHandSpock} onClick={handleSelection} />
      </div>
    </>
  );
};

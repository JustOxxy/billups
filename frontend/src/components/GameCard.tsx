import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface GameCardProps {
  value: string;
  icon?: IconDefinition;
  onClick?: (value: string) => void;
}

export const GameCard: React.FC<GameCardProps> = ({ value, icon, onClick }) => {
  if (!icon) return;

  const className = 'flex size-20 items-center justify-center rounded-full border-8 border-gray-100 bg-white p-2';

  return (
    <button
      value={value}
      disabled={!onClick}
      onClick={(event) => onClick && onClick(event.currentTarget.value)}
      className={['transition-colors', className, onClick ? 'hover:border-indigo-600/60' : 'border-indigo-600/60']
        .filter(Boolean)
        .join(' ')}
    >
      <FontAwesomeIcon icon={icon} className="size-6 text-indigo-900" />
    </button>
  );
};

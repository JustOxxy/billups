import { ReactNode } from 'react';

interface GameBoardWrapperProps {
  children: ReactNode;
}

export const GameBoardWrapper: React.FC<GameBoardWrapperProps> = ({ children }) => {
  return (
    <div className="flex shrink-0 justify-center overflow-hidden">
      <div className="w-full max-w-[520px] overflow-auto rounded-md border-2 border-gray-200 p-4 shadow-lg sm:w-3/4 md:w-1/2">
        {children}
      </div>
    </div>
  );
};

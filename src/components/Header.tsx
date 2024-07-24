import { PropsWithChildren } from 'react';

export const Header = () => {
  return (
    <div className="flex justify-center gap-2 bg-gradient-to-r from-indigo-700 via-indigo-400 to-indigo-700 bg-clip-text text-transparent">
      <HeaderPart>Rock</HeaderPart>
      <HeaderPart>Paper</HeaderPart>
      <HeaderPart>Scissors</HeaderPart>
      <HeaderPart>Lizard</HeaderPart>
      <HeaderPart>Spock</HeaderPart>
    </div>
  );
};

const HeaderPart: React.FC<PropsWithChildren> = ({ children }) => (
  <span className="text-3xl font-bold">{children}</span>
);

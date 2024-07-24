import { Game } from './components/Game';
import { Header } from './components/Header';

export const App = () => {
  return (
    <div className="flex h-[100dvh] w-screen flex-col gap-4 p-10 md:p-0">
      <Header />
      <Game />
    </div>
  );
};

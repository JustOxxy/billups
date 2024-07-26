const confettiPieces = Array.from({ length: 100 });

export const Confetti = () => {
  const tailwindClasses = 'hidden bg-red-500 bg-blue-500 bg-green-500 bg-yellow-500 bg-pink-500 bg-purple-500';

  return (
    <div className="h-screen w-full overflow-hidden">
      <style>
        {`
          @keyframes confetti-fall {
            0% {
              transform: translateY(0) rotate(0);
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }
          .confetti-piece {
            position: absolute;
            width: 8px;
            height: 8px;
            animation: confetti-fall 3s linear infinite;
          }
        `}
      </style>
      <div className={tailwindClasses}></div>
      {confettiPieces.map((_, index) => (
        <div
          key={index}
          className={`confetti-piece bg-${randomColor()}`}
          style={{
            top: `-${Math.random() * 30}vh`,
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

// Helper function to get a random color from Tailwind CSS color palette
const randomColor = () => {
  const colors = ['red-500', 'blue-500', 'green-500', 'yellow-500', 'pink-500', 'purple-500'];
  return colors[Math.floor(Math.random() * colors.length)];
};

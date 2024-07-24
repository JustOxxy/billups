import { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className="inline-flex items-center justify-center rounded-md border-2 border-indigo-500 bg-indigo-50 px-3 py-2 font-medium text-indigo-600 transition-colors hover:bg-indigo-100"
      {...props}
    />
  );
};

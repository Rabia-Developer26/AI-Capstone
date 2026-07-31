import React from 'react';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
};

const Button = ({ type = 'button', loading = false, disabled = false, children }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-indigo-300"
    >
      {loading ? 'Creating account...' : children}
    </button>
  );
};

export default Button;

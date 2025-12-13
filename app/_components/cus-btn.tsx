"use client";

interface Props {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export default function CustomButton({
  onClick,
  children,
  className = "px-4 py-2 bg-blue-500 text-white rounded",
  disabled,
}: Props) {
  return (
    <button
      disabled={disabled}
      className={`${className} px-5 py-3`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

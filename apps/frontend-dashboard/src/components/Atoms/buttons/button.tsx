import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "contain" | "outline" | "text";
  color?: "primary" | "secondary" | "success" | "error";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "contain",
  color = "primary",
  className,
  disabled = false,
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded font-medium transition-colors duration-300";
  const variantStyles = {
    contain: {
      primary: "bg-blue-500 text-white hover:bg-blue-700",
      secondary: "bg-gray-500 text-white hover:bg-gray-700",
      success: "bg-green-500 text-white hover:bg-green-700",
      error: "bg-red-500 text-white hover:bg-red-700",
    },
    outline: {
      primary: "text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white",
      secondary: "text-gray-500 border border-gray-500 hover:bg-gray-500 hover:text-white",
      success: "text-green-500 border border-green-500 hover:bg-green-500 hover:text-white",
      error: "text-red-500 border border-red-500 hover:bg-red-500 hover:text-white",
    },
    text: {
      primary: "text-blue-500 hover:bg-blue-100",
      secondary: "text-gray-500 hover:bg-gray-100",
      success: "text-green-500 hover:bg-green-100",
      error: "text-red-500 hover:bg-red-100",
    }
  };
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant][color]} ${disabledStyles} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

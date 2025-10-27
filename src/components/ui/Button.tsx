interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "small" | "medium" | "large";
  className?: string;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  onClick,
  disabled = false,
  loading = false,
}: ButtonProps) {
  const baseClasses =
    "font-medium rounded-xl transition-all duration-300 inline-flex items-center justify-center relative overflow-hidden group";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-950 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
    secondary:
      "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
    outline:
      "bg-transparent border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white hover:shadow-lg transform hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-blue-800 hover:bg-blue-50 hover:text-blue-900 transform hover:-translate-y-0.5",
  };

  const sizeClasses = {
    small: "px-6 py-2.5 text-sm font-medium",
    medium: "px-8 py-3.5 text-base font-semibold",
    large: "px-10 py-4 text-lg font-semibold",
  };

  const disabledClasses =
    disabled || loading ? "opacity-50 cursor-not-allowed transform-none" : "";

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <span className={loading ? "invisible" : ""}>{children}</span>
    </button>
  );
}

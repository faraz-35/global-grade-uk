interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "small" | "medium" | "large";
  className?: string;
  onClick?: () => void;
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
      "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
    secondary:
      "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
    outline:
      "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg transform hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-blue-600 hover:bg-blue-50 hover:text-blue-700 transform hover:-translate-y-0.5",
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

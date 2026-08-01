import React from "react";

export default function Button({
  children,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}) {
  const base =
    "font-bold rounded transition-all duration-500 focus:outline-none inline-flex items-center justify-center";

  const variants = {
    primary: "bg-primary hover:bg-secondary text-white",

    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",

    outlineWhite:
      "border-[1px] border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary",

    ghost:
      "bg-transparent text-primary hover:bg-primary hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      type="button"
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "font-semibold tracking-wide disabled:opacity-50 cursor-pointer active:scale-105 hover:scale-110 transition-all duration-300",

  variants: {
    color: {
      primary: "bg-primary text-white",
      secondary: "bg-secondary text-white",
      tertiary: "bg-tertiary text-white",
      whitegreen: "bg-white text-green",
    },

    size: {
      md: "py-3 px-6 rounded-xl",
      lg: "py-4 px-8 rounded-2xl text-lg",
    },

    shape: {
      pill: "rounded-full",
      rounded: "",
    },
  },

  defaultVariants: {
    color: "primary",
    size: "md",
    shape: "rounded",
  },
});

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & VariantProps<typeof button>;

export default function Button({ color, size, shape, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={button({
        color,
        size,
        shape,
        className,
      })}
    />
  );
}
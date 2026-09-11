import type { HTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const heading = tv({
  base: "tracking-wide",

  variants: {
    font: {
      Groatesque: "font-sans"
    },

    text: {
      green: "text-green",
      dark: "text-dark",
      grey: "text-grey",
      white: "text-white",
    },

    size: {
      display: "text-5xl md:text-8xl",
      lg: "text-2xl md:text-5xl",
      md: "text-xl md:text-3xl",
      sm: "text-base md:text-xl",
    },
  },

  defaultVariants: {
    size: "sm",
    text: "green",
  },
});

type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof heading> & {
    as: "h1" | "h2" | "h3" | "h4";
  };

export default function Heading(props: HeadingProps) {
  const Comp = props.as;

  const { font, text, size, className, children, ...rest } = props;

  return (
    <Comp
      {...rest}
      className={heading({
        font,
        text,
        size,
        className,
      })}
    >
      {children}
    </Comp>
  );
}
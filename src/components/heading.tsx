import type { HTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const heading = tv({
  base: "font-semibold tracking-wide",

  variants: {
    text: {
      green: "text-green",
      dark: "text-dark",
      grey: "text-grey"
    },

    size: {
      display: "text-8xl font-semibold",
      lg: "text-5xl font-semibold",
      md: "text-3xl font-semibold",
      sm: "text-xl font-semibold",
    },
  },

  defaultVariants: {
    size: "sm",
    green: "primary",
  },
});

type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof heading> & {
    as: "h1" | "h2" | "h3" | "h4";
  };

export default function Heading(props: HeadingProps) {
  const Comp = props.as;

  const { text, size, className, children, ...rest } = props;

  return (
    <Comp
      {...rest}
      className={heading({
        text,
        size,
        className,
      })}
    >
      {children}
    </Comp>
  );
}
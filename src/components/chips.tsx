import type { ReactNode } from "react";

type ChipsProps = {
  children?: ReactNode
  className?: string;
};

export default function Chips(props: ChipsProps) {
  return (
    <span className={props.className}>
      {props.children}
    </span>
  );
}
import type { ReactNode } from "react";

type ChipsProps = {
  children?: ReactNode
  className?: string;
};

export default function Chips(props: ChipsProps) {
  return (
    <div className="bg-grey/40 rounded-xl">
      <span className={props.className}>
        {props.children}
      </span>
    </div>
  );
}
import * as Icons from "@phosphor-icons/react";
import type { BenefitData } from "../data/benefits.data";

type BenefitProps = {
  benefit: BenefitData;
};

export default function Benefit(props: BenefitProps) {
  const { benefit } = props;

  const Icon = Icons[benefit.icon] as Icons.Icon;

  return (
    <div>
      <Icon />
      <h3>{benefit.label}</h3>
      <p>{benefit.description}</p>
    </div>
  );
}
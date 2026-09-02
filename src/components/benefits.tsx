import * as Icons from "@phosphor-icons/react";
import type { BenefitData } from "../data/benefits.data";
import Heading from "./heading";

type BenefitProps = {
  benefit: BenefitData;
};

export default function Benefit(props: BenefitProps) {
  const { benefit } = props;

  const Icon = Icons[benefit.icon] as Icons.Icon;

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-950 bg-gray-200">
        <Icon size={24} className="text-green" />
      </div>

      <div className="flex flex-col gap-4">
        <Heading text="green" as="h2">
          {benefit.label}
        </Heading>

        <p className="text-grey">
          {benefit.description}
        </p>
      </div>
    </div>
  );
}
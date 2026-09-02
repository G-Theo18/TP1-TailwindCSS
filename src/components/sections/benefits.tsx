import { BENEFITS } from "../../data/benefits.data";
import Benefit from "../benefits";
import Heading from "../heading";

export default function Benefits() {
  return (
    <section className="w-full px-8 py-16">
      <div className="mx-auto max-w-6xl text-center">
        <Heading text="green" as="h2" size="lg" className="mb-[3rem]">
          Un service d'excellence
        </Heading>

        <p className="mt-4 text-grey">
          Accédez à un large gamme de services compris dans votre séjour
        </p>

        <div className="mt-12 grid grid-cols-4 gap-10">
          {BENEFITS.map((benefit) => (
            <Benefit
              key={benefit.label}
              benefit={benefit}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
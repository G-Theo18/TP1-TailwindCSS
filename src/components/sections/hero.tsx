import Button from "../button";
import Heading from "../heading";

export default function Hero() {
  return (
    <div className="w-full px-6 lg:px-[14rem]">
      <div
        className="relative aspect-card md:aspect-hero overflow-hidden rounded-[2rem] bg-cover bg-center"
        style={{ backgroundImage: "url('/img/cover.jpeg')" }}
      >
        <div className="absolute inset-x-0 top-6 flex justify-center md:inset-x-auto md:left-16 md:top-16 md:justify-start">
          <div className="flex flex-col items-start text-left">
            <Heading text="green" as="h3" size="sm" className="font-semibold">
              BIENVENUE AUX
            </Heading>

            <Heading text="green" as="h1" size="display" className="font-semibold">
              AÇORES
            </Heading>

            <Heading text="green" as="h3" size="sm" className="font-semibold">
              Joyaux de verdure perdus dans l'Atlantique
            </Heading>
          </div>
        </div>

        <div className="absolute bottom-6 inset-x-0 flex justify-center md:bottom-16 md:left-16 md:inset-x-auto md:justify-start">
          <Button color="whitegreen" size="md" shape="rounded" className="font-semibold">
            Réserver
          </Button>
        </div>
      </div>
    </div>
  );
}
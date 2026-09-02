import Button from "../button";
import Heading from "../heading";

export default function Hero() {
  return (
    <div className="w-full px-[12rem]">
      <div
        className="relative aspect-hero w-full overflow-hidden rounded-[2rem] bg-cover bg-center"
        style={{ backgroundImage: "url('/img/cover.jpeg')" }}
      >

        <div className="absolute left-16 top-16">
          <Heading text="green" as="h3" size="sm">
            BIENVENUE AUX
          </Heading>

          <Heading text="green" as="h1" size="display">
            AÇORES
          </Heading>

          <Heading text="green" as="h3" size="sm">
            Joyaux de verdure perdus dans l'Atlantique
          </Heading>
        </div>

        <div className="absolute bottom-16 left-16">
          <Button color="whitegreen" size="md" shape="rounded">
            Réserver
          </Button>
        </div>
      </div>
    </div>
  );
}
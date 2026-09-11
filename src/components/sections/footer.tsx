import Heading from "../heading";
import Button from "../button";
import { FacebookLogoIcon, XLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <div className="bg-green border-y-emerald-900 border-y-40 py-16 px-6 lg:px-16">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="text-center lg:text-left">
          <Heading as="h1" size="lg" text="white" className="font-semibold">
            Açores
          </Heading>

          <Heading as="h2" size="sm" text="white">
            Joyau perdu dans l'Atlantique
          </Heading>
        </div>

        <div className="flex gap-10">
          <Button color="whitegreen" size="md" shape="rounded">
            <FacebookLogoIcon size={32} color="green" />
          </Button>
          <Button color="whitegreen" size="md" shape="rounded">
            <XLogoIcon size={32} color="green" />
          </Button>
          <Button color="whitegreen" size="md" shape="rounded">
            <YoutubeLogoIcon size={32} color="green" />
          </Button>
        </div>
      </div>
    </div>
  );
}
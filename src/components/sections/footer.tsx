import Heading from "../heading";
import Button from "../button";
import { FacebookLogoIcon, XLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <div className="relative fixed bottom-0 bg-green mt-20 h-75">
        <div className="absolute left-16 top-24">
            <Heading as="h1" size="lg" text="white">
                Açores
            </Heading>

            <Heading as="h2" size="md" text="white">
                Joyau perdu dans l'Atlantique
            </Heading>
        </div>

        <div className="absolute flex right-16 top-28 gap-10">
            <Button color="whitegreen" size="md" shape="rounded">
                <FacebookLogoIcon size={32} color="green"/>
            </Button>
            <Button color="whitegreen" size="md" shape="rounded">
                <XLogoIcon size={32} color="green"/>
            </Button>
            <Button color="whitegreen" size="md" shape="rounded">
                <YoutubeLogoIcon size={32} color="green"/>
            </Button>
        </div>
    </div>
  );
}
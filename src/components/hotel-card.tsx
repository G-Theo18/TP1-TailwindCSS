import type { HotelData } from "../data/hotels.data";
import Chip from "./chips";
import Heading from "./heading";

type HotelProps = {
    hotel: HotelData;
};

export default function HotelCard({ hotel }: HotelProps) {
    return (
        <div className="relative aspect-hotel overflow-hidden rounded-3xl bg-cover bg-center min-w-[28rem]"
            style={{ backgroundImage: `url(${hotel.cover})` }}
        >

            <div className="absolute inset-0 bg-black/30" />

            <div className="relative flex h-full flex-col justify-end p-6">

                <div className="flex justify-between">
                    <Chip className="rounded-full to-grey px-4 py-2 font-semibold text-white">
                        ★ {hotel.rating} ({hotel.reviews})
                    </Chip>
                </div>

                <Heading text="dark" as="h2" size="md" className="text-white font-semibold">
                    {hotel.title}
                </Heading>

                <div>
                    <p className="text-white">À partir de</p>
                    <Heading text="white" as="h1" size="md" className="font-sans font-semibold">
                        {hotel.price}€/nuit
                    </Heading>
                </div>
            </div>
        </div>
    );
}
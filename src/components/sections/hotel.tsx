import Heading from "../heading";
import HotelCard from "../hotel-card";
import { Carrousel } from "../carrousel";
import { HOTELS } from "../../data/hotels.data";

export default function Hotels() {
    return (
        <div className="py-20">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-6 my-10">
                <Heading text="green" as="h1" size="lg" className="font-semibold">
                    Etablissez votre camp de base
                </Heading>
            </div>

            <Carrousel
                items={HOTELS}
                render={(hotel) => (
                    <li key={hotel.id}>
                        <HotelCard hotel={hotel} />
                    </li>
                )}
            />
        </div>
    );
}
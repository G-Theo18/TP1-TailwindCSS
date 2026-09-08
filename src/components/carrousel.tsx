import type { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useCallback, useEffect, type ReactElement } from "react";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import Button from "./button";

type Props<T> = {
    items: T[]
    render: (item: T) => ReactElement<"li">;
    classname?: string;
}

export function Carrousel<T>(props: Props<T>) {
    // Initialisation du hook Embla
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        skipSnaps: false,
        dragFree: false, // snap automatique sur les éléments
    });

    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [canScrollPrev, setCanScrollPrev] = useState<boolean>(false);
    const [canScrollNext, setCanScrollNext] = useState<boolean>(false);

    // Actions de navigation avec typage de l'index
    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

    // Synchronisation de l'état (avec EmblaCarouselType)
    const onSelect = useCallback((api: EmblaCarouselType) => {
        setSelectedIndex(api.selectedScrollSnap());
        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        emblaApi.reInit();
        // oxlint-disable-next-line react/set-state-in-effect
        setScrollSnaps(emblaApi.scrollSnapList());
        onSelect(emblaApi);

        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);

        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi, onSelect, props.items]);

    return (<div>

        <div className="cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <ul className="flex gap-6 select-none">
                {props.items.map((value) => props.render(value))}
            </ul>
        </div>


        {/* Navigation */}
        <div className='flex justify-center gap-6 items-center mt-6'>
            <Button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="p-4 rounded-full"
                color="green"
                aria-label="Précédent"
            >
                <CaretLeftIcon weight='bold' size={18} />
            </Button>

            <div className="flex justify-center gap-2">
                {scrollSnaps.map((_, index: number) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${index === selectedIndex
                                ? 'w-8 bg-green'
                                : 'w-2.5 bg-green/50 hover:bg-green'
                            }`}
                        aria-label={`Aller au slide ${index + 1}`}
                    />
                ))}
            </div>

            <Button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="p-4 rounded-full"
                color="green"
                aria-label="Suivant"
            >
                <CaretRightIcon weight='bold' size={18} />
            </Button>
        </div>
    </div>);
}
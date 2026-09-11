import type { BlogData } from "../data/blog.data";
import Chip from "./chips";
import Heading from "./heading";

type BlogProps = {
    blog: BlogData;
};

export default function Article({ blog }: BlogProps) {
    return (
        <div className="grid grid-cols-1 gap-4 md:flex md:gap-4">
            <div
                className="relative aspect-square w-48 shrink-0 overflow-hidden rounded-2xl bg-cover bg-center mx-auto"
                style={{ backgroundImage: `url(${blog.cover})` }}
            />

            <div className="flex flex-col justify-center">
                {blog.date.toLocaleDateString()}

                <Heading text="green" as="h3" size="sm" className="font-semibold">
                    {blog.title}
                </Heading>

                <p>{blog.excerpt}</p>
            </div>
        </div>
    );
}
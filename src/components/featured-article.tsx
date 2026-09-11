import type { BlogData } from "../data/blog.data";
import Chip from "./chips";
import Heading from "./heading";

type BlogProps = {
    blog: BlogData;
};

export default function FeaturedArticle({ blog }: BlogProps) {
    return (
        <div
            className="relative aspect-auto overflow-hidden rounded-3xl bg-cover bg-center h-full"
            style={{ backgroundImage: `url(${blog.cover})` }}
        >
            <div className="absolute inset-0 bg-black/30" />

            <div className="relative flex h-full flex-col justify-end p-6">
                <div className="flex justify-between">
                    <Chip className="rounded-full to-grey px-4 py-2 font-semibold text-white">
                        {blog.date.toLocaleDateString()}
                    </Chip>
                </div>

                <Heading text="dark" as="h2" size="md" className="text-white font-semibold">
                    {blog.title}
                </Heading>

                <p className="text-white">{blog.excerpt}</p>
            </div>
        </div>
    );
}
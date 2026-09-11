import Heading from "../heading";
import FeaturedArticle from "../featured-article";
import Article from "../article";
import { BLOG_ARTICLES } from "../../data/blog.data";

export default function Blog() {
    const [featured, ...rest] = BLOG_ARTICLES;

    return (
        <div className="py-20 gap-40">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-6 my-10">
                <Heading text="green" as="h1" size="lg" className="font-semibold">
                    Nos dernières astuces
                </Heading>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <FeaturedArticle blog={featured} />

                <div className="flex flex-col justify-between gap-6">
                    {rest.map((blog) => (
                        <Article key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    );
}
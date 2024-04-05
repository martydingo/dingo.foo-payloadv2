import "@/styles/css/globals.css";
import { getPayloadClient } from "@/payload/payloadClient";
import Mermaid from "@/components/ui/blog/Mermaid";
import BreadCrumb from "@/components/ui/navigation/BreadCrumb/BreadCrumb";
import HeadingSelect from "@/components/ui/navigation/HeadingSelect/HeadingSelect";

function slugify(text: string) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w-]+/g, "") // Remove all non-word chars
        .replace(/--+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, "") // Trim - from end of text
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const payload = await getPayloadClient();
    const allBlogPosts = await payload.find({
        collection: "blog"
    })
    const BlogPost = await payload.find({
        collection: "blog",
        where: {
            slug: {
                equals: params.slug
            },
        },
    })

    const headings = BlogPost.docs[0].content.root.children
    .filter((childNode) => childNode.type === "heading" && childNode.tag !== "h1")
    .map((heading, index) => { return { "index": index, "title": heading.children[0].text, "href": slugify(heading.children[0].text) } })
    .sort((headingA, headingB) => headingA.index - headingB.index)

    return (
        <div>
            <div className="xl:container">
                <BreadCrumb
                    rootPage={{ "title": "Blog", "href": "/blog" }}
                    curPage={{ "title": `${BlogPost.docs[0].title as string}`, "href": `/blog/${BlogPost.docs[0].slug as string}` }}
                    allPosts={allBlogPosts.docs}
                />
                <HeadingSelect headings={headings} />
            </div>
            <div className="prose dark:prose-invert container xl:container xl:max-w-5xl">
                <div dangerouslySetInnerHTML={{ '__html': BlogPost.docs[0].content_html as string }} />
            </div>
            <Mermaid />
        </div>
    )
}
import "@/styles/css/globals.css";
import { getPayloadClient } from "@/payload/payloadClient";
import Mermaid from "@/components/ui/blog/Mermaid";
import BreadCrumb from "@/components/ui/navigation/BreadCrumb/BreadCrumb";
import HeadingSelect from "@/components/ui/navigation/HeadingSelect/HeadingSelect";

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

    return (
        <div>
            <div className="xl:container">
                <BreadCrumb
                    rootPage={{ "title": "Blog", "href": "/blog" }}
                    curPage={{ "title": `${BlogPost.docs[0].title as string}`, "href": `/blog/${BlogPost.docs[0].slug as string}` }}
                    allPosts={allBlogPosts.docs}
                />
                <HeadingSelect />
            </div>
            <div className="prose dark:prose-invert container xl:container xl:max-w-5xl">
                <div dangerouslySetInnerHTML={{ '__html': BlogPost.docs[0].content_html as string }} />
            </div>
            <Mermaid />
        </div>
    )
}
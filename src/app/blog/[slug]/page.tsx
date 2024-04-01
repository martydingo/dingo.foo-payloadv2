import "@/styles/css/globals.css";
import { getPayloadClient } from "@/payload/payloadClient";

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const payload = await getPayloadClient();
    const pages = await payload.find({
        collection: "blog",
        where: {
            slug: {
                equals: params.slug
            },
        },
    })

    return (
        <div className="prose dark:prose-invert container xl:container">
            <div dangerouslySetInnerHTML={{'__html': pages.docs[0].content_html as string}} />
        </div>
    )
}
import { Separator } from "@/components/lib/shadcn-ui/separator"
import Link from "next/link"

export default function BlogListBasic({ pages }) {
    return (
        <div className="prose dark:prose-invert mx-auto">
            {
                pages.docs.map((page) => {
                    return (
                        <div key="">
                            <div className="">
                                <Link className="no-underline not-prose" href={`/blog/${page.slug}`}>
                                    <p className="text-2xl font-titillium">
                                        {page.title}
                                    </p>
                                    <sup className="">
                                        {new Date(page.date).toDateString()}
                                    </sup>
                                </Link>
                                <section className="">
                                    <div dangerouslySetInnerHTML={{"__html": page.summary_html }} />
                                </section>
                            </div>
                            <Separator className="my-12" />
                        </div>
                    )
                })
            }

        </div>
    )
}
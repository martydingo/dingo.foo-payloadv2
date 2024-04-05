import "@/styles/css/globals.css";
import { getPayloadClient } from "@/payload/payloadClient";
import Link from "next/link";
import BlogListBasic from "@/components/ui/blog/BlogListBasic";
import { BlogListCarousel } from "@/components/ui/blog/BlogListCarousel";
import BreadCrumb from "@/components/ui/navigation/BreadCrumb/BreadCrumb";

export default async function Blog() {
    const payload = await getPayloadClient();
    const pages = await payload.find({
        collection: "blog",
    })

    return (
        <div className="flex flex-col mt-4">
            <div className="flex w-screen">
                <div className="basis-1/3" />
            <BreadCrumb rootPage={{ "title": "Blog", "href": "/blog" }} />
                <div className="basis-1/3">
                    <h1 className="self-center text-center text-4xl pb-8 font-titillium">
                        Featured Posts
                    </h1>
                    <BlogListCarousel pages={pages} />
                </div>
                <div className="basis-1/3" />
            </div>
            <div className="pt-16 flex w-screen">
                <div className="basis-1/3" />
                <div className="basis-10/12">
                    <h1 className="self-center text-center text-4xl pb-16 font-titllium">
                        All Posts
                    </h1>
                    <BlogListBasic pages={pages} />
                </div>
                <div className="basis-1/3" />
            </div>
        </div>
    )
}
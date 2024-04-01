import "@/styles/css/globals.css";
import { getPayloadClient } from "@/payload/payloadClient";

export default async function Blog() {
    const payload = await getPayloadClient();
    const pages = await payload.find({
        collection: "pages",
    })

    return (
        <div>
            {JSON.stringify(pages)}
        </div>
    )
}
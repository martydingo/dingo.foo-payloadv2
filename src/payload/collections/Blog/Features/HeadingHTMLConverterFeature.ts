import { FeatureProvider, UploadNode } from "@payloadcms/richtext-lexical"
import { TextNode } from "lexical"
import { HeadingHTMLConverter } from "../Converters/HeadingHTMLConverter"

export const HeadingHTMLConverterFeature = (props?): FeatureProvider => {
    return {
        feature: () => {
            return {
                nodes: [
                    {
                        converters: {
                            html: HeadingHTMLConverter, // <= This is where you define your HTML Converter
                        },
                        node: TextNode,
                        type: TextNode.getType(),
                    },
                ],
                props: props,
            }
        },
        key: 'Heading',
    }
}
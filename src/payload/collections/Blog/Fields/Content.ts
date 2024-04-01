import { RichTextField } from "payload/types";
import {
    BlocksFeature, lexicalEditor, HTMLConverterFeature
} from '@payloadcms/richtext-lexical'

import CodeBlock from "../Blocks/CodeBlock";
import { BlockHTMLMuxFeature } from "../Features/BlockHTMLMuxFeature";
import MermaidDiagramBlock from "../Blocks/MermaidDiagramBlock";
import { HeadingHTMLConverterFeature } from "../Features/HeadingHTMLConverterFeature";

export const Content: RichTextField = {
    name: 'content',
    label: 'Content',
    type: 'richText',
    editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
            ...defaultFeatures,
            HTMLConverterFeature({}),
            BlockHTMLMuxFeature({}),
            HeadingHTMLConverterFeature({}),
            BlocksFeature({
                blocks: [
                    CodeBlock,
                    MermaidDiagramBlock
                ],
            }),
        ]
    })

}
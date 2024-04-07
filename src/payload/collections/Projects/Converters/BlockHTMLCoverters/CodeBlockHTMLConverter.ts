import fs from 'fs';
export const CodeBlockHTMLConverter: any = {
    converter: async ({ fields }) => {
        const { getHighlighterCore } = await import('shiki/core')
        const theme = JSON.parse(fs.readFileSync('@/styles/themes/shiki/greyscale.json', 'utf8'))
        const highlighter = await getHighlighterCore({
            themes: [theme],
            langs: []
        })
        const html = highlighter.codeToHtml(fields.data.codeContent, {
            lang: fields.data.codeLanguage,
            theme: 'greyscale'
        })
        return html

    },
    nodeTypes: ['block'],
}
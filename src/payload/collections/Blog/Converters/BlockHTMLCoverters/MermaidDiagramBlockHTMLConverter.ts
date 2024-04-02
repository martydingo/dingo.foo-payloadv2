import mermaid from "mermaid"

export const MermaidDiagramBlockHTMLConverter = {
    converter: async ({ fields }) => {
        const element = document.createElement('div')
        const { svg } = await mermaid.render(element.id, fields.mermaidDiagramCode)
        console.log(svg)
        return `<pre class="mermaid">${fields.mermaidDiagramCode}</pre>`
    },
    nodeTypes: ['block'],
}
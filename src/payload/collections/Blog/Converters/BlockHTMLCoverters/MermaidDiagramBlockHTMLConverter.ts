// import mermaid from "mermaid"

export const MermaidDiagramBlockHTMLConverter = {
    converter: async ({ fields }) => {
        return `<pre class="mermaid">${fields.mermaidDiagramCode}</pre>`
    },
    nodeTypes: ['block'],
}
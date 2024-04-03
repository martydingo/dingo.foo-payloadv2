
export const MermaidDiagramBlockHTMLConverter = {
    converter: async ({ fields }) => {
        const mermaidUUID = (Math.random() + 1).toString(36).substring(7);
        return `<pre id="mermaid-${mermaidUUID}" class="mermaid">${fields.mermaidDiagramCode}</pre>`
    },
    nodeTypes: ['block'],
}
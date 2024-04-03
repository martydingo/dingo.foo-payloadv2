
export const MermaidDiagramBlockHTMLConverter = {
    converter: async ({ fields }) => {
        const mermaidUUID = (Math.random() + 1).toString(36).substring(7);
        return `<div class="mermaid-container" id="mermaid-container-${mermaidUUID}"><pre id="mermaid-${mermaidUUID}" class="mermaid">${fields.mermaidDiagramCode}</pre></div>`
    },
    nodeTypes: ['block'],
}

export const MermaidDiagramBlockHTMLConverter = {
    converter: async ({ fields }) => {
        const mermaidUUID = `${fields.id}-${encodeURI(fields.blockName)}`
        console.log(JSON.stringify(fields))
        return `<div class="mermaid-container" id="mermaid-container-${mermaidUUID}"><pre id="mermaid-${mermaidUUID}" class="mermaid">${fields.mermaidDiagramCode}</pre></div>`
    },
    nodeTypes: ['block'],
}
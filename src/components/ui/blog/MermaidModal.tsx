import mermaid from "mermaid"

export default function MermaidModal({ mermaidCode }: { mermaidCode: string }) {
    return (
        <div>
            {mermaid.initialize({ startOnLoad: true })}
        </div>
    )
}
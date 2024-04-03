'use client';


import mermaid from "mermaid"
import MermaidModal from "./MermaidModal";
import { createRoot } from 'react-dom/client';
import react from "react";

export default function Mermaid() {

    react.useEffect(() => {
        const mermaidDiagrams = document.getElementsByClassName("mermaid")
        Object.values(mermaidDiagrams).forEach((mermaidDiagram) => async () => {
            await mermaid.render(mermaidDiagram.id, mermaidDiagram.innerHTML)
        })

        const mermaidContainers = document.getElementsByClassName("mermaid-container")

        Array.from(mermaidContainers).forEach((mermaidContainer) => {
            const innerContainer = document.createElement("div")
            const innerDiagram = mermaidContainer.getElementsByTagName("svg")[0]
            const root = createRoot(innerContainer)
            const html = root.render(<MermaidModal mermaidCode={innerDiagram} />)
            mermaidContainer.appendChild(innerContainer)
        })
    })





    return (
        <div>

        </div>
    )
}
'use client';


import mermaid from "mermaid"
import MermaidModal from "./MermaidModal";
import { createRoot } from 'react-dom/client';
import react from "react";

export default function Mermaid() {

    react.useEffect(() => {
        const diagrams = []
        if(window === undefined) return
        const mermaidDiagrams = document.getElementsByClassName("mermaid")
        Object.values(mermaidDiagrams).forEach((mermaidDiagram) => async () => {
            diagrams.push(await mermaid.render(mermaidDiagram.id, mermaidDiagram.innerHTML))
        })
        
        const mermaidContainers = document.getElementsByClassName("mermaid-container")
        Array.from(mermaidContainers).forEach((mermaidContainer) => {
            console.log(diagrams)
            const innerContainer = document.createElement("div")
            const mermaidSvgId = mermaidContainer.getElementsByTagName("svg")[0].id
            const root = createRoot(innerContainer)
            const html = root.render(<MermaidModal mermaidId={mermaidSvgId} />)
            mermaidContainer.appendChild(innerContainer)
        })
        
    })



    return (
        <div>

        </div>
    )
}
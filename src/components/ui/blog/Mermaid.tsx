'use client';


import mermaid from "mermaid"
import MermaidModal from "./MermaidModal";
import { useEffect } from "react";

export default function Mermaid() {
    const testElement = document.createElement('div')
    testElement.innerText = "Hello World"

    const mermaidDiagrams = document.getElementsByClassName("mermaid")
    Object.values(mermaidDiagrams).forEach((mermaidDiagram) => async () => {
        await mermaid.render(mermaidDiagram.id, mermaidDiagram.innerHTML)
        mermaidDiagram.appendChild(testElement)
    })
    
    useEffect(() => {
        const mermaidDivs = document.querySelectorAll("pre[class^='mermaid'")

        Array.from(mermaidDivs).forEach((mermaidDiv) => {
            console.log(mermaidDiv)

            
        })
    })

    return (
        <div>

        </div>
    )
}
'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/shadcn-ui/dialog"

import mermaid from "mermaid"
import React from "react"
import saveMermaidSVG from "@/components/lib/mermaid/saveMermaidSVG"

export default function MermaidModal({ mermaidId }: { mermaidId: string }) {
    const svgFilePath = `/images/blog/mermaid/mermaid-${mermaidId.split("-")[1]}-${mermaidId.split("-")[2]}.svg`
    React.useLayoutEffect(() => {
        // console.log(`mermaidId: ${mermaidId}`)

        async function renderSVG() {
            const mermaidCode = document.getElementById(mermaidId)!.innerText
            const { svg } = await mermaid.render("mermaidDummy", mermaidCode)
            // console.log(svg)
            saveMermaidSVG(svg, mermaidId)
        }
        renderSVG()
    }, [])
    return (
        <div>
            <Dialog>
                <DialogTrigger>View Diagram</DialogTrigger>
                <DialogContent className="max-w-[95%] max-h-[95%]">
                    <img src={svgFilePath} />
                    {/* <DialogHeader>
                    <DialogTitle>Diagram</DialogTitle>
                    <DialogDescription>
                        Test
                    </DialogDescription>
                </DialogHeader> */}
                </DialogContent>
            </Dialog>
        </div >
    )
}
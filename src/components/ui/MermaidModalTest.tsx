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
import saveMermaidSVG from "../lib/mermaid/saveMermaidSVG"

export default function MermaidModalTest({ mermaidCode, mermaidId }: { mermaidCode: string, mermaidId: string }) {
    React.useLayoutEffect(() => {
        async function renderSVG() {
            const { svg } = await mermaid.render("mermaidTest", mermaidCode)
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
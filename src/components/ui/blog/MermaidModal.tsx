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
            const mermaidElement = document.getElementById(mermaidId)
            // const mermaidCode = mermaidElement!.innerText
            const mermaidCode = mermaidElement!.innerText
            await mermaid.initialize({ 
                startOnLoad: false, 
                securityLevel: 'loose',
                theme: "base",
                themeVariables: {
                    darkMode: true,
                    fontFamily: "JetBrains Mono",
                    // fontSize: "1.3em",
                    background: "#1d2433",
                    primaryColor: "#2f3b54",
                    secondaryColor: "#1d243344",
                    tertiaryColor: "#2f3b5444",
                    primaryTextColor: "#a2aabc",
                    secondaryTextColor: "#a2aabc",
                    tertiaryTextColor: "#a2aabc",
                    primaryBorderColor: "",
                    secondaryBorderColor: "",
                    tertiaryBorderColor: "",
                    // noteBkgColor: "",
                    // noteTextColor: "",
                    // noteBorderColor: "",
                    lineColor: "#bae67e44",
                    // textColor: "",
                    mainBkg: "#1d2433",
                    // errorBkgColor: "",
                    // errorTextColor: "",
                },
                flowchart:{
                    defaultRenderer: "dagre",
                    curve: "catmullRom"
                }
            })
            const { svg, bindFunctions } = await mermaid.render("mermaid", mermaidCode)
            bindFunctions!(mermaidElement!)
            // console.log(svg)
            saveMermaidSVG(svg, mermaidId)
            const div = document.createElement('div')
            div.innerHTML = svg
            mermaidElement!.replaceWith(div)
        }
        renderSVG()
    }, [])
    return (
        <div>
            <Dialog>
                <DialogTrigger>View Diagram</DialogTrigger>
                <DialogContent className="max-w-[95%] max-h-[95%]">
                    <img className="object-fill" src={svgFilePath} />
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
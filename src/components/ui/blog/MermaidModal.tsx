'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/shadcn-ui/dialog"
import React from "react";

export default function MermaidModal({ mermaidId }: { mermaidId: string }) {
    console.log(mermaidId)
    React.useEffect(() => {

        const mermaidSvg = document.getElementById(mermaidId)
        console.log(mermaidSvg)
    })
    return (
        <div>
            <Dialog>
                <DialogTrigger>View Diagram</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        {document.getElementById(mermaidId)}
                        <DialogTitle>Diagram</DialogTitle>
                        <DialogDescription>
                            Test
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}
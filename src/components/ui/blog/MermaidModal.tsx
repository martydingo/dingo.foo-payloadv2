'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/shadcn-ui/dialog"

export default function MermaidModal({ mermaidCode }: { mermaidCode: any }) {

    console.log(mermaidCode)
    return (
        <div>
            <Dialog>
                <DialogTrigger>View Diagram</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Diagram</DialogTitle>
                        <DialogDescription>
                            {mermaidCode}
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}
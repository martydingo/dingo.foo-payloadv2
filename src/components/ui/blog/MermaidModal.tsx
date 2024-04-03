'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/shadcn-ui/dialog"

export default function MermaidModal() {


    return (
        <div>
            <Dialog>
                <DialogTrigger>View Diagram</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Diagram</DialogTitle>
                        <DialogDescription>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}
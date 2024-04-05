'use client'

import React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/shadcn-ui/select"

export default function HeadingSelect({ headings }: { headings: any }) {
    React.useEffect(() => {
        headings.forEach((heading) => {
            let documentHeading = document.getElementById(heading.slug)
            // documentHeading.id = `${heading.slug}-${heading.index}`
        })
    })
    return (
        <Select>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Headings" />
            </SelectTrigger>
            <SelectContent>
                {
                    headings.map((heading) => {
                        return (
                            <SelectItem value={heading.href}>
                                {heading.title}
                            </SelectItem>
                        )
                    })
                }
            </SelectContent>
        </Select >
    )
}
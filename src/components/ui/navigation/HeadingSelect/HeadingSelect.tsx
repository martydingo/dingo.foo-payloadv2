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

export default function HeadingSelect() {
    return (
        <Select>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Headings" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="h1">H1</SelectItem>
            </SelectContent>
        </Select>
    )
}
'use client'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/shadcn-ui/breadcrumb"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/shadcn-ui/dropdown-menu"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import Link from "next/link"

import React from "react"

function slugify(text: string) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w-]+/g, "") // Remove all non-word chars
        .replace(/--+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, "") // Trim - from end of text
}

export default function BreadCrumb({ rootPage, curPage, allPosts, curPageData }: { rootPage: { title: string, href: string }, curPage: { title: string, href: string } | undefined, allPosts?: any, curPageData?: any }) {
    let headings: {"index": number, "title": string, "href": string }[]
    let renderHeadings = false

    if (curPageData !== undefined) {
        renderHeadings = true
        headings = curPageData.content.root.children
            .filter((childNode) => childNode.type === "heading" && childNode.tag !== "h1")
            .map((heading, index) => { return { "index": index, "title": heading.children[0].text, "href": slugify(heading.children[0].text) } })
            .sort((headingA, headingB) => headingA.index - headingB.index)
    }
    console.log(headings)

    // React.useState()

    return (
        <div className="not-prose">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href={rootPage.href}>{rootPage.title}</BreadcrumbLink>
                    </BreadcrumbItem>
                    {curPage && <BreadcrumbSeparator />}
                    {
                        curPage &&
                        <BreadcrumbItem>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center gap-1">
                                    {curPage.title}
                                    <ChevronDownIcon />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    {
                                        allPosts
                                            // .filter((post) => post.title !== curPage.title)
                                            .map((post, index) => (
                                                <DropdownMenuItem key={`breadcrumb-posts-${index}`}>
                                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                                </DropdownMenuItem>
                                            ))
                                    }
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </BreadcrumbItem>
                    }
                    {renderHeadings && <BreadcrumbSeparator />}
                    {renderHeadings &&
                        <BreadcrumbItem>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center gap-1">
                                    {headings.shift().title}
                                    <ChevronDownIcon />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    {
                                        headings
                                            // .filter((post) => post.title !== curPage.title)
                                            .map((heading, index) => (
                                                <DropdownMenuItem key={`breadcrumb-posts-${index}`}>
                                                    <Link href={`#${heading.href}`}>{heading.title}</Link>
                                                </DropdownMenuItem>
                                            ))
                                    }
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </BreadcrumbItem>
                    }


                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}
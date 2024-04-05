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

export default function BreadCrumb({ rootPage, curPage, allPosts, curPageData }: { rootPage: { title: string, href: string }, curPage: { title: string, href: string } | undefined, allPosts?: any, curPageData?: any }) {
    let renderHeadings = false
    if(curPageData !== undefined ){
        renderHeadings = true
        const headings = curPageData.content.root.children
            .filter((childNode) => {childNode.type === "heading" && childNode.tag !== "h1"})
            .map((heading) => heading.children[0].text)
        console.log(headings)
    }
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
                                                <DropdownMenuItem  key={`breadcrumb-posts-${index}`}>
                                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
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
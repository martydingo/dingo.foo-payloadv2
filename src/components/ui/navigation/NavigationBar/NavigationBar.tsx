'use client';

import { DarkModeToggle } from "@/components/dark-mode-toggle";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/shadcn-ui/navigation-menu"
import Image from "next/image";
import React from "react";

export default function NavigationBar() {
    return (
        <header className="px-4 py-3 sticky top-0 flex justify-between">
            <NavigationMenu className="mt-3">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            <p className="text-2xl font-titillium tracking-widest">dingo.foo</p>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/"
                                        >
                                            {/* <Icons.logo className="h-6 w-6" /> */}
                                            <Image className="rounded" src="/images/site/logo-64x64.png" width={64} height={64} />
                                            <div className="mb-2 mt-4 text-lg font-medium font-titillium">
                                                dingo.foo
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Yet another mix of a personal website, a blog, and a portfolio.

                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/blog" title="Blog">
                                    A collection of scribbles that I have written.
                                </ListItem>
                                <ListItem href="/projects" title="Projects">
                                    Personal projects that I have worked on.
                                </ListItem>
                                <ListItem href="/about" title="About">
                                    Further information about this website and myself.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="self-center mt-3 mr-3">
                <DarkModeToggle />
            </div>
        </header>
    )

}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
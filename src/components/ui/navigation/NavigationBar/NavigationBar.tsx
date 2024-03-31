'use client';

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

export default function NavigationBar() {
    return (
        <header className="px-4 py-2">
        <NavigationMenu>
            <div className="gap-4 flex items-center mt-2">
                <Image className="rounded-2xl" src="/images/site/logo-64x64.png" width={64} height={64} />
                <h1 className="font-titillium uppercase scroll-m-20 border-b pb-2 text-3xl font-light tracking-tight first:mt-0">
                    dingo.foo
                </h1>
            </div>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        </header>
    )
}
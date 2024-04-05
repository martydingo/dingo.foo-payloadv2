import NavigationBar from "@/components/ui/navigation/NavigationBar/NavigationBar";
import React from "react";

export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <NavigationBar curPage="Blog" />
            {children}
        </div>
    )
}
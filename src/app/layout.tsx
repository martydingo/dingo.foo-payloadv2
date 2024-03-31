import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

export const metadata: Metadata = {
  title: "dingo.foo",
  description: "Website of Marty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

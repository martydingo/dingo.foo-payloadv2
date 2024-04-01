'use client';

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/shadcn-ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/shadcn-ui/carousel"
import Image from "next/image";
import Link from "next/link";


export function BlogListCarousel({ pages }) {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )
    return (
        <Carousel plugins={[plugin.current]} className="w-full max-w-lg mx-auto">
            <CarouselContent>
                {pages.docs.map((page, index) => (
                    <CarouselItem className="" key={index}>
                        <Link href={`/blog/${page.slug}`}>
                            {page.previewImage && <Image width={"10000"} height={"10000"} sizes="100%" className="fixed object-cover z-0 brightness-75 blur-sm" alt={page.previewImage.alt} src={page.previewImage.sizes.square_small.url} />}
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center p-6">
                                        <div className={"flex flex-col self-end justify-start"} >
                                            <span className="z-10 text-white lg:text-xl text-lg font-thin lg:font-light">
                                                <sub>{new Date(page.date).toDateString()}</sub>
                                            </span>
                                            <span className="text-white z-10 text-2xl font-light lg:text-5xl self-end justify-end lg:font-base font-titillium">{page.title}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

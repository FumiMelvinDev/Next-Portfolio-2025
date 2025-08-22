import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type CarouselDemoProps = {
  images: string[];
};

export function CarouselDemo({ images }: CarouselDemoProps) {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-[480px] p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-0 h-full w-full">
                  <Image
                    src={src}
                    alt={`Project image ${index + 1}`}
                    fill
                    className="object-contain rounded"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

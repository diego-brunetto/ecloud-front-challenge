"use client";

import { Box, Flex } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

interface SlideData {
  id: string | number;
  content: React.ReactNode;
}

interface SliderProps {
  slides: SlideData[];
  itemWidth?: string;
  gap: number;
  className?: string;
}

const Slider = ({
  slides,
  itemWidth = "624px",
  gap,
  className = "",
}: SliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: false,
    slidesToScroll: 1,
    dragFree: false,
    skipSnaps: false,
    duration: 25,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <Box className={className} position="relative" w={itemWidth}>
      <Box ref={emblaRef} w="100%">
        <Flex>
          {slides.map((slide, index) => (
            <Box
              key={slide.id}
              flexShrink={0}
              w={itemWidth}
              mr={index < slides.length - 1 ? `${gap}px` : "0"}
            >
              {slide.content}
            </Box>
          ))}
          <Box flexShrink={0} w={itemWidth} />
        </Flex>
      </Box>
    </Box>
  );
};

export default Slider;

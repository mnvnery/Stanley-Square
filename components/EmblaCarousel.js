import { useCallback, useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io'

export const EmblaCarousel = ({ children, title }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    loop: true,
    align: 'center',
    breakpoints: {
      '(min-width: 768px)': {slidesToScroll: 3}
    },
  })
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [
    emblaApi
  ]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <>
      <div className="flex w-full items-center justify-between border-b border-black pb-2">
        <div className="md:mb-3 text-xl md:text-2xl">{title}</div>
        <div className="mb-2 space-x-1 md:space-x-3 text-4xl embla__dots">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`embla__dot ${index === selectedIndex ? "is-selected" : ""}`}
              type="button"
              onClick={() => scrollTo(index)}
            />
          ))}

        </div>
      </div>
      <div className="embla border-b border-black" ref={emblaRef}>
        <div className="embla__container">{children}</div>
      </div>
    </>
  )
}

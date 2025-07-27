"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { dokkuCarouselImagesVertical } from "@/app/constants";

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically slide to the next image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 3000);
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [currentIndex]);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? dokkuCarouselImagesVertical.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === dokkuCarouselImagesVertical.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="relative w-full md:w-1/3">
            {/* Image slider */}
            <div>
                <Image
                    width={400}
                    height={550}
                    src={dokkuCarouselImagesVertical[currentIndex]}
                    alt="carousel"
                    className="max-h-[550px] w-auto mx-auto object-contain rounded-md shadow-lg"
                />
                {/* Left Arrow */}
                <div
                    className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white text-4xl cursor-pointer p-2"
                    onClick={goToPrevious}
                >
                    &#8249;
                </div>
                {/* Right Arrow */}
                <div
                    className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white text-4xl cursor-pointer p-2"
                    onClick={goToNext}
                >
                    &#8250;
                </div>
                <p className="py-1 text-sm italic text-slate-600">Foto: Tadej Pernuš, Yuliya Kohal</p>
            </div>

            {/* Dots for navigation */}
            <div className="absolute top-5 left-1/4 flex space-x-2">
                {dokkuCarouselImagesVertical.map((_, slideIndex) => (
                    <div
                        key={slideIndex}
                        className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === slideIndex ? "bg-white" : "bg-gray-500"}`}
                        onClick={() => goToSlide(slideIndex)}
                    ></div>
                ))}
            </div>
        </div >
    );
};

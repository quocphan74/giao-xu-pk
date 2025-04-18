'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
    { src: "/images/image_1.jpg", caption: "Hình ảnh 1 - Slugtion nyawx" },
    { src: "/images/image_2.jpg", caption: "Hình ảnh 2 - Slugtion nyawx" },
    { src: "/images/image_3.jpg", caption: "Hình ảnh 3 - Slugtion nyawx" }
];

export default function CustomCarousel() {
    const totalSlides = images.length
    const [current, setCurrent] = useState(0)

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
    }

    const nextSlide = () => {
        setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
    }

    // Auto slide effect (change the slide every 3 seconds)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
        }, 5000) // Change slide every 3 seconds

        // Cleanup the interval on component unmount
        return () => clearInterval(interval)
    }, [totalSlides])
    return (
        <div className="container mx-auto mt-4 px-4">
            <div className="relative w-full overflow-hidden">
                {/* Slide images */}
                <div className="flex transition-transform duration-500" style={{
                    width: `${(totalSlides) * 100}%`,
                    transform: `translateX(-${current * (100 / totalSlides)}%)`,
                }}>
                    {images.map((image, idx) => (
                        <div
                            key={idx}
                            className="w-full md:w-1/3 relative"
                        >
                            <Image
                                src={image.src}
                                alt={`slide-${idx}`}
                                width={500}
                                height={200}
                                className="h-96 object-cover w-full"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-white text-xl font-semibold text-center drop-shadow-lg px-4">
                                    {image.caption}
                                </p>
                            </div>
                        </div>

                    ))}
                </div>

                {/* Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-3 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
                >
                    ❮
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-3 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
                >
                    ❯
                </button>

                {/* Indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {Array.from({ length: totalSlides }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-white' : 'bg-gray-400'} transition`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

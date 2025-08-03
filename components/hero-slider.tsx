"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const slides = [
  {
    image: "https://storage.planner5d.com/s/0e0f80fcadce72ee22756bd7a331090d_2165345.jpg?v=1733403686",
    alt: "Modern Interior Design with False Ceiling",
    title: "Interior Design",
  },
  {
    image: "https://imgs.search.brave.com/S1bSVbDF4Eaca8B9ohlTOy2BJR3q871PLJEnp6NwXIQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTAy/NzA2NjcxL3Bob3Rv/L21vZGVybi1vZmZp/Y2UtYXJjaGl0ZWN0/dXJlLWhhbWJ1cmct/aGFmZW5jaXR5LXVu/aXZlcnNpdHkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWlW/Vm4xYUctSXlXYjQw/b2xDUktrbmlfbVJ5/QVdWQjdENnNGQUdl/UkRXZms9",
    alt: "Glass Work and Toughened Glass Installation",
    title: "Glass Works",
  },
  {
    image: "https://imgs.search.brave.com/kM9N4yD82cXUdm_l-Gf_ejN834Lys6Yk6YXr-FnEW6Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzE3LzE0LzIz/LzM2MF9GXzEwMTcx/NDIzMjhfMXhRT2Q4/R0NmcVo1dlE3b0J0/blc1bHRjNUpLc3Bp/VkkuanBn",
    alt: "c:\Users\suba2\OneDrive\Gambar\exterior design.jpg",
    title: "Exterior Design",
  },
  {
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/a529d5229453039.Y3JvcCwxNTQwLDEyMDQsMCwzMDQ.jpg",
    alt: "Stainless Steel Railing and Aluminium Work",
    title: "Metal Fabrication",
  },
  {
    image: "https://imgs.search.brave.com/iB7KT_w7E7cIK1C4jjha-55lc_aMd-TeS6o263J4DHg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFmLzkw/L2MyLzFmOTBjMjg0/NDQ5MDI0Y2E0NWNj/ZWFmODQyMjAwOGFh/LmpwZw",
    alt: "Complete Home Interior with Plywood Cupboards",
    title: "Complete Solutions",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay text for current slide */}
          <div className="absolute bottom-20 left-8 z-20">
            <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg">
              <p className="text-white text-sm font-medium">{slide.title}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-amber-400" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

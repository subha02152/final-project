"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Neesh Interior & Exterior</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Your trusted partner in creating exceptional spaces that blend functionality with aesthetic excellence
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a passion for transforming spaces, Neesh Interior & Exterior has been at the forefront of
                innovative design solutions. Our journey began with a simple vision: to create spaces that not only look
                beautiful but also enhance the quality of life for those who inhabit them.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Over the years, we have built a reputation for excellence, delivering projects that exceed expectations
                and stand the test of time. Our commitment to quality, attention to detail, and customer satisfaction
                has made us a preferred choice for discerning clients.
              </p>
              <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black">
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://imgs.search.brave.com/gfphZYH92V0z7NTbG4ZkMVlReozBrZAM97KObV887dw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTY4/NjQ5NzkzNS9waG90/by9idXNpbmVzcy1t/YW4tcnVubmluZy1v/bi1hcnJvdy1zaGFw/ZWQtYnJpZGdlLXRv/LXRoZS1saWdodC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/dmFLSXg4Z2VsS21T/R3ZXSUFnVENIXzJY/alU1dlNKa1RzdkZ3/T2JXSmNWdz0"
                alt="Our team at work"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are driven by core values that guide every project we undertake
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Star className="h-8 w-8 text-amber-600" />,
                title: "Excellence",
                desc: "We strive for perfection in every detail, ensuring the highest quality in all our work.",
              },
              {
                icon: <Quote className="h-8 w-8 text-amber-600" />,
                title: "Innovation",
                desc: "We embrace new technologies and design trends to deliver cutting-edge solutions.",
              },
              {
                icon: <Star className="h-8 w-8 text-amber-600" />,
                title: "Integrity",
                desc: "Honest communication and transparent practices form the foundation of our relationships.",
              },
              {
                icon: <Star className="h-8 w-8 text-amber-600" />,
                title: "Sustainability",
                desc: "We prioritize eco-friendly materials and practices for a better tomorrow.",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

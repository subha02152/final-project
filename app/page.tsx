import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Star, Users, Award, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { HeroSlider } from "@/components/hero-slider"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <HeroSlider />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Neesh Interior <span className="text-amber-400">&</span> Exterior
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Transforming spaces with innovative design solutions for both interior and exterior environments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
              <Link href="/services">
                View Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Crafting Exceptional Spaces Since Years</h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              At Neesh Interior & Exterior, we specialize in creating stunning, functional spaces that reflect your
              unique style and needs. From intricate interior designs to impressive exterior facades, our team of
              experts brings your vision to life with precision and creativity.
            </p>

            <div className="grid md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Expert Team</h3>
                <p className="text-gray-600 text-sm">Skilled professionals with years of experience</p>
              </div>

              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Quality Work</h3>
                <p className="text-gray-600 text-sm">Premium materials and superior craftsmanship</p>
              </div>

              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Timely Delivery</h3>
                <p className="text-gray-600 text-sm">Projects completed on schedule</p>
              </div>

              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Client Satisfaction</h3>
                <p className="text-gray-600 text-sm">100% customer satisfaction guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Specialized Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive interior and exterior design solutions tailored to your specific requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "False Ceiling",
                description: "Modern false ceiling designs that enhance your space aesthetics",
                image: "https://imgs.search.brave.com/WFxGI3CktDn0Bj-diOPCxpr-b027Kp6vSWY6rYS-9VY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzY3LzQ2LzA5/LzM2MF9GXzQ2NzQ2/MDk1NF9iQm5QNlpn/MllsbmsxWnJ0czBX/a0FBbEEycGlDc3d0/NS5qcGc",
              },
              {
                title: "Toughened Glass",
                description: "Premium glass installations for safety and elegance",
                image: "https://imgs.search.brave.com/GKytHe4mgn9TS2fuccKcpSii9o8266TwYOQJYyv5tuo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlZ2xhc3N3YXJl/aG91c2UuY28udWsv/d3AtY29udGVudC9z/bXVzaC13ZWJwLzIw/MjIvMTEvVG91Z2hl/bmVkLUxhbWluYXRl/ZC1HbGFzcy1zdGFp/ci10cmVhZHMtMTAy/NHg2ODIuanBnLndl/YnA",
              },
              {
                title: "Aluminium Fabrication",
                description: "Custom aluminium solutions for modern architectural needs",
                image: "https://imgs.search.brave.com/n8w5JBn99-KKlyqvo58mTQes6nft3xoLPD465lwSWeg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hbGxv/eXNpbnRsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/Ni9BbHVtaW51bS1N/YW51ZmFjdHVyaW5n/LmpwZWc",
              },
              {
                title: "SS Railing Works",
                description: "Stylish and durable stainless steel railing systems",
                image: "https://imgs.search.brave.com/93_bG0p8s465oPsE-WVgVu7v5_y2M52FUCO8nOSmh80/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ncmVj/b3JhaWxpbmdzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wOC81MTBTUy01/MDB4MzUwLTEuanBn",
              },
              {
                title: "Plywood Cupboards",
                description: "Custom-designed storage solutions for every space",
                image: "https://imgs.search.brave.com/lhH3Ek0ehBnV9XsfRBA-IdgdkgPmDMHa27J5-b7TFe8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE2Lzgw/L2RhLzE2ODBkYTQx/ZGI3YTUyYmI5MzU5/NjliNjI2NWFiNjU0/LmpwZw",
              },
              {
                title: "Exterior Elevation",
                description: "Stunning facade designs with glass and ACP cladding",
                image: "https://imgs.search.brave.com/dQqKJB34x6jjLrwVjnjHuVu6DbhmjVG0BnPVscwh5Gk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/MzkyNTZlZjFjNDc2/YjNhMTVkMTMzMmMv/NjVlNjNlY2RkZTUw/ZGViZjZiOWU1YjNl/X2JjOTM4MjY4LWI2/YjQtNGZiMi1iYmEw/LTA0MjMwMjBhYTc4/NS53ZWJw",
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link href="/services" className="text-amber-600 hover:text-amber-700 font-medium text-sm">
                      Learn More →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-slate-800 hover:bg-slate-700">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and bring your vision to life with our expert design solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

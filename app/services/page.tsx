import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  const services = [
    {
      title: "False Ceiling",
      description:
        "Transform your space with our premium false ceiling solutions that combine aesthetics with functionality.",
      image: "https://imgs.search.brave.com/ce5--2aUCfk6IxApO8y_StT4VM0LLkobpWchLoEv0uA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NlL2Zj/LzAyL2NlZmMwMmZl/ZmUzYzQyZDFlMzAw/N2NkZDIwNDgzZmM1/LmpwZw",
      benefits: [
        "Enhanced room aesthetics and visual appeal",
        "Improved lighting distribution and ambiance",
        "Better acoustics and sound insulation",
        "Concealed wiring and HVAC systems",
        "Energy-efficient lighting integration",
      ],
      features: [
        "Gypsum board false ceilings",
        "POP (Plaster of Paris) designs",
        "Metal grid ceiling systems",
        "Wooden false ceiling options",
        "LED lighting integration",
      ],
    },
    {
      title: "Toughened Glass Installations",
      description:
        "Premium quality toughened glass solutions for safety, elegance, and modern architectural requirements.",
      image: "https://imgs.search.brave.com/ZcNXhC0XqgFFNVVjOdn5YWXLEH7rJLRxc68A8ZjYfDI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYWRl/dG9tZWFzdXJlZ2xh/c3MuY28udWsvaW1h/Z2UvY2FjaGUvY2F0/YWxvZy9nbGFzcy9s/b3dpcm9uLTUzMHgz/NzIuanBn",
      benefits: [
        "5x stronger than regular glass",
        "Enhanced safety with minimal injury risk",
        "Superior clarity and transparency",
        "Weather and temperature resistant",
        "Easy maintenance and cleaning",
      ],
      features: [
        "Structural glazing systems",
        "Glass partitions and doors",
        "Shower enclosures and bathrooms",
        "Balcony and staircase railings",
        "Curtain wall installations",
      ],
    },
    {
      title: "Aluminium Fabrication",
      description: "Custom aluminium fabrication services for modern architectural needs with precision engineering.",
      image: "https://imgs.search.brave.com/iZZrtZFlkvwcNXgzNqzA4aALWhQb5Roxi71f_rdPb6Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTIz/MTE1ODcyL3Bob3Rv/L3N0ZWVsLXR1YmVz/LWF0LW1ldGFsLXdv/cmstZmFjdG9yeS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/TVViVEJocTBJa3Jn/NFlBSUhIcmx4NkJx/WV9aTWstUEVXVnFC/TWJSaVpGYz0",
      benefits: [
        "Lightweight yet strong construction",
        "Corrosion resistant and durable",
        "Low maintenance requirements",
        "Excellent thermal properties",
        "Recyclable and eco-friendly",
      ],
      features: [
        "Window and door frames",
        "Curtain wall systems",
        "Structural glazing",
        "Composite panel cladding",
        "Custom architectural elements",
      ],
    },
    {
      title: "Stainless Steel Railing Works",
      description: "Stylish and durable stainless steel railing systems that combine safety with contemporary design.",
      image: "https://imgs.search.brave.com/dluR1jRR0LVIlyKp-1eKSd-M7al_Mg1su6yjK-nfFec/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9TRUxMRVIvRGVm/YXVsdC8yMDI1LzEv/NDgzODkxMjAyL0xK/L1BEL1FXLzEzOTg1/MDIyOC9zcy1zdGFp/cmNhc2UtNTAweDUw/MC53ZWJw",
      benefits: [
        "Exceptional durability and longevity",
        "Corrosion and rust resistance",
        "Modern and sleek appearance",
        "Low maintenance requirements",
        "Hygienic and easy to clean",
      ],
      features: [
        "Staircase railings and handrails",
        "Balcony and terrace railings",
        "Glass combination railings",
        "Custom design patterns",
        "Indoor and outdoor installations",
      ],
    },
    {
      title: "Plywood Cupboard Design & Installation",
      description: "Custom-designed storage solutions using premium plywood for maximum functionality and style.",
      image: "https://imgs.search.brave.com/qyy0i_X9M2pX32bIYIoNZPFPB0oRTrVF5EferABSWUM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFhZG5ZTng1OEwu/anBn",
      benefits: [
        "Maximized storage efficiency",
        "Custom designs for any space",
        "Premium quality materials",
        "Cost-effective solutions",
        "Quick installation process",
      ],
      features: [
        "Bedroom wardrobes and closets",
        "Kitchen cabinets and pantries",
        "Study room and office storage",
        "Living room entertainment units",
        "Bathroom vanity units",
      ],
    },
    {
      title: "Exterior Elevation (Glass & ACP Cladding)",
      description: "Stunning facade designs using glass and ACP cladding to create impressive exterior elevations.",
      image: "https://imgs.search.brave.com/Z6ZA5LHp6YquFBEMfDk6HBhJfPxuk-12dXevIUu_rfM/rs:fit:500:0:0:0/g:ce/aHR0cDovL2xpZmVv/ZmFuYXJjaGl0ZWN0/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNi8wOC9za2V0/Y2hpbmctYXJjaGl0/ZWN0dXJhbC1leHRl/cmlvci1lbGV2YXRp/b25zLTYwMHg0NTAu/anBn",
      benefits: [
        "Enhanced building aesthetics",
        "Weather protection and insulation",
        "Increased property value",
        "Energy-efficient solutions",
        "Low maintenance exterior",
      ],
      features: [
        "ACP (Aluminium Composite Panel) cladding",
        "Structural glazing systems",
        "Curtain wall installations",
        "Ventilated facade systems",
        "Custom color and finish options",
      ],
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Specialized Services</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive interior and exterior design solutions tailored to your unique requirements
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <h2 className="text-4xl font-bold text-slate-800 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">Key Benefits:</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">What We Offer:</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black">
                    <Link href="/contact">
                      Contact Us for More Info
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card className="bg-slate-800 text-white p-12 text-center">
            <CardContent>
              <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our experts help you choose the perfect solution for your space. Contact us today for a free
                consultation and detailed quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-black"
                >
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

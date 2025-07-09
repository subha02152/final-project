"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to transform your space? Contact us today for a free consultation and detailed quote
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service">Service Interested In</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="">Select a service</option>
                        <option value="false-ceiling">False Ceiling</option>
                        <option value="toughened-glass">Toughened Glass Installations</option>
                        <option value="aluminium-fabrication">Aluminium Fabrication</option>
                        <option value="ss-railing">Stainless Steel Railing Works</option>
                        <option value="plywood-cupboard">Plywood Cupboard Design</option>
                        <option value="exterior-elevation">Exterior Elevation</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="mt-1"
                        placeholder="Please describe your project requirements, timeline, and any specific details..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-black">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-amber-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-800">Our Office</h3>
                      <p className="text-gray-600">
                        Opp. Durga Dying, Ellampillai Main Road
                        <br />
                        Kakapalayam, Salem - 637504
                        <br />
                        Tamil Nadu, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-amber-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-800">Phone</h3>
                      <p className="text-gray-600">+91  9080825986</p>
                      <p className="text-gray-600">+91  9629302934</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-amber-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-800">Email</h3>
                      <p className="text-gray-600">sarathmcdc1994@gmail.com</p>
                      <p className="text-gray-600">Naveenmcdc@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-amber-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-800">Working Hours</h3>
                      <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Contact */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <MessageCircle className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-slate-800">Quick WhatsApp Contact</h3>
                      <p className="text-gray-600 mb-3">Get instant responses to your queries</p>
                      <Button asChild className="bg-green-600 hover:bg-green-700">
                        <a
                          href="https://wa.me/919080825986?text=Hi%20Neesh%20Interior%20%26%20Exterior%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Chat on WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">Visit our office for in-person consultations</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.8234567890123!2d78.1461!3d11.6643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1ccf52421db%3A0x4f8b8b8b8b8b8b8b!2sSalem%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Neesh Interior & Exterior Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

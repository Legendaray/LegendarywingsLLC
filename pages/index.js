import React from "react";
import Card, { CardContent } from "../components/ui/card";
import Button from "../components/ui/button";

export default function HomePage() {
  return (
    <main className="bg-blue-900 text-white min-h-screen p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <div className="flex items-center space-x-4">
          <img
            src="/logo.png"
            alt="Legendary Wings LLC Logo"
            className="h-16"
          />
          <h1 className="text-3xl font-bold text-gold-400">LEGENDARY WINGS LLC</h1>
        </div>
        <div className="text-right">
          <p>3058 W Belmont Ave, Suite 2F-2</p>
          <p>Chicago, IL 60618</p>
          <p className="font-bold">(312) 961-3335</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="flex space-x-6 mb-12 text-lg font-semibold">
        <a href="#about" className="hover:text-gold-400">About</a>
        <a href="#services" className="hover:text-gold-400">Services</a>
        <a href="#tracking" className="hover:text-gold-400">Tracking</a>
        <a href="#testimonials" className="hover:text-gold-400">Testimonials</a>
        <a href="#contact" className="hover:text-gold-400">Contact</a>
      </nav>

      {/* About Section */}
      <section id="about" className="mb-16">
        <h2 className="text-2xl font-bold mb-2">About Us</h2>
        <p>
          We are a professional transportation company providing reliable cargo van
          services nationwide with a commitment to security, punctuality, and GPS
          tracking.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4">
              <img
                src="/ram-promaster.png"
                alt="Ram Promaster"
                className="w-full rounded-xl"
              />
              <p className="mt-2">RAM Promaster 159W Extended Van</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <img
                src="/mercedes-sprinter.png"
                alt="Mercedes Sprinter"
                className="w-full rounded-xl"
              />
              <p className="mt-2">Mercedes Sprinter 2500 High Roof</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tracking Section */}
      <section id="tracking" className="mb-16">
        <h2 className="text-2xl font-bold mb-2">GPS Tracking</h2>
        <p>
          Our cargo vans are equipped with real-time GPS tracking to ensure security,
          transparency, and efficiency for every shipment.
        </p>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
        <blockquote className="italic">
          “Excellent service and always on time!”
        </blockquote>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-1">Phone: <strong>(312) 961-3335</strong></p>
        <p className="mb-1">Email: <a href="mailto:contact@legendarywingsllc.com" className="text-gold-400 underline">contact@legendarywingsllc.com</a></p>
        <p>Email: <a href="mailto:info@legendarywingsllc.com" className="text-gold-400 underline">info@legendarywingsllc.com</a></p>
      </section>
    </main>
  );
}

import React, { useState } from "react";

export default function HomePage() {
  const [lang, setLang] = useState("es");

  const t = {
    es: {
      about: "Sobre Nosotros",
      aboutText:
        "Somos una empresa de transporte confiable con seguimiento GPS en todo EE.UU.",
      services: "Servicios",
      servicesText:
        "Transportamos mercancía con RAM Promaster y Mercedes Sprinter 2500.",
      gps: "GPS",
      gpsText: "Nuestras unidades cuentan con seguimiento en tiempo real.",
      testimonials: "Testimonios",
      testimonialsText: "\"Excelente servicio y siempre puntuales.\"",
      contact: "Contacto",
      phone: "Tel: (312) 961-3335",
      email: "Email: contact@legendarywingsllc.com",
      navAbout: "Sobre Nosotros",
      navServices: "Servicios",
      navGps: "GPS",
      navTestimonials: "Testimonios",
      navContact: "Contacto",
      footer: "Todos los derechos reservados."
    },
    en: {
      about: "About Us",
      aboutText:
        "We are a reliable transportation company with GPS tracking across the U.S.",
      services: "Services",
      servicesText:
        "We transport goods with RAM Promaster and Mercedes Sprinter 2500 vans.",
      gps: "GPS",
      gpsText: "Our vans have real-time GPS tracking systems.",
      testimonials: "Testimonials",
      testimonialsText: "\"Excellent service and always on time.\"",
      contact: "Contact",
      phone: "Phone: (312) 961-3335",
      email: "Email: contact@legendarywingsllc.com",
      navAbout: "About Us",
      navServices: "Services",
      navGps: "GPS",
      navTestimonials: "Testimonials",
      navContact: "Contact",
      footer: "All rights reserved."
    }
  };

  const content = t[lang];

  return (
    <main className="bg-blue-900 text-white min-h-screen p-6">
      {/* Language Switcher */}
      <div className="text-right mb-4">
        <span className="mr-2">🌐 Language:</span>
        <button
          onClick={() => setLang("es")}
          className="px-2 py-1 bg-gray-200 text-black mr-2"
        >
          Español
        </button>
        <button
          onClick={() => setLang("en")}
          className="px-2 py-1 bg-gray-200 text-black"
        >
          English
        </button>
      </div>

      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Legendary Wings LLC Logo" className="h-16" />
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
        <a href="#about" className="hover:text-gold-400">
          {content.navAbout}
        </a>
        <a href="#services" className="hover:text-gold-400">
          {content.navServices}
        </a>
        <a href="#gps" className="hover:text-gold-400">
          {content.navGps}
        </a>
        <a href="#testimonials" className="hover:text-gold-400">
          {content.navTestimonials}
        </a>
        <a href="#contact" className="hover:text-gold-400">
          {content.navContact}
        </a>
      </nav>

      {/* About */}
      <section id="about" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.about}</h2>
        <p>{content.aboutText}</p>
      </section>

      {/* Services */}
      <section id="services" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.services}</h2>
        <p>{content.servicesText}</p>
      </section>

      {/* GPS */}
      <section id="gps" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.gps}</h2>
        <p>{content.gpsText}</p>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.testimonials}</h2>
        <blockquote>{content.testimonialsText}</blockquote>
      </section>

      {/* Contact */}
      <section id="contact" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.contact}</h2>
        <p>{content.phone}</p>
        <p>{content.email}</p>
      </section>

      <footer className="text-center mt-12">
        <p>&copy; 2025 Legendary Wings LLC. {content.footer}</p>
      </footer>
    </main>
  );
}

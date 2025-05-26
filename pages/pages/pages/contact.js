import React from "react";

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">Contáctanos</h1>
      <p className="text-lg mb-6 max-w-xl text-center">
        Si tienes preguntas o deseas realizar un pedido, escríbenos o llámanos.
      </p>
      <div className="space-y-2 text-center">
        <p><strong>Teléfono:</strong> <a href="tel:+17735551234" className="text-blue-600">+1 773 555 1234</a></p>
        <p><strong>Email:</strong> <a href="mailto:info@legendarywingsllc.com" className="text-blue-600">info@legendarywingsllc.com</a></p>
        <p><strong>Dirección:</strong> 1234 W. Wing St., Chicago, IL</p>
      </div>
    </main>
  );
}

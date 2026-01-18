"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function TiendaClient() {
  const params = useSearchParams();
  const nombre = params.get("nombre");
  const wa = params.get("wa");

  const [ubicacion, setUbicacion] = useState("");

  const obtenerUbicacion = () => {
    if (!navigator.geolocation) {
      alert("Tu navegador no soporta ubicación");
      return;
    }

    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      const link = `https://maps.google.com/?q=${lat},${lng}`;
      setUbicacion(link);
    });
  };

  const enviarPedido = () => {
    const mensaje = `
Hola, quiero hacer un pedido en ${nombre}

📍 Mi ubicación:
${ubicacion || "No proporcionada"}
    `;

    window.open(
      `https://wa.me/${wa}?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>🛍 {nombre}</h1>
      <p>Producto demo: $100</p>

      <button
        onClick={obtenerUbicacion}
        style={{
          display: "block",
          marginBottom: 10,
          padding: "10px",
        }}
      >
        📍 Usar mi ubicación
      </button>

      {ubicacion && (
        <p>
          Ubicación capturada ✔ <br />
          <a href={ubicacion} target="_blank">
            Ver en mapa
          </a>
        </p>
      )}

      <button
        onClick={enviarPedido}
        style={{
          marginTop: 20,
          padding: "12px 20px",
          background: "#25D366",
          color: "#fff",
          border: "none",
          borderRadius: 6,
        }}
      >
        Enviar pedido por WhatsApp
      </button>
    </main>
  );
}

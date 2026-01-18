"use client";

import { useState } from "react";

export default function Registro() {
  const [nombre, setNombre] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  return (
    <main style={{ padding: 40 }}>
      <h2>Crear tienda UBIKT</h2>

      <input
        placeholder="Nombre del negocio"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        style={{ display: "block", marginBottom: 10, padding: 8 }}
      />

      <input
        placeholder="WhatsApp (ej: 5215512345678)"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
        style={{ display: "block", marginBottom: 20, padding: 8 }}
      />

      <a
        href={`/tienda?nombre=${nombre}&wa=${whatsapp}`}
        style={{
          padding: "10px 16px",
          background: "green",
          color: "#fff",
          borderRadius: 6,
          textDecoration: "none",
        }}
      >
        Crear tienda
      </a>
    </main>
  );
}

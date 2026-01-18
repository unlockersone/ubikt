"use client";

import { useSearchParams } from "next/navigation";

export default function Tienda() {
  const params = useSearchParams();
  const nombre = params.get("nombre");
  const wa = params.get("wa");

  const enviarPedido = () => {
    const mensaje = `Hola, quiero hacer un pedido en ${nombre}`;
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
        onClick={enviarPedido}
        style={{
          padding: "12px 20px",
          background: "#25D366",
          color: "#fff",
          border: "none",
          borderRadius: 6,
        }}
      >
        Pedir por WhatsApp
      </button>
    </main>
  );
}

export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>🚀 UBIKT</h1>
      <p>Tu tienda en línea que recibe pedidos directo en WhatsApp</p>

      <a
        href="/registro"
        style={{
          display: "inline-block",
          marginTop: 20,
          padding: "12px 20px",
          background: "#000",
          color: "#fff",
          textDecoration: "none",
          borderRadius: 6,
        }}
      >
        Crear mi tienda gratis
      </a>
    </main>
  );
}

import { Suspense } from "react";
import TiendaClient from "./TiendaClient";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<p>Cargando tienda...</p>}>
      <TiendaClient />
    </Suspense>
  );
}

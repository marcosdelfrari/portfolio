import EcosystemPage from "@/components/ecosystem-page";
import JsonLd from "@/components/json-ld";
import { buildEcosystemJsonLd, buildEcosystemMetadata } from "@/lib/seo";

export const metadata = buildEcosystemMetadata();

export default function Page() {
  return (
    <>
      <h1 className="sr-only">
        Ecossistema de Marcos Lucas — Dharma, Lótus e Fractal
      </h1>
      <JsonLd data={buildEcosystemJsonLd()} />
      <EcosystemPage />
    </>
  );
}

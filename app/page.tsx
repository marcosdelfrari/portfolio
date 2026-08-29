import Home from "@/components/home";
import JsonLd from "@/components/json-ld";
import { buildHomeJsonLd, buildHomeMetadata } from "@/lib/seo";

export const metadata = buildHomeMetadata();

export default function Page() {
  return (
    <>
      <h1 className="sr-only">
        Marcos Lucas — Engenheiro de Software Front-End
      </h1>
      <JsonLd data={buildHomeJsonLd()} />
      <Home />
    </>
  );
}

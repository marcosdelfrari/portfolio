import Navbar from "@/components/header";
import Footer from "@/components/footer";
import GoogleAnalytics from "@/components/google-analytics";
import Script from "next/script";
import "./globals.css";
import { Inter } from "next/font/google";
import { buildDefaultMetadata } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = buildDefaultMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('dark');try{localStorage.removeItem('theme')}catch(e){}`,
          }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen bg-black text-zinc-400 antialiased selection:bg-white/20 selection:text-zinc-100`}
      >
        <Script src="/webmcp.js" strategy="beforeInteractive" />
        <GoogleAnalytics />
        <div>
          <Navbar />
        </div>

        {children}

        <Footer />
      </body>
    </html>
  );
}

import Navbar from "@/components/header";
import Footer from "@/components/footer";
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
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.className} bg-white text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div>
          <Navbar />
        </div>

        {children}

        <Footer />
      </body>
    </html>
  );
}

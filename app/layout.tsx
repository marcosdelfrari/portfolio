import Navbar from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";
import { Inter } from "next/font/google";
import ThemeSwitch from "@/components/themeSwitch";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marcos Lucas | Engenheiro de Software",
  description: "Portifólio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div
          className="sm:bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
        sm:w-[68.75rem] dark:sm:bg-[#966263]"
        ></div>
        <div
          className="sm:bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
        sm:w-[68.75rem] md:left-[-35rem] lg:left-[-28rem] xl-left-[-15rem] 2xl-[-5rem] dark:sm:bg-[#676394]"
        ></div>
        <div>
          <Navbar />
        </div>

        {children}

        <Footer />
      </body>
    </html>
  );
}

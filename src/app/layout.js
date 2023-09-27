import { Poppins } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/utils/providers";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Star Wars Tables App",
  description: "Shadcn test tables - Made by Elias",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={poppins.className}>
        <Providers>
          <Header />
          <div className="max-w-5xl m-auto w-full p-4">
            {children}
            <Analytics />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

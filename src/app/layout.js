import "@/styles/globals.css";
import { Libre_Baskerville } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "EquiOptions",
  description: "Simplifying Investments, Empowering Communities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>

      <body className={`${libreBaskerville.variable}`}>
        <Navbar />
        {children}
        <Footer />

      </body>
    
    </html>
  );
}

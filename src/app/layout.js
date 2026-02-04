import { Geist, Geist_Mono, Archivo, Fraunces, Prata, Domine, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";




const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["100" ,"200","300", "400", "500", "600", "700"],
});

const prata = Prata({
  variable: "--font-prata",
  subsets: ["latin"],
  weight: ["400"],
});

const domine = Domine({
  variable: "--font-domine",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal"],
});

export const metadata = {
  title: "Susan Terapi",
  description: "Psykoterapi v. Susan Albertsen",
  icons: {
    icon: "/logo/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
         
      <body
        className={`${archivo.variable} ${fraunces.variable} ${prata.variable} ${domine.variable} ${sourceSerif.variable} antialiased`}
      >
  
  {children}
  <Footer />
      </body>
    </html>
  );
}

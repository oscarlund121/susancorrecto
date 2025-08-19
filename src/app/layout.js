import { Geist, Geist_Mono, Archivo, Fraunces } from "next/font/google";
import "./globals.css";
import Navigation from "./components/layout/Navigation";



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

export const metadata = {
  title: "Susan Terapi",
  description: "Psykoterapi v. Susan Albertsen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
         
      <body
        className={`${archivo.variable} ${fraunces.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

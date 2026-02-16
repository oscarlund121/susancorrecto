import { Geist, Geist_Mono, Open_Sans, Fraunces, Prata, Domine, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";




const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
  metadataBase: new URL('https://www.psykoterapisusan.dk'),
  title: {
    default: 'Psykoterapeut Susan Albertsen | Psykoterapi i Aarhus',
    template: '%s | Psykoterapeut Susan Albertsen',
  },
  description: 'Professionel psykoterapi i Aarhus. Få hjælp til angst, stress, traumer, lavt selvværd og relationer. EMDR-behandling, meditation og integrativ psykoterapi. Book en samtale i dag.',
  keywords: ['psykoterapeut', 'psykoterapi', 'terapi', 'Aarhus', 'angst', 'stress', 'EMDR', 'traumer', 'parterapi', 'familieterapi', 'meditation', 'selvværd', 'depression'],
  authors: [{ name: 'Susan Albertsen' }],
  creator: 'Susan Albertsen',
  publisher: 'Susan Albertsen',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Psykoterapeut Susan Albertsen | Psykoterapi i Aarhus',
    description: 'Professionel psykoterapi i Aarhus. Få hjælp til angst, stress, traumer, lavt selvværd og relationer. Book en samtale i dag.',
    url: 'https://www.psykoterapisusan.dk',
    siteName: 'Psykoterapeut Susan Albertsen',
    locale: 'da_DK',
    type: 'website',
    images: [
      {
        url: '/img/about-front.jpg',
        width: 1200,
        height: 630,
        alt: 'Psykoterapeut Susan Albertsen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psykoterapeut Susan Albertsen | Psykoterapi i Aarhus',
    description: 'Professionel psykoterapi i Aarhus. Få hjælp til angst, stress, traumer og relationer.',
    images: ['/img/about-front.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/logo/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
         
      <body
        className={`${openSans.variable} ${fraunces.variable} ${prata.variable} ${domine.variable} ${sourceSerif.variable} antialiased`}
      >
  
  {children}
  <Footer />
      </body>
    </html>
  );
}

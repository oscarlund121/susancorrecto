"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import Button from "../ui/Button";

const MapLeaflet = dynamic(() => import("../ui/MapLeaflet"), { ssr: false });

const Footer = ({ coords = { lat: 55.6761, lng: 12.5683 } }) => {
  return (
    <footer className="bg-[#367067] text-white py-10">
      <div className="content-max grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="">
        <div className="">
          <h3 className="text-xl font-semibold mb-2">Susan Albertsen</h3>
          <p className="text-sm text-center opacity-90 mb-4">Psykoterapi & rådgivning</p>
          <div className="flex flex-row gap-6">
            <div className="flex flex-col items-center gap-2">
              <Link href="/kontakt" className="hover:underline">EMDR</Link>
              <Link href="/kontakt" className="hover:underline">Essential Integrativ Psykoterapi</Link>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Link href="/kontakt" className="hover:underline">Meditation</Link>
              <Link href="/kontakt" className="hover:underline">Familie- & parterapi</Link>
            </div>
          </div>
        </div>
          {/*  <nav aria-label="Footer navigation" className="text-xs opacity-75 font-light">
            <ul className="space-y-1">
            
              <li>
                <Link href="/omSusan" className="hover:underline">Om Susan</Link>
              </li>
              <li>
                <Link href="/ydelser/essentiel-integrativ-psykoterapi" className="hover:underline">Essentiel Integrativ Psykoterapi</Link>
              </li>
              <li>
                <Link href="/ydelser/emdr" className="hover:underline">EMDR</Link>
              </li>
              <li>
                <Link href="/ydelser/meditation" className="hover:underline">Meditation</Link>
              </li>
              <li>
                <Link href="/ydelser/familie-par" className="hover:underline">Familie- & parterapi</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:underline">Priser</Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:underline">Kontakt</Link>
              </li>
            </ul>
          </nav> */}
        </div>

        <div className="flex flex-col">
          <h4 className="font-semibold mb-2">Kontakt</h4>
          <p className="text-sm">Vesterbrogade 1, 1620 København</p>
          <p className="text-sm mt-2">
            <a href="tel:+4512345678" className="hover:underline">+45 12 34 56 78</a>
          </p>
          <p className="text-sm">
            <a href="mailto:kontakt@susancorrecto.dk" className="hover:underline">kontakt@susancorrecto.dk</a>
          </p>
          <div className="mt-4 flex justify-end items-end">
            <Button variant="secondary">Book en samtale</Button>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Placering</h4>
          <MapLeaflet lat={coords.lat} lng={coords.lng} zoom={15} />
          <p className="text-xs opacity-90 mt-2">© OpenStreetMap contributors</p>
        </div>
      </div>

      <div className="content-max mt-6 border-t border-white/20 pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Susan Albertsen. Alle rettigheder forbeholdes.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm hover:underline">Privacy</a>
          <a href="#" className="text-sm hover:underline">Sitemap</a>
          <a href="https://www.linkedin.com/in/susan-albertsen" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">LinkedIn</a>
          <a href="https://www.facebook.com/susancorrecto" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">Facebook</a>
          <a href="https://www.instagram.com/susancorrecto" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const MapLeaflet = dynamic(() => import("../ui/MapLeaflet"), { ssr: false });

const Footer = ({ coords = { lat: 56.1629, lng: 10.2039 } }) => {
  const SocialIcon = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:underline transition-colors">
      {children}
    </a>
  );

  return (
    <footer className="bg-zinc-900 text-white py-16">
      <div className="content-max">
        {/* Top section with navigation and contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Branding */}
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className=" text-white">Susan Albertsen</h4>
            <p className="mt-2 text-sm text-white">Psykoterapi & rådgivning</p>
          </div>

          {/* Column 2: Ydelser */}
          <div>
            <h4 className="font-semibold text-white">Ydelser</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/ydelser/emdr" className="hover:underline transition-colors">EMDR</Link></li>
              <li><Link href="/ydelser/essentiel-integrativ-psykoterapi" className="hover:underline transition-colors">Essentiel Integrativ Psykoterapi</Link></li>
              <li><Link href="/ydelser/meditation" className="hover:underline transition-colors">Meditation</Link></li>
              <li><Link href="/ydelser/familie-par" className="hover:underline transition-colors">Familie- & parterapi</Link></li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h4 className="font-semibold text-white">Navigation</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/omSusan" className="hover:underline transition-colors">Om Susan</Link></li>
              <li><Link href="/pricing" className="hover:underline transition-colors">Priser</Link></li>
              <li><Link href="/kontakt" className="hover:underline transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Column 4: Kontakt */}
          <div>
            <h4 className="font-semibold text-white">Kontakt</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Skolebakken 7 st th, 8000 Aarhus</li>
              <li><a href="mailto:susan@susanterapi.dk" className="hover:underline transition-colors">susan@susanterapi.dk</a></li>
              <li><a href="tel:+45253925 39" className="hover:underline transition-colors">+45 25 39 25 39</a></li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h4 className="font-semibold text-white mb-4">Find vej</h4>
          <MapLeaflet lat={coords.lat} lng={coords.lng} zoom={15} />
        </div>

        {/* Bottom section with copyright and socials */}
        <div className="mt-12 border-t border-zinc-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Susan Albertsen. Alle rettigheder forbeholdes.</p>
          <div className="flex items-center gap-6">
            <SocialIcon href="https://www.facebook.com/susancorrecto">
              <FaFacebookF className="w-5 h-5" />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/susancorrecto">
              <FaInstagram className="w-5 h-5" />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/susan-albertsen">
              <FaLinkedinIn className="w-5 h-5" />
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

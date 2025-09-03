"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const MapLeaflet = dynamic(() => import("../ui/MapLeaflet"), { ssr: false });

const Footer = ({ coords = { lat: 55.6761, lng: 12.5683 } }) => {
  const SocialIcon = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
      {children}
    </a>
  );

  return (
    <footer className="bg-zinc-900 text-zinc-300 py-16">
      <div className="content-max">
        {/* Top section with navigation and contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Branding */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold text-white">Susan Albertsen</h3>
            <p className="mt-2 text-sm text-zinc-400">Psykoterapi & rådgivning</p>
          </div>

          {/* Column 2: Ydelser */}
          <div>
            <h4 className="font-semibold text-white">Ydelser</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/ydelser/emdr" className="hover:text-white transition-colors">EMDR</Link></li>
              <li><Link href="/ydelser/essentiel-integrativ-psykoterapi" className="hover:text-white transition-colors">Essentiel Integrativ Psykoterapi</Link></li>
              <li><Link href="/ydelser/meditation" className="hover:text-white transition-colors">Meditation</Link></li>
              <li><Link href="/ydelser/familie-par" className="hover:text-white transition-colors">Familie- & parterapi</Link></li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h4 className="font-semibold text-white">Navigation</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/omSusan" className="hover:text-white transition-colors">Om Susan</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Priser</Link></li>
              <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Column 4: Kontakt */}
          <div>
            <h4 className="font-semibold text-white">Kontakt</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Vesterbrogade 1, 1620 København</li>
              <li><a href="mailto:kontakt@susancorrecto.dk" className="hover:text-white transition-colors">kontakt@susancorrecto.dk</a></li>
              <li><a href="tel:+4512345678" className="hover:text-white transition-colors">+45 12 34 56 78</a></li>
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
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/susancorrecto">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/></svg>
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/susan-albertsen">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

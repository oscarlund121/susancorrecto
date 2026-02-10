"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const SocialIcon = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:underline transition-colors">
      {children}
    </a>
  );

  return (
    <footer className="bg-zinc-900 text-white py-16 md:py-24 lg:py-32">
      <div className="content-max">
        <div className="md:px-[20px] lg:px-[60px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {/* Column 1: Branding */}
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="text-white">Susan Albertsen</h4>
            <p className="mt-2 text-sm text-zinc-300">Psykoterapi & rådgivning</p>
          </div>

          {/* Column 2: Ydelser */}
          <div>
            <h4 className="font-semibold text-white">Ydelser</h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li><Link href="/ydelser/essentiel-integrativ-psykoterapi" className="hover:text-white transition-colors">Psykoterapi</Link></li>
              <li><Link href="/ydelser/emdr" className="hover:text-white transition-colors">EMDR</Link></li>
              <li><Link href="/ydelser/meditation" className="hover:text-white transition-colors">Meditation</Link></li>
              <li><Link href="/ydelser/angst-og-folelser" className="hover:text-white transition-colors">Angst & følelser</Link></li>
              <li><Link href="/ydelser/eksamensangst" className="hover:text-white transition-colors">Eksamensangst</Link></li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h4 className="font-semibold text-white">Sider</h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li><Link href="/om-susan" className="hover:text-white transition-colors">Om Susan</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Priser</Link></li>
              <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Column 4: Kontakt */}
          <div>
            <h4 className="font-semibold text-white">Kontakt</h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li>Skolebakken 7 st th</li>
              <li>8000 Aarhus C</li>
              <li className="pt-2"><a href="mailto:kontakt@psykoterapisusan.dk" className="hover:text-white transition-colors">kontakt@psykoterapisusan.dk</a></li>
              <li><a href="tel:+4525392539" className="hover:text-white transition-colors">+45 25 39 25 39</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright and socials */}
        <div className="mt-16 border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-zinc-500 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Susan Albertsen. Alle rettigheder forbeholdes.</p>
            <p className="mt-1">Fotos: Christina Vasby</p>
          </div>
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
      </div>
    </footer>
  );
};

export default Footer;

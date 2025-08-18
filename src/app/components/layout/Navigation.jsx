'use client'
import Link from 'next/link'
import Button from '../ui/Button'

const Navigation = ({ variant = 'default' }) => {
  return (
    <nav className={`${variant === 'transparent' ? 'bg-transparent' : 'bg-[#367067]'} px-14 py-10`}>
      {/* White rounded navigation bar */}
      <div className="bg-[white] rounded-full px-8 py-2 flex items-center justify-between  mx-auto">
        
        {/* Logo section */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-black rounded"></div>
          <div>
            <div className="text-black text-sm font-medium">Psykoterapi</div>
            <div className="text-black text-sm font-light">Susan Albertsen</div>
          </div>
        </div>
        
        {/* Navigation links */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-[#367067] text-lg font-light hover:underline">
            Forside
          </Link>
          <Link href="/ydelser" className="text-[#367067] text-lg font-light hover:underline">
            Ydelser
          </Link>
          <Link href="/omSusan" className="text-[#367067] text-lg font-light hover:underline">
            Om Susan
          </Link>
          <Link href="/help" className="text-[#367067] text-lg font-light hover:underline">
            Hjælp
          </Link>
          <Link href="/pricing" className="text-[#367067] text-lg font-light hover:underline">
            Priser
          </Link>
          <Link href="/contact" className="text-[#367067] text-lg font-light hover:underline">
            Kontakt
          </Link>
          <Link href="/privacy" className="text-[#367067] text-lg font-light hover:underline">
            Privatliv/GDPR
          </Link>
        </div>
        
        {/* Book button */}
        <div>
          <Button />
        </div>
        
      </div>
    </nav>
  )
}

export default Navigation;

'use client'
import Link from 'next/link'
import Button from '../ui/Button'
import { useState } from 'react'

const Navigation = ({ variant = 'default' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`${variant === 'transparent' ? 'bg-transparent' : 'bg-[#367067]'} px-4 md:px-14 py-10`}>
      {/* White rounded navigation bar */}
      <div className="bg-[white] rounded-full px-4 md:px-8 py-2 flex items-center justify-between mx-auto">
        
        {/* Logo section */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-black rounded"></div>
          <div className="hidden sm:block">
            <div className="text-black text-sm font-medium">Psykoterapi</div>
            <div className="text-black text-sm font-light">Susan Albertsen</div>
          </div>
        </div>
        
        {/* Desktop Navigation links */}
        <div className="hidden xl:flex items-center gap-8">
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
        
        {/* Desktop Book button */}
        <div className="hidden xl:block">
          <Button />
        </div>
        
        {/* Mobile burger menu button */}
        <button 
          onClick={toggleMenu}
          className="xl:hidden flex flex-col gap-1 p-2"
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-[#367067] transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-[#367067] transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-[#367067] transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile menu */}
     <div className={`xl:hidden absolute  left-0 right-0 mt-4 bg-white rounded-2xl mx-4 transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="py-6 px-8 space-y-4">
          <Link 
            href="/" 
            className="block text-[#367067] text-lg font-light py-2 hover:bg-gray-50 rounded"
            onClick={() => setIsMenuOpen(false)}
          >
            Forside
          </Link>
          <Link 
            href="/ydelser" 
            className="block text-[#367067] text-lg font-light py-2 hover:bg-gray-50 rounded"
            onClick={() => setIsMenuOpen(false)}
          >
            Ydelser
          </Link>
          <Link 
            href="/omSusan" 
            className="block text-[#367067] text-lg font-light py-2 hover:bg-gray-50 rounded"
            onClick={() => setIsMenuOpen(false)}
          >
            Om Susan
          </Link>
          <Link 
            href="/help" 
            className="block text-[#367067] text-lg font-light py-2 hover:bg-gray-50 rounded"
            onClick={() => setIsMenuOpen(false)}
          >
            Hjælp
          </Link>
          <Link 
            href="/pricing" 
            className="block text-[#367067] text-lg font-light py-2 hover:bg-gray-50 rounded"
            onClick={() => setIsMenuOpen(false)}
          >
            Priser
          </Link>
          <Link 
            href="/contact" 
            className="block text-[#367067] text-lg font-light py-2 hover:bg-gray-50 rounded"
            onClick={() => setIsMenuOpen(false)}
          >
            Kontakt
          </Link>
          <Link 
            href="/privacy" 
            className="block text-[#367067] text-lg font-light py-2 hover:bg-gray-50 rounded"
            onClick={() => setIsMenuOpen(false)}
          >
            Privatliv/GDPR
          </Link>
          
          <div className="pt-4 border-t border-gray-200">
            <Button />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;
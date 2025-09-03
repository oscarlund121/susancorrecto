'use client'
import Link from 'next/link'
import Button from '../ui/Button'
import { useState } from 'react'

const Navigation = ({ variant = 'default' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
  const [dropdownTimeout, setDropdownTimeout] = useState(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleDropdownEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    setIsDropdownOpen(true)
  }

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false)
    }, 150) // 150ms delay før dropdown lukker
    setDropdownTimeout(timeout)
  }

  const toggleDesktopDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen)
  }

  return (
    <nav className={`${variant === 'transparent' ? 'bg-transparent' : 'bg-[#367067]'} px-4 md:px-14 py-10`}>
      {/* White rounded navigation bar */}
      <div className="bg-[white] sticky rounded-full px-4 md:px-8 py-2 flex items-center justify-between mx-auto">
        
        {/* Logo section */}
        <Link href="/" className="flex items-center gap-4 cursor-pointer">
          <div className="w-12 h-12 bg-black rounded"></div>
          <div className="hidden sm:block">
            <div className="text-black text-sm font-medium">Psykoterapi</div>
            <div className="text-black text-sm font-light">Susan Albertsen</div>
          </div>
        </Link>
        
        {/* Desktop Navigation links */}
        <div className="hidden xl:flex items-center gap-8">
          <Link href="/" className="text-[#367067] text-lg font-light hover:text-[#D3D9E5] transition-all duration-300 relative group">
            Forside
            <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-[#D3D9E5] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          {/* Ydelser dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <button 
              onClick={toggleDesktopDropdown}
              className="text-[#367067] text-lg font-light hover:text-[#D3D9E5] transition-all duration-300 relative group flex items-center gap-1"
            >
              Ydelser
              <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-[#D3D9E5] transition-all duration-300 group-hover:w-full"></span>
              <svg className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown menu */}
            <div 
              className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border transition-all duration-200 z-50 ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="py-2">
                <Link href="/ydelser/emdr" className="block px-4 py-3 text-[#367067] text-sm hover:text-[#D3D9E5] transition-colors">
                  EMDR Terapi
                </Link>
                <Link href="/ydelser/essentiel-integrativ-psykoterapi" className="block px-4 py-3 text-[#367067] text-sm hover:text-[#D3D9E5] transition-colors">
                  Essentiel Integrativ Psykoterapi
                </Link>
                <Link href="/ydelser/meditation" className="block px-4 py-3 text-[#367067] text-sm hover:text-[#D3D9E5] transition-colors">
                  Meditation
                </Link>
                <Link href="/ydelser/familie-par" className="block px-4 py-3 text-[#367067] text-sm hover:text-[#D3D9E5] transition-colors">
                  Familie- og parterapi
                </Link>
              </div>
            </div>
          </div>
          
          <Link href="/omSusan" className="text-[#367067] text-lg font-light hover:text-[#D3D9E5] transition-all duration-300 relative group">
            Om Susan
            <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-[#D3D9E5] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/help" className="text-[#367067] text-lg font-light hover:text-[#D3D9E5] transition-all duration-300 relative group">
            Hjælp
            <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-[#D3D9E5] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/pricing" className="text-[#367067] text-lg font-light hover:text-[#D3D9E5] transition-all duration-300 relative group">
            Priser
            <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-[#D3D9E5] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/kontakt" className="text-[#367067] text-lg font-light hover:text-[#D3D9E5] transition-all duration-300 relative group">
            Kontakt
            <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-[#D3D9E5] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/privacy" className="text-[#367067] text-lg font-light hover:text-[#D3D9E5] transition-all duration-300 relative group">
            Privatliv/GDPR
            <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-[#D3D9E5] transition-all duration-300 group-hover:w-full"></span>
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
          
          {/* Mobile Ydelser dropdown */}
          <div>
            <button 
              onClick={toggleMobileDropdown}
              className="w-full text-left text-[#367067] text-lg font-light py-2 hover:bg-gray-50 rounded flex items-center justify-between"
            >
              Ydelser
              <svg className={`w-3 h-3 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Mobile dropdown items */}
            <div className={`ml-4 mt-2 space-y-2 transition-all duration-200 ${isMobileDropdownOpen ? 'opacity-100 max-h-48' : 'opacity-0 max-h-0 overflow-hidden'}`}>
              <Link 
                href="/ydelser/emdr" 
                className="block text-[#367067] text-sm py-2 pl-4 hover:bg-gray-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                EMDR Terapi
              </Link>
              <Link 
                href="/ydelser/essentiel-integrativ-psykoterapi" 
                className="block text-[#367067] text-sm py-2 pl-4 hover:bg-gray-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Essentiel Integrativ Psykoterapi
              </Link>
              <Link 
                href="/ydelser/meditation" 
                className="block text-[#367067] text-sm py-2 pl-4 hover:bg-gray-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Meditation
              </Link>
              <Link 
                href="/ydelser/familie-par" 
                className="block text-[#367067] text-sm py-2 pl-4 hover:bg-gray-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Familie- og parterapi
              </Link>
            </div>
          </div>
          
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
            href="/kontakt" 
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
'use client'
import Link from 'next/link'
import Button from '../ui/Button'
import NavLink from '../ui/NavLink'
import NavDropdown from '../ui/NavDropdown'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

const ydelserItems = [
  { href: '/ydelser/emdr', label: 'EMDR Terapi' },
  { href: '/ydelser/essentiel-integrativ-psykoterapi', label: 'Psykoterapi' },
  { href: '/ydelser/meditation', label: 'Meditation' },
]

const helpItems = [
  { href: '/help', label: 'Oversigt' },
  { href: '/help/eksamensangst', label: 'Eksamens- & præstationsangst' },
  { href: '/help/angst-og-folelser', label: 'Angst & følelser' },
  { href: '/help/depression-og-sorg', label: 'Depression & sorg' },
  { href: '/help/familie-par', label: 'Relationer & familieliv' },
]

const Navigation = ({ variant = 'default' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef(null)
  const burgerRef = useRef(null)

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  // Close menu on click outside
  useEffect(() => {
    if (!isMenuOpen) return

    const handleClickOutside = (e) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target) &&
        burgerRef.current && !burgerRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <nav className={`${variant === 'transparent' ? 'bg-transparent' : 'bg-[#367067]'} px-4 md:px-14 py-4 md:py-6`}>
      {/* White rounded navigation bar */}
      <div className="bg-white/85 sticky rounded-full px-4 md:px-8 py-2.5 flex items-center justify-between mx-auto">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 cursor-pointer">
          <img src="/logo/logo.svg" alt="Susan Albertsen Logo" className="w-12 h-12" />
          <div className="block">
            <div className="text-black text-sm font-medium">Psykoterapi</div>
            <div className="text-black text-sm font-light">Susan Albertsen</div>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <NavLink href="/">Forside</NavLink>
          <NavDropdown label="Ydelser" basePath="/ydelser" items={ydelserItems} />
          <NavDropdown label="Hjælp" basePath="/help" items={helpItems} />
          <NavLink href="/om-susan">Om Susan</NavLink>
          <NavLink href="/pricing">Priser</NavLink>
          <NavLink href="/kontakt">Kontakt</NavLink>
        </div>
        
        {/* Desktop Book button */}
        <div className="hidden xl:block">
          <Button />
        </div>
        
        {/* Mobile burger */}
        <button 
          ref={burgerRef}
          onClick={() => setIsMenuOpen(prev => !prev)}
          className="xl:hidden flex flex-col gap-1 p-2"
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-[#367067] transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-[#367067] transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-[#367067] transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile backdrop */}
      {isMenuOpen && (
        <div className="xl:hidden fixed inset-0 bg-black/20 z-40" aria-hidden="true" />
      )}

      {/* Mobile menu */}
      <div ref={menuRef} className={`xl:hidden absolute left-0 right-0 mt-4 bg-white rounded-2xl mx-4 z-50 transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="py-6 px-8 space-y-4">
          <NavLink href="/" mobile>Forside</NavLink>
          <NavDropdown label="Ydelser" basePath="/ydelser" items={ydelserItems} mobile />
          <NavDropdown label="Hjælp" basePath="/help" items={helpItems} mobile />
          <NavLink href="/om-susan" mobile>Om Susan</NavLink>
          <NavLink href="/pricing" mobile>Priser</NavLink>
          <NavLink href="/kontakt" mobile>Kontakt</NavLink>
          
          <div className="pt-4 border-t border-gray-200">
            <Button />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;
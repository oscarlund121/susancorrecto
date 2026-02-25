'use client'
import Link from 'next/link'
import { useState, useCallback } from 'react'
import { usePathname } from 'next/navigation'

const NavDropdown = ({ label, basePath, items, mobile = false, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [timeoutId, setTimeoutId] = useState(null)
  const pathname = usePathname()
  const isActive = pathname?.startsWith(basePath)

  const handleEnter = useCallback(() => {
    if (timeoutId) { clearTimeout(timeoutId); setTimeoutId(null) }
    setIsOpen(true)
  }, [timeoutId])

  const handleLeave = useCallback(() => {
    const t = setTimeout(() => setIsOpen(false), 150)
    setTimeoutId(t)
  }, [])

  // Mobile variant
  if (mobile) {
    return (
      <div>
        <span
          onClick={() => setIsOpen(prev => !prev)}
          className="w-full text-left text-[#367067] text-lg font-light py-2 hover:bg-gray-50 rounded flex items-center justify-between cursor-pointer"
        >
          <span className={isActive ? 'text-[#F38A5D] font-normal' : ''}>{label}</span>
          <svg className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
        <div className={`ml-4 mt-2 space-y-2 transition-all duration-200 ${isOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          {items.map(({ href, label: itemLabel }) => (
            <Link
              key={href}
              href={href}
              onClick={onNavigate}
              className={`block text-sm py-2 pl-4 rounded transition-colors ${
                pathname === href ? 'text-[#F38A5D] font-medium' : 'text-[#367067] hover:bg-gray-50'
              }`}
            >
              {itemLabel}
            </Link>
          ))}
        </div>
      </div>
    )
  }

  // Desktop variant
  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <span
        onClick={() => setIsOpen(prev => !prev)}
        className={`w-full text-left text-lg font-normal transition-all duration-300 relative group flex items-center gap-1 cursor-pointer ${
          isActive
            ? 'bg-[#F38A5D] text-white px-4 py-1 rounded-full'
            : 'text-black hover:text-[#D3D9E5]'
        }`}
      >
        {label}
        {!isActive && (
          <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-[#D3D9E5] transition-all duration-300 group-hover:w-full"></span>
        )}
        <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </span>

      <div
        className={`absolute top-full left-0 mt-2 w-sm bg-white rounded-lg shadow-lg transition-all duration-200 z-50 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <div className="py-2">
          {items.map(({ href, label: itemLabel }) => (
            <Link
              key={href}
              href={href}
              className="block px-4 py-3 text-[#367067] text-md hover:text-[#D3D9E5] transition-colors"
            >
              {itemLabel}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NavDropdown

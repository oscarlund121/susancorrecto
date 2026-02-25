'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({ href, children, exact = true, mobile = false, onClick }) => {
  const pathname = usePathname()
  const isActive = exact ? pathname === href : pathname?.startsWith(href)

  if (mobile) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`block text-lg font-light py-2 rounded transition-colors ${
          isActive
            ? 'text-[#F38A5D] font-normal'
            : 'text-[#367067] hover:bg-gray-50'
        }`}
      >
        {children}
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className={`text-lg font-normal transition-all duration-300 relative group ${
        isActive
          ? 'bg-[#F38A5D] text-white px-4 py-1 rounded-full'
          : 'text-black hover:text-[#D3D9E5]'
      }`}
    >
      {children}
      {!isActive && (
        <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-[#D3D9E5] transition-all duration-300 group-hover:w-full"></span>
      )}
    </Link>
  )
}

export default NavLink

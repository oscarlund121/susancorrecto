'use client'
import Image from 'next/image'
import Navigation from '../layout/Navigation'

const HeroSection = () => {
  return (
    <div className="relative h-[90vh] ">
      {/* Background image */}
      <Image
        src="/img/hero-img.jpg"
        alt="Hero background"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
        priority
      />
      
      {/* Black overlay with 60% opacity */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
   
      
      {/* Navigation on top */}
      <div className="relative z-20">
        <Navigation variant="transparent" />
      </div>
      
      {/* Hero content */}
      <div className="relative z-20 flex items-center justify-center  pt-20">
        <div className="text-center text-white">
          {/* Add your hero content here */}
          <h1 className="text-5xl font-light mb-4">Hero Title</h1>
          <p className="text-xl">Hero description</p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
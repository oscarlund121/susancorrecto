"use client";
import Link from 'next/link'
import Button from '../ui/Button'

const HeaderSection = ({ 
  title, 
  buttonText = "Book en samtale", 
  buttonHref = "/booking",
  variant = "primary" 
}) => {
  
  return (
    <div>
      <div className="content-max">
        <div className="flex justify-between flex-col items-end">
          <div className="text-max">
            <h2>
              {title}
            </h2>
          </div>
          
          <div className="flex-shrink-0 mt-6 sm:mt-2">
            <Link href={buttonHref}>
              <Button variant={variant}>
                {buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )

};

export default HeaderSection;

'use client'

/* const Button = ({ children = "Book en samtale", onClick }) => {

    return ( <button 
      onClick={onClick}
      className="bg-[#367067] text-[white] hover:text-[#367067] px-8 py-4 rounded-full text-xl font-light flex items-center gap-3 hover:bg-[#D3D9E5] "
    >
      {children}
      <div className="w-10 h-10 bg-[#D3D9E5] hover:bg-[#367067] hover:text-[#D3D9E5] rounded-full flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
          <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="#367067" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </button>
  );
   
}
 'use client' */

const Button = ({ children = "Book en samtale", onClick }) => {
  
    return ( <button 
      onClick={onClick}
      className="bg-[#367067] text-white hover:text-[#367067] pl-4 pr-4 py-2 rounded-full text-xl font-light flex items-center gap-3 hover:bg-[#D3D9E5] transition-colors group"
    >
      {children}
      <div className="w-12 h-12 bg-[#D3D9E5] group-hover:bg-[#367067] rounded-full flex items-center justify-center ">
        <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
          <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="#367067" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#d3d9e5] "/>
        </svg>
      </div>
    </button>
  );
   
}
 

export default Button;  

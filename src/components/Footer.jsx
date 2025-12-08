import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white text-center flex flex-col items-center w-full fixed bottom-0'>
         <div className="logo font-bold text-2xl">
       <span className='text-green-500 '>&lt;</span>
        Pass
       <span className='text-green-500 '>OP/&gt;</span>
        </div>
      <div className='flex items-center text-xl gap-1'>
       <span>Created with </span>  <lord-icon className="cursor-pointer"
    src="https://cdn.lordicon.com/nvsfzbop.json"
    trigger="hover"
    colors="primary:#ffffff,secondary:#e83a30">
</lord-icon><span> by Saad</span> 
      </div>
    </div>
  )
}

export default Footer

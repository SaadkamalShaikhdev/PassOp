import React from 'react'


const Manager = () => {
  return (
    <>
 <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
 </div>
 <div className="mycontainer bg-slate-50">
    <h1 className='text-4xl font-bold text-center'><span className='text-green-700'>&lt;</span>
        Pass
       <span className='text-green-700 '>OP/&gt;</span></h1>
    <p className='text-green-950 text-lg text-center'>Manage your own Password</p>
 <div className="text-black flex flex-col p-4 gap-8">
    <input className='bg-amber-50 rounded-lg border border-green-400 px-4 py-1' type="text" name="" id="" />
    <div className="flex w-full gap-8 justify-center">
    <input className='bg-amber-50 w-[45%] rounded-lg border border-green-400 px-4 py-1' type="text" name="" id="" />
    <input className='bg-amber-50 w-[45%] rounded-lg border border-green-400 px-4 py-1' type="text" name="" id="" />
    </div>
    <lord-icon 
    src="https://cdn.lordicon.com/tsrgicte.json"
    trigger="hover">
</lord-icon>
    <button>Add Password</button>
 </div>
 </div>
 </>
  )
}

export default Manager

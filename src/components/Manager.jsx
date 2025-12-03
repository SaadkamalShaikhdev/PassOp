import React from 'react'
import {useRef,useState,useEffect} from "react"
const Manager = () => {
   const [form, setform] = useState({site: "" , username: "" , password: ""})
   const [passwordArray, setPasswordArray] = useState([])
   const ref = useRef()
   const passRef = useRef();

useEffect(() => {
 let passwords = localStorage.getItem("passwords")
  if(passwords){
   setPasswordArray(passwords)
  }
  
}, [])


   const showPassword =()=>{
if(ref.current.src.includes("/icons/eye.svg")){
   ref.current.src = "/icons/eyeoff.svg"
   passRef.current.type = "text";
}
else{
      ref.current.src = "/icons/eye.svg"
      passRef.current.type = "password";
}}
const handleChange = (e) => {
  setform({...form , [e.target.name]: e.target.value})
}
const savePassword =() => {
  console.log(form);
  setPasswordArray([...passwordArray , form])
  localStorage.setItem("passwords" , JSON.stringify([...passwordArray , form]))
  console.log([...passwordArray , form]);
  
}


   
  return (
    <>
 <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
 </div>
 <div className="mycontainer">
    <h1 className='text-4xl font-bold text-center'><span className='text-green-500'>&lt;</span>
        Pass
       <span className='text-green-500 '>OP/&gt;</span></h1>
    <p className='text-green-950 text-lg text-center'>Manage your own Password</p>
 <div className="text-black flex flex-col p-4 gap-8 items-center">
    <input value={form.site} onChange={(e)=>handleChange(e)} placeholder='Enter Website URL' className='bg-amber-50 rounded-lg border border-green-400 px-4 py-1 w-full' type="text" name="site" id="" />
    <div className="flex w-full gap-8 justify-center">
    <input value={form.username} onChange={(e)=>handleChange(e)} placeholder='Enter username' className='bg-amber-50 w-[45%] rounded-lg border border-green-400 px-4 py-1' type="text" name="username" id="" />
    <div className="relative flex items-center">
    <input ref={passRef} value={form.password} onChange={(e)=>handleChange(e)} placeholder='Enter Password' className='bg-amber-50 rounded-lg border border-green-400 px-4 py-1' type="password" name="password" id="" />
<span className='absolute right-1.5 cursor-pointer' onClick={showPassword}>
   <img src="/icons/eye.svg" alt="" ref={ref} />
</span>
    </div>
    </div>
    
    <button onClick={savePassword} className='flex justify-center items-center rounded-full bg-green-400 w-fit
    py-1 px-5 hover:bg-green-500 cursor-pointer gap-2 border border-green-700'><lord-icon 
    src="https://cdn.lordicon.com/tsrgicte.json"
    trigger="hover">
</lord-icon>Add Password</button>
 </div>

 <div className="passwords">
<h2>Your Passwords</h2>
<table className="table-auto w-full rounded-md overflow-hidden">
  <thead className='bg-green-800 text-white'>
    <tr>
      <th className='py-2'>Song</th>
      <th className='py-2'>Artist</th>
      <th className='py-2'>Year</th>
    </tr>
  </thead>
  <tbody className='bg-green-50'>
    <tr>
      <td className='text-center w-fit py-2'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td className='text-center w-fit py-2'>Malcolm Lockyer</td>
      <td className='text-center w-fit py-2'>1961</td>
    </tr>
    <tr>
      <td className='text-center w-fit py-2'>Witchy Woman</td>
      <td className='text-center w-fit py-2'>The Eagles</td>
      <td className='text-center w-fit py-2'>1972</td>
    </tr>
    <tr>
      <td className='text-center w-fit py-2'>Shining Star</td>
      <td className='text-center w-fit py-2'>Earth, Wind, and Fire</td>
      <td className='text-center w-fit py-2'>1975</td>
    </tr>
  </tbody>
</table>  
 </div>
 </div>
 </>
  )
}

export default Manager

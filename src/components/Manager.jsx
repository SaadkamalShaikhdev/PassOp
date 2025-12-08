import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import {Copy} from "lucide-react"
import {useRef,useState,useEffect} from "react"
import toast from 'react-hot-toast';
import Swal from 'sweetalert2'

const Manager = () => {
   const [form, setform] = useState({site: "" , username: "" , password: "" , id: ""})
   const [passwordArray, setPasswordArray] = useState([])
   const ref = useRef()
const [showPassword, setShowPassword] = useState(false);


useEffect(() => {
 let passwords = localStorage.getItem("passwords")
  if(passwords){
setPasswordArray(JSON.parse(passwords))  }
  
}, [setPasswordArray])

const saveToLs = (array)=>{
    localStorage.setItem("passwords" , JSON.stringify(array))
}

const handleChange = (e) => {
  setform({...form , [e.target.name]: e.target.value})
}
const savePassword =() => {
  if(form.site.length > 3 && form.username.length > 3 && form.password.length > 3){
 const tempArray = ([...passwordArray , {...form , id: uuidv4()}])
  setPasswordArray(tempArray)
  saveToLs(tempArray)
  // console.log(tempArray);
  setform({site: "" ,username: "" , password: "",})
  toast.success("Password Saved")
  }else{
    toast.error("Password not saved")
  }
 
}

const copyText =(text)=>{
  try{
 toast.success("Copied to clipboard");
    navigator.clipboard.writeText(text)
}catch{
toast.error("Failed to Copy")
}
}
const handleEdit = (id) => {
  // console.log(id);
    const deletedArray = [...passwordArray].filter((val)=> {return val.id !== id})
    const editArray = [...passwordArray].find((val)=> {return val.id == id})
// console.log(editArray);
setform(editArray)
setPasswordArray(deletedArray)

}
const handleDelete = (id) =>{
  Swal.fire({
  title: "Do you want to Delete this?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Delete",
  denyButtonText: `Don't Delete`
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire("Deleted!", "", "success");
     const deletedArray = [...passwordArray].filter((val)=> {return val.id !== id})
  setPasswordArray(deletedArray)
  saveToLs(deletedArray)
  }
});
 
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
    <input value={form.site} onChange={(e)=>handleChange(e)} placeholder='Enter Website URL' className='bg-amber-50 rounded-lg border border-green-400 px-4 py-1 w-full' type="text" name="site" id="site" />
    <div className="flex md:flex-row flex-col w-full gap-8 justify-center">
    <input value={form.username} onChange={(e)=>handleChange(e)} placeholder='Enter username' className='bg-amber-50 md:w-[45%] rounded-lg border border-green-400 px-4 py-1' type="text" name="username" id="username" />
    <div className="relative flex items-center">
    <input value={form.password} onChange={(e)=>handleChange(e)} placeholder='Enter Password' className='bg-amber-50 w-full md:w-fit rounded-lg border items-stretch border-green-400 px-4 py-1' type={showPassword ? "text" : "password"} name="password" id="password" />
<span className='absolute right-1.5 cursor-pointer'>
  <img
  src={showPassword ? "/icons/eyeoff.svg" : "/icons/eye.svg"}
  className="cursor-pointer"
  onClick={() => setShowPassword(!showPassword)}
/>

</span>
    </div>
    </div>
    
    <button onClick={savePassword} className='flex justify-center items-center rounded-full bg-green-400 w-fit
    py-1 px-5 hover:bg-green-500 cursor-pointer gap-2 border border-green-700'><lord-icon 
    src="https://cdn.lordicon.com/tsrgicte.json"
    trigger="hover">
</lord-icon>Save</button>
 </div>

 <div className="passwords">
<h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
  {passwordArray.length === 0 && <div className='text-center text-xl font-bold'>No Password to Show</div>}
  {passwordArray.length !== 0 && <table className="table-auto w-full rounded-md overflow-hidden mb-10">
  <thead className='bg-green-800 text-white'>
    <tr>
      <th className='py-2'>Site</th>
      <th className='py-2'>Username</th>
      <th className='py-2'>Password</th>
      <th className='py-2'>Actions</th>
    </tr>
  </thead>
  <tbody className='bg-green-50'>
   {passwordArray.map((items, index) => (
      <tr key={index}>
        <td className='md:w-[40%] text-centerpy-2 '><div className='flex items-center justify-center gap-2 '><a target='_blank' href={items.site}>{items.site}</a>
       <div onClick={()=>copyText(items.site)} className='cursor-pointer hover:text-slate-800'><Copy /></div></div> </td>
        <td className='md:w-[25%] text-center py-2'><div className='flex items-center justify-center gap-2 '>{items.username}<div onClick={()=>copyText(items.username)} className='cursor-pointer hover:text-slate-800'><Copy /></div></div></td>
        <td className='md:w-[25%] text-center py-2'><div className='flex items-center justify-center gap-2 '>{items.password}<div onClick={()=>copyText(items.password)} className='cursor-pointer hover:text-slate-800'><Copy /></div></div></td>
        <td className='md:w-[10%] text-center py-2'><div className='flex items-center justify-center gap-2 '><span onClick={()=>handleEdit(items.id)}><lord-icon className="cursor-pointer w-7 h-7"
    src="https://cdn.lordicon.com/exymduqj.json"
    trigger="hover">
</lord-icon></span><span onClick={()=>handleDelete(items.id)}><lord-icon className='cursor-pointer w-7 h-7'
    src="https://cdn.lordicon.com/jzinekkv.json"
    trigger="hover">
</lord-icon></span> </div></td>
      </tr>
    ))}
   
   
  </tbody>
</table>}
  
 </div>
 </div>
 </>
  )
}

export default Manager

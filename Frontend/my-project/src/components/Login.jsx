// import React from 'react'

import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  
  return (
    <div>{/* You can open the modal using document.getElementById('ID').showModal() method */}
    {/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog"   onSubmit={handleSubmit(onSubmit)}>
          {/* if there is a button in form, it will close the modal */}
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
       
        <h3 className="font-bold text-lg">Login</h3>
        {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
        <div className="mt-4 space-y-2">
            <span className="" >Email</span><br />
            <input  type="email" name="" id="" placeholder="Enter Email" className="w-80 px-3 border rounded-md outline-none"{...register("email", { required: true })}/><br />
            <br />
            {errors.email && <span  className="text-sm text-red-500" >This field is required</span>}
        
        </div>
         
{/* password field */}
        <div className="mt-4 space-y-2">
            <span className="" >Password</span><br />
            <input  type="email" name="" id="" placeholder="Enter Password" className="w-80 px-3 border rounded-md outline-none"{...register("password", { required: true })}/><br />
            <br />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
        
        </div>
        {/* Button */}
        <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300">Login</button>
            <p>Not Registered <Link to="/sign-up" className="underline text-blue-500 cursor-pointer" >SignUp</Link></p>
        </div>
     </form>
      </div>
    
    </dialog>
     
     </div>
  )
}

export default Login

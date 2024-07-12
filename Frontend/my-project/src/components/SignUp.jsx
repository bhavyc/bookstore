// import   from 'react'
import{Link} from "react-router-dom"
import Login from "./Login";
import { useForm } from "react-hook-form";

function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div>
     <div className="flex h-screen items-center justify-center  ">{/* You can open the modal using document.getElementById('ID').showModal() method */}
    {/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
    <div  className= "w-[600px] ">
      <div className="modal-box">
        <form method="dialog" >
          {/* if there is a button in form, it will close the modal */}
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
        
        <h3 className="font-bold text-lg">SignUp</h3>
        {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
      {/* Name */}
      <div className="mt-4 space-y-2">
            <span className="" >Name</span><br />
            <input type="text" name="" id="" placeholder="Enter Name" className="w-80 px-3 border rounded-md outline-none "{...register("name", { required: true })}/><br />
        </div>
        <div className="mt-4 space-y-2">
            <span className="" >Email</span><br />
            <input {...register("email", { required: true })} type="email" name="" id="" placeholder="Enter Email" className="w-80 px-3 border rounded-md outline-none"/><br />
        </div>
{/* password field */}
        <div className="mt-4 space-y-2">
            <span className="" >Password</span><br />
            <input {...register("password", { required: true })}type="email" name="" id="" placeholder="Enter Password" className="w-80 px-3 border rounded-md outline-none"/><br />
        </div>
        {/* Button */}
        <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300">SignUp</button>
            <p className="text-xl">Have Account <button   className="underline text-blue-500 cursor-pointer" 
             onClick={()=>{
                document.getElementById("my_modal_3").showModal();
             }}
            >Login</button>
                <Login/>
           </p>
        </div>
        </form>
         </div>
      </div>
    </div> 
     </div>
  )
}

export default SignUp
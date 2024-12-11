import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialBtn from "../Components/SocialBtn";
import { AuthnContext } from "../Provider/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { auth } from "../Firebase/Firebace.init";

const Register = () => {
  const {registerUser,updateuser,messageErorr,setmessageErorr,showpass,setshowpass, setuser,setloading}=useContext(AuthnContext)
   const navigate = useNavigate()
    const HandleRegister = async (e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const url = form.url.value
        const email = form.email.value
        const password = form.password.value
        console.log(name,url,email,password)

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
          if(!passwordRegex.test(password)) {
           
            setmessageErorr("Invalid password! must be 6 character & Atleast one lowercase and uppercase")
            return
          }
          try {
            const res = await registerUser(email,password)
        
          console.log(res.user)
          const profile ={
            displayName:name,
            photoURL:url
          }
         
            await updateuser(profile);
            toast.success("Profile updated!");
      
            await auth.currentUser.reload();
           
      
            const updatedUser = auth.currentUser;
      
            setuser({
              ...updatedUser,
            });
      
            navigate("/");
            setloading(false)
           
          } catch (error) {
            toast.error(error.message);
          }
        
    }
  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-3xl my-7">Registration </h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0  mx-auto border pb-5">
          <form onSubmit={HandleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo-URL</span>
              </label>
              <input
                type="text"
                name="url"
                placeholder="Your Photo Url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
                
              </label>
              <input
                type={showpass?'text':"password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button onClick={(e)=>{ e.preventDefault(),setshowpass(!showpass)}} className=" absolute right-12 top-[359px]  ">{showpass?<FaEyeSlash />:<FaEye />}</button>
              {
                messageErorr && <p className="text-red-600 text-sm ml-1">{messageErorr}</p>
              }
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-green-500 text-white font-semibold">
                Register{" "}
              </button>
            </div>
            <p className="text-center text-xs">
              Already have an account?{" "}
              <Link to={"/login"} className="font-bold text-green-400">
                Login
              </Link>
            </p>
          </form>
          <div className="mx-auto">
            <div className="divider w-52 mx-auto">OR</div>
            <div className="flex justify-center">
              <SocialBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

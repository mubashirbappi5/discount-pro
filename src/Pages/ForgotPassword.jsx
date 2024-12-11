import { sendPasswordResetEmail } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../Firebase/Firebace.init";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setemail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  useEffect(() => {
    if (location.state) {
      setemail(location.state);
      console.log(location.state);
    }
  }, [location.state]);

  const handlereset = (e) => {
    e.preventDefault();

    console.log(email);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent!");
        setTimeout(() => {
          window.location.href = "https://mail.google.com";
        }, 2000);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="my-10">
      <h1 className="text-center font-bold text-3xl">Forget Password</h1>

      <div className="w-3/12 mx-auto flex mt-10">
        <form onSubmit={handlereset} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Enter your email</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder=" your eamil  "
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-green-400">Reset Password </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

import React, { useContext } from "react";
import { AuthnContext } from "./../Provider/AuthContext";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const MyProfile = () => {
  const { user } = useContext(AuthnContext);
  const navigate = useNavigate();
  const { displayName, photoURL, email } = user || {};
  const handleupdate = () => {
    navigate("/updateprofile");
  };
  return (
    <div className="w-10/12 mx-auto min-h-screen">
      <div className="p-10 pb-20 text-center border-2 rounded-lg border-green-600">
        <h1
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className=" md:text-4xl text-xl font-bold mb-4"
        >
          Hay {displayName}!
        </h1>
        <h1  data-aos="fade-up"
     data-aos-duration="3000" className="text-xl font-semibold">welcome your Profile</h1>
      </div>
      <div  className="flex flex-col items-center justify-center ">
        {user.photoURL ? (
          <img
            className="rounded-full border-2 border-green-500 w-32 h-32 absolute top-72 "
            src={photoURL}
            alt=""
          />
        ) : (
          <img
            className="w-24 absolute top-72 border-green-500 rounded-full"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        )}
        <div className=" my-20 h-40 border-2 shadow-xl p-10 rounded-lg flex flex-col items-center justify-center ">
          <h1
            className="text-center font-bold md
            :text-3xl text-xl mt-7"
          >
            {displayName}
          </h1>
          <h2 className="text-center font-semibold mt-2">{email}</h2>
          <button
            onClick={handleupdate}
            className="btn bg-green-600 text-white font-bold mt-4"
          >
            update{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

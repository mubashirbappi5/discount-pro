import React, { useContext } from "react";
import { AuthnContext } from "./../Provider/AuthContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Firebace.init";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { updateuser, setuser,  setloading } = useContext(AuthnContext);
  const navigate = useNavigate();

  const handleupdateinfo = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const url = form.url.value;
    console.log(name, url);
    const profile = {
      displayName: name,
      photoURL: url,
    };
    try {
      await updateuser(profile);
      toast.success("Profile updated!");

      await auth.currentUser.reload();
     

      const updatedUser = auth.currentUser;

      setuser({
        ...updatedUser,
      });

      navigate("/my-profile");
      setloading(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-center ">
        <h1 className="text-4xl font-bold text-center">Update Information </h1>
      </div>
      <div className="flex justify-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 border">
          <form onSubmit={handleupdateinfo} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder=" Name  "
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> photo-URL</span>
              </label>
              <input
                type="text"
                name="url"
                placeholder=" photo-URL  "
                className="input input-bordered"
               
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-green-400">Update Information </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

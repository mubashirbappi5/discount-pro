import React from "react";
import { useLoaderData } from "react-router-dom";
import BrandCards from "../Components/BrandCards";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Brands = () => {
  const data = useLoaderData();
  return (
    <div className="w-11/12 mx-auto">
      <section className="space-y-10">
        <div data-aos="fade-down" className=" flex flex-col gap-2 items-center">
          <h1 className="text-3xl font-bold">All Brands</h1>
          <h4 className="text-lg font-semibold">
            Unbeatable Deals from Your Favorite Brands
          </h4>
          <label className="input input-bordered w-80  md:w-[600px] flex items-center pr-0 ">
            <input
              type="text"
              className="grow"
              placeholder="find your discount"
            />
            <button className="btn bg-green-400 text-white font-semibold"> search</button>
          </label>
        </div>
        <div data-aos="fade-right" className="space-y-4">
          {data.map((data) => (
            <BrandCards key={data._id} data={data} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Brands;

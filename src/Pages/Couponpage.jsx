import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CouponCard from '../Components/CouponCard';

const Couponpage = () => {
    const data = useLoaderData()
    const {id} = useParams()
    console.log(id)
    const brand = data.find(item => item._id === id)
     console.log(brand)
     const {brand_name,brand_logo,rating,coupons,shop_link} = brand
    
    return (
        <div className='w-11/12 mx-auto space-y-7 mb-10'>
            <h1 className='text-center text-4xl font-bold'>Coupon</h1>
           <section className='border rounded-full px-5 bg-base-200'>
            <div className='flex justify-between items-center'>
                <img className='w-36 rounded-full border-2' src={brand_logo} alt="" />
                <h1 className='text-2xl font-bold'>{brand_name}</h1>
                <h2 className='flex gap-2 items-center'> <div className="rating">
 <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
 <input
   type="radio"
   name="rating-2"
   className="mask mask-star-2 bg-orange-400"
   defaultChecked />
 <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
 <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
 
</div>{rating}</h2>
            </div>


           </section>
           <section className='grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto gap-4 '>
            {
                coupons.map((coupon,idx) => <CouponCard key={idx} coupon={coupon} shop_link={shop_link}/>)
            }
           </section>
            
        </div>
    );
};

export default Couponpage;
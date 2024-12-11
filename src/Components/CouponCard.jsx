import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { FaCopy } from "react-icons/fa";
import { ImBarcode } from "react-icons/im";
import { MdUpdate } from "react-icons/md";


const CouponCard = ({ coupon, shop_link }) => {
  const { coupon_code, description, expiry_date, condition, coupon_type } =
    coupon;
    const [copid,setcopid] = useState(false)
  return (
    <div>
      <div className="border p-5 w-72  rounded-xl bg-green-300 space-y-5">
        <h1 className="text-3xl w-10/12 mx-auto font-bold text-center">
          {description}
        </h1>

        <div className="text-center space-y-2">
          <h4 className="text-[#333333]">{coupon_type}</h4>
          <h4 className="text-[#5C4033]">{condition}</h4>
        </div>
        <div className="border-b-8 border-dotted "></div>
        <div className="flex justify-between items-end mt-10">
          <div>
            <p className="flex items-center gap-1 text-sm font-bold"><MdUpdate />{expiry_date}</p>
            <ImBarcode className="text-3xl ml-6" />
            <div className="flex">
           
            <CopyToClipboard text={coupon_code}
            onCopy={()=>{
               toast.success("coupon code copied!")
                setcopid(true)
            }}>
              {
                copid ? <button className="btn btn-sm">Code Copied! </button>  : <button className="btn btn-sm"> <FaCopy/>Copy Code </button>
              }
            </CopyToClipboard>
            </div>
            
          </div>
          <button className="btn btn-sm mt-6">
            
            <a href={shop_link}>Use Now</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;

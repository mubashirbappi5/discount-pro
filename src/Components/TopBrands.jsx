import React from "react";
import { Link } from "react-router-dom";


const TopBrands = ({data}) => {
  const {brand_logo} = data
  
  return (
    <div>
     
      <Link to={'/brands'}>
        <img className="w-40" src={brand_logo} alt="" />
      
      </Link>
    </div>
  );
};

export default TopBrands;

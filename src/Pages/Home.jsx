import React from 'react';
import Banner from '../Components/Banner';
import TopBrands from '../Components/TopBrands';
import { useLoaderData } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BrandsonSale from '../Components/BrandsonSale';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Reviewsection from '../Components/Reviewsection';
import FeedBack from '../Components/FeedBack';
AOS.init();

const Home = () => {
    const data = useLoaderData()
    
    
    return (
        <div >
        
           <section>
            <Banner/>
           </section>
           <section className='my-10 w-11/12 mx-auto'>
           <h1 data-aos="fade-up" className="text-4xl font-bold text-center"> Top Brands </h1>
           <Marquee pauseOnHover={true}>
       
           {Array.isArray(data) &&
            data.filter(  data => data.rating >4.6).map(data=>  <TopBrands key={data._id} data={data}/>)
           }
        
        
        </Marquee>
           </section>
           <section className='w-11/12 mx-auto'>
                <h1 className='text-3xl font-bold text-center'>Brands on Sale</h1>

             <div className='grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 my-10 '>
             {Array.isArray(data) &&
                 data.filter(data=>data.isSaleOn===true).map(data=><BrandsonSale key={data._id} data={data}/>)  
              }
             </div>
           </section>
           <section className='my-10 w-10/12 mx-auto'>
            <Reviewsection/>

           </section>
           <section className='my-10'>
            <FeedBack/>
           </section>
            
        </div>
    );
};

export default Home;
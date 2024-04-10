import React from 'react';
import banner from "/images/home/banner.png";
const Banner = () => {
  return (
    <div className='section-container bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%'>
      <div className='py-24 flex flex-col md:flex-row justify-between items-center gap-8'>
        {/* texts */}
        <div className='md:w-1/2 px-4 space-y-7'>
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Dive into Delights Of Delectable <span className="text-green">Food</span>
          </h2>                 
          <p className=" text-xl text-[#4A4A4A] ">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full">
            Order Now
          </button>
        </div>
        {/* img */}
        <div className='md:w-1/2'>
          <img src={banner} alt="img" /> 
          <div>
            <div>
                <img src="images/home/b-food1.png" alt="" className='rounded-2xl' />
                <div className='space-y-1'>
                    <h5>Spicy noodles</h5>
                    <div className="rating rating-sm">
                        <input 
                        type="radio" 
                        name="rating-2" 
                        className="mask mask-star-2 bg-yellow-500" 
                        />
                        <input 
                        type="radio" 
                        name="rating-2" 
                        className="mask mask-star-2 bg-yellow-500" checked 
                        />
                        <input 
                        type="radio" 
                        name="rating-2" 
                        className="mask mask-star-2 bg-yellow-500" 
                        />
                         <input 
                         type="radio" 
                         name="rating-2" 
                         className="mask mask-star-2 bg-yellow-500" 
                         />
                         <input 
                         type="radio" 
                         name="rating-2" 
                         className="mask mask-star-2 bg-yellow-500" 
                         />
                    </div>
                    <p className='text-red'>$18.00</p>
                </div>
            </div>
        </div>

        </div>
        
      </div>
      
    </div>
  );
};

export default Banner;

import React from 'react';

const categoryItems = [
    { id: 1, title: "Main Dish", description: "(86 dishes)", image: "/images/home/category/img1.png" },
    { id: 2, title: "Breakfast", description: "(12 breakfast)", image: "/images/home/category/img2.png" },
    { id: 3, title: "Dessert", description: "(48 desserts)", image: "/images/home/category/img3.png" },
    { id: 4, title: "Browse All", description: "(255 Items)", image: "/images/home/category/img4.png" }
];

const Categories = () => {
    return (
        <div className='section-container py-16'>
            <div className='text-center'>
                <p className='subtitle'>Customer Favorites</p>
                <h3 className='title'>Popular Categories</h3>
            </div>
            {/* categories */}
            <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12'>
                {
                categoryItems.map((item, i) => (
                    <div key={item.id} className='shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 transition-all duration-300 z-10'>
                        <div className='flex w-full mx-auto items-center justify-center'>
                        <img src={item.image} alt="" className='bg-[#C1F1C6] p-5 rounded-full w-28 h-28' />

                        </div>
                        <div>
                            <h5></h5>
                        </div>
                    </div>
                   
                ))}
            </div>
        </div>
    );
};

export default Categories;

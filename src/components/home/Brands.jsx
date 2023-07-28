import React from 'react';

const Brands = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <h1 className='text-5xl underline font-bold text-center my-8 text-gray-700'>Our Brands</h1>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                <img className='rounded-xl' src="https://i.ytimg.com/vi/dYPOV9LErns/maxresdefault.jpg" alt="" />
                <img className='rounded-xl' src="https://www.practigalblog.com/wp-content/uploads/2018/05/Depositphotos_83924478_L.jpg" alt="" />
                <img className='rounded-xl' src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt="" />
                <img className='rounded-xl' src="https://economictimes.indiatimes.com/thumb/msid-94243436,width-1200,height-900,resizemode-4,imgsize-147968/toys-bccl.jpg?from=mdr" alt="" />
                <img className='rounded-xl' src="https://media.istockphoto.com/id/1017309510/photo/box-of-toys-on-the-floor-teddy-bear-in-box-vintage-tone-charitable-contribution-donation.jpg?s=612x612&w=0&k=20&c=PS2qfHXOkWTXNpWz4DN6snecYWa-EXqexW7j2VkxGAw=" alt="" />
                <img className='rounded-xl' src="https://www.vtechkids.com/assets/images/default/brands/baby/HeroBanner_mobile.jpg" alt="" />
            </div>
            </div>
    );
};

export default Brands;
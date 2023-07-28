import React from 'react';
import img1 from '../../assets/images/father-son-playing-with-toy-cars.jpg';
import img2 from '../../assets/images/children-playing-table.jpg';
import img3 from '../../assets/images/side-view-little-kid-playing-with-car.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel my-10 w-11/12 mx-auto">
  <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-full" />
                    
    <div className="absolute h-full flex items-center justify-between transform bg bg-gradient-to-r from-indigo-800 to-transparent">
                        <h1 className='font-bold w-4/5 mx-20 lg:ml-28 text-white lg:text-5xl'>Racing through imagination, our toy car website brings joy to all ages.</h1>
    <div className="absolute h-full flex items-center justify-between transform left-20 top-20 lg:left-28 lg:top-28">
    <button className='btn btn-secondary'>Order Now</button>                
    </div>
    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        
      <a href="#slide3" className="btn btn-circle bg-slate-200 text-black">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-slate-200 text-black">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute h-full flex items-center justify-between transform bg bg-gradient-to-r from-indigo-800 to-transparent">
                        <h1 className='w-11/12 lg:w-4/5 text-sm lg:text-4xl lg:font-bold lg:ml-28 mx-20 text-white'>Our toy car website is a haven for car enthusiasts and toy collectors alike. With an extensive collection of miniature vehicles, we offer a wide range of toy cars that cater to various tastes and preferences. </h1>
                        
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle bg-slate-200 text-black">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-slate-200 text-black">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1599623560574-39d485900c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-full" />
                    <div className="absolute h-full flex items-center justify-between transform bg bg-gradient-to-r from-indigo-800 to-transparent">
                        <h1 className='font-bold w-4/5 mx-20 lg:ml-28 text-white lg:text-4xl'>Unlock the magic of play with our captivating collection of toy cars, where imagination meets exhilaration.</h1>
                        
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle bg-slate-200 text-black">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-slate-200 text-black">❯</a>
    </div>
  </div> 
</div>
        </div>
    );
};

export default Banner;
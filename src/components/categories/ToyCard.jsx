import React from 'react';
import { Link } from 'react-router-dom';

const ToyCard = ({ data }) => {
    const { _id,img,name,price,rating} = data;
    return (
        <div>
            <div className="card w-11/12 mx-auto h-[450px] bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
                    <h2 className="card-title">{ name}</h2>
                    <p><span className='font-semibold'>Price:</span> ${ price}</p>
                    <p><span className='font-semibold'>Ratings:</span> { price}</p>
    <div className="card-actions">
      <Link to={`/all-toys/${_id}`}><button className="btn bg-slate-800">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ToyCard;
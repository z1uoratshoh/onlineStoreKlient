import React from 'react'

import cart0 from '../../assets/images/cart0.png';

// eslint-disable-next-line react/prop-types
const WishlistCards = ({ obj:{discount, icon_trush, img, title, price, price_discounted} }) => {
  return (
   <div >

<div className='w-[270px] relative bg-[#F5F5F5]' >
        <figure className='flex justify-between p-[10px]' >
        <h1 className='bg-[#DB4444] p-[4px_10px] text-[white] rounded-[4px]' > {discount} </h1>
        <img  src={icon_trush} alt="" />
        </figure>
        <img className='object-cover m-auto' src={img} alt="" />
    </div>

    <div className='flex h-[40px] items-center justify-center rounded-br-[4px] rounded-bl-[4px] bg-[black] text-[white]' >
          <img src={cart0} alt="" />
          <h1>Add to Cart</h1>
    </div>

    <h1 className='text-[16px] pt-[10px] font-[500]' > {title} </h1>
    <div className='flex items-center gap-[10px]' >
        <h1 className='text-[#DB4444] text-[16px] font-[500]' > {price} </h1>
        <h1 className='text-[16px] font-[500] text-[gray] line-through py-[8px] ' > {price_discounted} </h1>
    </div>


    
    {/* <div className='flex items-center gap-[10px]' >
        <img src={feedback} alt="" />
        <h1> {feedback_number} </h1>
    </div> */}

      


   </div>
  )
}

export default WishlistCards
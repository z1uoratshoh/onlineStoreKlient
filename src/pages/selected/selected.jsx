import React from 'react'

// * Components

import WishlistCards from '../../components/wishlistCards/wishlistCards'
import MyCard from '../../components/myCard/myCard';

// * Images


import joystick from "../../assets/images/joystick.png";
import star from "../../assets/images/star.png";
import trush from "../../assets/images/trush.png";
import like from '../../assets/images/like.png';
import eye from '../../assets/images/eye.png';


const Selected = () => {

    const Wishlist = [
        {
          discount: "-40%",
          icon_trush: trush,
          img: joystick,
          title: "HAVIT HV-G92 Gamepad",
          price: "$120",
          price_discounted: "$160",
          feedback: star,
          feedback_number: 88,
        },
        {
          discount: "-40%",
          icon_trush: trush,
          img: joystick,
          title: "HAVIT HV-G92 Gamepad",
          price: "$120",
          price_discounted: "$160",
          feedback: star,
          feedback_number: 88,
        },
        {
          discount: "-40%",
          icon_trush: trush,
          img: joystick,
          title: "HAVIT HV-G92 Gamepad",
          price: "$120",
          price_discounted: "$160",
          feedback: star,
          feedback_number: 88,
        },
        {
          discount: "-40%",
          icon_trush: trush,
          img: joystick,
          title: "HAVIT HV-G92 Gamepad",
          price: "$120",
          price_discounted: "$160",
          feedback: star,
          feedback_number: 88,
        },
      ];

      const myCard = [
        {
          discount: "-40%",
          icon_like: like,
          img: joystick,
          icon_eye: eye,
          title: "HAVIT HV-G92 Gamepad",
          price: "$120",
          price_discounted: "$160",
          feedback: star,
          feedback_number: 88,
        },
        {
          discount: "-40%",
          icon_like: like,
          img: joystick,
          icon_eye: eye,
          title: "HAVIT HV-G92 Gamepad",
          price: "$120",
          price_discounted: "$160",
          feedback: star,
          feedback_number: 88,
        },
        {
          discount: "-40%",
          icon_like: like,
          img: joystick,
          icon_eye: eye,
          title: "HAVIT HV-G92 Gamepad",
          price: "$120",
          price_discounted: "$160",
          feedback: star,
          feedback_number: 88,
        },
        {
          discount: "-40%",
          icon_like: like,
          img: joystick,
          icon_eye: eye,
          title: "HAVIT HV-G92 Gamepad",
          price: "$120",
          price_discounted: "$160",
          feedback: star,
          feedback_number: 88,
        },
      ];

  return (
    <div>
           <nav className='flex items-center justify-between px-[100px] py-[60px]' >
              <h1>Wishlist(4)</h1>
              <button className='border-[2px] font-[600] border-gray-300 w-[220px] h-[55px] rounded-[4px]' >Move All To Bag</button>
           </nav>

           <section className='flex flex-wrap items-center justify-evenly mb-[100px] mt-[50px]' >
                  {
                     Wishlist.map((elem, i) => {
                        return (
                            <WishlistCards 
                              key={i} 
                          obj={elem}
                            />
 
                        )
                     } )
                  }
           </section>

           <article className='flex items-center py-[100px] justify-between px-[100px]' >
                    <div className='flex items-center gap-[10px]' >
                    <figure className='bg-[#DB4444] w-[20px] h-[40px] rounded-[4px]' >
                     </figure>
                     <h1 className='text-[26px] font-[400]' >Just For You</h1>
                    </div>
                     <button className='border-[2px] font-[600] border-gray-300 w-[170px] h-[55px] rounded-[4px]' >See All</button>
           </article>

           <section className='flex items-center flex-wrap justify-evenly mb-[100px]' >
                     {
                        myCard.map((elem, i) => {
                            return(
                                <MyCard 
                                  key={i} 
                                  obj={elem}
                                />
                            )
                        } )
                     }
           </section>

    </div>
  )
}

export default Selected
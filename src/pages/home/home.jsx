// * Components

import MyCard from "../../components/myCard/myCard";
import MyButton from "../../components/myButton/myButton";
import GetCard  from "../../components/getCard/getCard";


// * images
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import apple from "../../assets/images/apple.png";
import phone from "../../assets/images/phone.png";
import right from "../../assets/images/right.png";
import left from "../../assets/images/left.png";
import like from "../../assets/images/like.png";
import joystick from "../../assets/images/joystick.png";
import eye from "../../assets/images/eye.png";
import star from "../../assets/images/star.png";
import computer from "../../assets/images/computer.png";
import speaker from "../../assets/images/speaker.png";
import icon_1 from "../../assets/images/icon_1.png";
import icon_2 from "../../assets/images/icon_2.png";
import icon_3 from "../../assets/images/icon_3.png";
import { useGetTodosQuery } from "../../api/apiSlice";
import { Link } from "react-router-dom";

const Home = () => {
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

//   /** @type {import('tailwindcss').Config} */
// export default {
// 	darkMode: 'selector',
// 	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
// 	theme: {
// 		screens: {
// 			'2xl': { max: '1535px' },
// 			xl: { max: '1279px' },
// 			lg: { max: '1023px' },
// 			md: { max: '767px' },
// 			sm: { max: '639px' },
// 			xs: { max: '400px' },
// 		},
// 		extend: {},
// 	},
// 	plugins: [],
// }


  const { data} = useGetTodosQuery(); 
  console.log(data);
  const imgApi = "http://65.108.148.136:8072/images/";
  console.log(data);

  return (
    <main>
      <section className="flex flex-wrap xl:gap-[50px] lg:justify-start items-center gap-[150px] justify-center pt-[50px]">
        <ul className="lg:flex lg:flex-wrap lg:px-[20px] lg:leading-[30px] lg:gap-[30px] leading-[35px]">
          <li className="lg:bg-gray-300 lg:rounded-md lg:p-[5px_10px]" >Woman’s Fashion</li>
          <li className="lg:bg-gray-300 lg:rounded-md lg:p-[5px_10px]" >Men’s Fashion</li>
          <li className="lg:bg-gray-300 lg:rounded-md lg:p-[5px_10px]" >Electronics</li>
          <li className="lg:bg-gray-300 lg:rounded-md lg:p-[5px_10px]" >Home & Lifestyle</li>
          <li className="lg:bg-gray-300 lg:rounded-md lg:p-[5px_10px]" >Medicine</li>
          <li className="lg:bg-gray-300 lg:rounded-md lg:p-[5px_10px]" >Sports & Outdoor</li>
          <li className="lg:bg-gray-300 lg:rounded-md lg:p-[5px_10px]" >Baby’s & Toys</li>
          <li className="lg:bg-gray-300 lg:rounded-md lg:p-[5px_10px]" >Groceries & Pets</li>
          <li className="lg:bg-gray-300 lg:rounded-md lg:p-[5px_10px]" >Health & Beauty</li>
        </ul>

        <aside className="flex lg:block lg:m-auto bg-[black] text-[white] w-[59%]  items-center justify-center ">
          <div className="lg:text-center">
            <figure className="flex items-center lg:justify-center lg:pt-[20px] gap-[10px]">
              <img src={apple} alt="" />
              <h1 className="text-[white]">iPhone 14 Series</h1>
            </figure>
            <h1 className="text-[#FAFAFA] text-[48px] font-[600]">
              Up to 10% <br /> off Voucher
            </h1>
            <button>Shop Now → </button>
          </div>
          <div>
            <img className="lg:m-auto lg:py-[10px]" src={phone} alt="" />
          </div>
        </aside>
      </section>

      <section className="pl-[180px] md:pl-[130px] sm:pl-[100px] flex-wrap py-[50px] ">
        <div className="flex items-center gap-[10px]">
          <div className="bg-[#DB4444] rounded-[4px] w-[20px] h-[40px]"></div>
          <h1 className="text-[#DB4444] text-[16px] font-[600] ">Today’s</h1>
        </div>

        <div className="flex flex-wrap items-center md:gap-0 gap-[80px]">
          <h1 className="text-[36px] md:block md:w-full md:pb-[20px] font-[600] ">Flash Sales</h1>
          <article className="flex items-center gap-[10px]">
            <div>
              <h2>Days</h2>
              <h1 className="text-[32px] font-[700]">
                03 <span className="text-[#E07575]">:</span>
              </h1>
            </div>

            <div>
              <h2>Hours</h2>
              <h1 className="text-[32px] font-[700]">
                23 <span className="text-[#E07575]">:</span>
              </h1>
            </div>
            <div>
              <h2>Minutes</h2>
              <h1 className="text-[32px] font-[700]">
                19 <span className="text-[#E07575]">:</span>{" "}
              </h1>
            </div>
            <div>
              <h2>Seconds</h2>
              <h1 className="text-[32px] font-[700]">56</h1>
            </div>
          </article>

          <div className="flex justify-end xl:hidden w-[46%] items-center gap-[10px]">
            <img src={left} alt="" />
            <img src={right} alt="" />
          </div>
        </div>
      </section>

      <div className='mt-[80px] px-[20px]'>
        <div className='flex w-[100%] flex-wrap items-start gap-[35px] ml-[20px]'>
          {data?.data?.products?.map((el) => {
            return (
              <GetCard
              key={el.id}
              image={`${imgApi}${el.image}`}
              productName={el.productName}
              price={el.price}
              discountPrice={el.quantity}
              quantity={el.price + 72}
              id={el.id}
            />
            )
          }
            
          )}
        </div>
        <Link to={"products"}>
          <button className='ml-[550px] mt-[30px] w-[200px] h-[35px] rounded-[3px] bg-[#DB4444] text-[white]'>
            View All Products
          </button>
        </Link>
      </div>

      <div className=" w-[20%] my-[80px] m-auto">
        <MyButton text={"View All Products"} />
      </div>

      <hr className="border-[1.5px] w-[80%] m-auto mb-[50px]" />

      <div className="flex items-center ml-[10%] gap-[10px]">
        <div className="bg-[#DB4444] rounded-[4px] w-[20px] h-[40px]"></div>
        <h1 className="text-[#DB4444] text-[16px] font-[600]">Categories</h1>
      </div>

      <div className="flex items-center justify-between py-[20px] px-[150px]">
        <h1 className="text-[36px] font-[600]">Browse By Category</h1>
        <div className="flex items-center lg:hidden gap-[10px]">
          <img src={left} alt="" />
          <img src={right} alt="" />
        </div>
      </div>

      <section className="flex items-center justify-evenly md:gap-[20px] flex-wrap py-[50px]">
        <div className="border-[2px] w-[170px] h-[145px] grid place-items-center rounded-[4px]">
          <div>
            <img src={computer} alt="" />
            <h1 className="pt-[5px]">Phones</h1>
          </div>
        </div>
        <div className="border-[2px] w-[170px] h-[145px] grid place-items-center rounded-[4px]">
          <div>
            <img src={computer} alt="" />
            <h1 className="pt-[5px]">Phones</h1>
          </div>
        </div>
        <div className="border-[2px] w-[170px] h-[145px] grid place-items-center rounded-[4px]">
          <div>
            <img src={computer} alt="" />
            <h1 className="pt-[5px]">Phones</h1>
          </div>
        </div>
        <div className="border-[2px] w-[170px] h-[145px] grid place-items-center rounded-[4px]">
          <div>
            <img src={computer} alt="" />
            <h1 className="pt-[5px]">Phones</h1>
          </div>
        </div>
        <div className="border-[2px] w-[170px] h-[145px] grid place-items-center rounded-[4px]">
          <div>
            <img src={computer} alt="" />
            <h1 className="pt-[5px]">Phones</h1>
          </div>
        </div>
        <div className="border-[2px] w-[170px] h-[145px] grid place-items-center rounded-[4px]">
          <div>
            <img src={computer} alt="" />
            <h1 className="pt-[5px]">Phones</h1>
          </div>
        </div>
      </section>

      <div className="flex items-center ml-[10%] gap-[10px]">
        <div className="bg-[#DB4444] rounded-[4px] w-[20px] h-[40px]"></div>
        <h1 className="text-[#DB4444] text-[16px] font-[600]">This Month</h1>
      </div>

      <div className="flex items-center pb-[50px] lg:px-[60px] flex-wrap justify-between pt-[20px] px-[150px]">
        <h1 className="text-[36px] font-[600]">Best Selling Products</h1>
        <div className="flex items-center gap-[10px]">
          <MyButton text={"View All"} style={" w-[140px] "} />
        </div>
      </div>

      <article className="pb-[100px] flex flex-wrap items-center justify-center gap-[50px] ">
        {myCard.map((elem, i) => {
          return (
            <MyCard
              key={i}
              obj={elem}
            />
          );
        })}
      </article>

      <section className="bg-[black] w-[80%] flex flex-wrap items-center justify-center rounded-[4px] m-auto ">
       <div className="xl:flex xl:flex-wrap" >
       <div> 
          <h3 className="text-[#00FF66] md:py-[20px] text-[16px] font-[600]">Categories</h3>
          <h1 className="text-[48px] md:text-[38px] font-[600] text-[white]">
            Enhance Your <br /> Music Experience
          </h1>

          <div className="flex py-[20px] items-center gap-[20px]">
            <div className="w-[62px] h-[62px] rounded-full bg-[white] text-center grid place-items-center">
              <div className="leading-[20px]">
                <h1 className="font-bold">23</h1>
                <h1 className="text-[14px]">Hours</h1>
              </div>
            </div>
            <div className="w-[62px] h-[62px] rounded-full bg-[white] text-center grid place-items-center">
              <div className="leading-[20px]">
                <h1 className="font-bold">23</h1>
                <h1 className="text-[14px]">Hours</h1>
              </div>
            </div>
            <div className="w-[62px] h-[62px] rounded-full bg-[white] text-center grid place-items-center">
              <div className="leading-[20px]">
                <h1 className="font-bold">23</h1>
                <h1 className="text-[14px]">Hours</h1>
              </div>
            </div>
            <div className="w-[62px] h-[62px] rounded-full bg-[white] text-center grid place-items-center">
              <div className="leading-[20px]">
                <h1 className="font-bold">23</h1>
                <h1 className="text-[14px]">Hours</h1>
              </div>
            </div>
          </div>

          <MyButton
            text={"Buy Now!"}
            style={"bg-[#00FF66] hover:bg-[#00CC52] w-[170px] text-[black]"}
          />
        </div>
       </div>
        <aside >
          <img src={speaker} alt="" />
        </aside>
      </section>

      <div className="flex items-center mt-[100px] ml-[10%] gap-[10px]">
        <div className="bg-[#DB4444] rounded-[4px] w-[20px] h-[40px]"></div>
        <h1 className="text-[#DB4444] text-[16px] font-[600]">Our Products</h1>
      </div>

      <div className="flex items-center pb-[50px] justify-between pt-[20px] px-[150px]">
        <h1 className="text-[36px] font-[600]">Explore Our Products</h1>
      </div>

      <article className="py-[50] flex flex-wrap items-center justify-center gap-[50px] ">
        {myCard.map((elem, i) => {
          return (
            <MyCard
              key={i}
             obj={elem}
            />
          );
        })}
      </article>

      <div className="w-[20%] m-auto my-[50px] ">
        <MyButton text={"View All Products"} />
      </div>

      <div className="flex items-center ml-[10%] gap-[10px]">
        <div className="bg-[#DB4444] rounded-[4px] w-[20px] h-[40px]"></div>
        <h1 className="text-[#DB4444] text-[16px] font-[600]">Featured</h1>
      </div>

      <div className="flex items-center pb-[50px] justify-between pt-[20px] px-[150px]">
        <h1 className="text-[36px] font-[600]">New Arrival</h1>
      </div>

      <div
        className="grid grid-cols-2 lg:flex-wrap lg:grid-cols-1 gap-4 p-4"
        style={{ maxWidth: "1520px", margin: "0 auto" }}
      >
        {/* PlayStation 5 */}
        <div className="relative bg-red-500 h-80 flex items-end p-4 col-span-1">
          <div className="bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-xl font-bold">PlayStation 5</h2>
            <p className="text-sm">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="mt-2 bg-white text-black px-4 py-2 rounded">
              Shop Now
            </button>
          </div>
        </div>
        <div className="grid grid-rows-2 lg:grid-rows-1 gap-4 col-span-1">
          {/* Women's Collections */}
          <div className="relative bg-yellow-500 h-40 flex items-end p-4">
            <div className="bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-xl font-bold">Women`s Collections</h2>
              <p className="text-sm">
                Featured woman collections that give you another vibe.
              </p>
              <button className="mt-2 bg-white text-black px-4 py-2 rounded">
                Shop Now
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {/* Speakers */}
            <div className="relative bg-red-500 h-40 flex items-end p-4">
              <div className="bg-black bg-opacity-50 text-white p-4">
                <h2 className="text-xl font-bold">Speakers</h2>
                <p className="text-sm">Amazon wireless speakers.</p>
                <button className="mt-2 bg-white text-black px-4 py-2 rounded">
                  Shop Now
                </button>
              </div>
            </div>
            {/* Perfume */}
            <div className="relative bg-yellow-500 h-40 flex items-end p-4">
              <div className="bg-black bg-opacity-50 text-white p-4">
                <h2 className="text-xl font-bold">Perfume</h2>
                <p className="text-sm">GUCCI INTENSE OUD EDP</p>
                <button className="mt-2 bg-white text-black px-4 py-2 rounded">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="flex flex-wrap items-center justify-center gap-[50px] py-[100px] ">
        <div className="w-[300px] ">
          <img className="object-cover m-auto" src={icon_1} alt="" />
          <h1 className=" text-center py-[5px] text-[20px] font-[600]">
            FREE AND FAST DELIVERY
          </h1>
          <h2 className=" text-center text-[16px] font-[400]">
            Free delivery for all orders over $140
          </h2>
        </div>
        <div className="w-[300px] ">
          <img className="object-cover m-auto" src={icon_2} alt="" />
          <h1 className=" text-center py-[5px] text-[20px] font-[600]">
            24/7 CUSTOMER SERVICE
          </h1>
          <h2 className=" text-center text-[16px] font-[400]">
            Friendly 24/7 customer support
          </h2>
        </div>
        <div className="w-[300px] ">
          <img className="object-cover m-auto" src={icon_3} alt="" />
          <h1 className=" text-center py-[5px] text-[20px] font-[600]">
            MONEY BACK GUARANTEE
          </h1>
          <h2 className=" text-center text-[16px] font-[400]">
            We return money within 30 days
          </h2>
        </div>
      </section>
    </main>
  );
};

export default Home;

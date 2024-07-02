import React from "react";

// * images

import two_girls from "../../assets/images/2_girls.png";
import services from "../../assets/images/services.png";
import tom from "../../assets/images/tom.png";
import emma from "../../assets/images/emma.png";
import smith from "../../assets/images/smith.png";
import twitter from "../../assets/images/twitter.png";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import icon_1 from "../../assets/images/icon_1.png";
import icon_2 from "../../assets/images/icon_2.png";
import icon_3 from "../../assets/images/icon_3.png";

const aboutUs = () => {
  return (
    <div>
      <ul className="flex pl-[190px] items-center">
        <li>Home /</li>
        <li> About</li>
      </ul>

      <section className="flex items-center my-[90px] justify-center gap-[70px]">
        <aside>
          <h1 className="text-[54px] font-[600]">Our Story</h1>
          <p className="w-[525px] py-[20px]">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sellers and 300 brands and serves 3 millions customers
            across the region.{" "}
          </p>
          <p className="w-[505px]">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </aside>
        <article>
          <img src={two_girls} alt="" />
        </article>
      </section>

      <section className="flex items-center justify-evenly flex-wrap">
        <div className="w-[270px] my-[50px] hover:bg-[#DB4444] hover:text-[white] text-center border-[2px] border-gray-300 rounded-[4px] group">
          <img
            className="m-auto py-[20px]  group-hover:invert"
            src={services}
            alt=""
          />
          <h1 className="text-[32px] font-[700]">10.5k</h1>
          <p className="pb-[20px]">Sellers active our site</p>
        </div>

        <div className="w-[270px] my-[50px] hover:bg-[#DB4444] hover:text-[white] text-center border-[2px] border-gray-300 rounded-[4px] group">
          <img
            className="m-auto py-[20px]  group-hover:invert"
            src={services}
            alt=""
          />
          <h1 className="text-[32px] font-[700]">45.5k</h1>
          <p className="pb-[20px]">Customer active in our site</p>
        </div>
        <div className="w-[270px] my-[50px] hover:bg-[#DB4444] hover:text-[white] text-center border-[2px] border-gray-300 rounded-[4px] group">
          <img
            className="m-auto py-[20px]  group-hover:invert"
            src={services}
            alt=""
          />
          <h1 className="text-[32px] font-[700]">25k</h1>
          <p className="pb-[20px]">Annual gross sale in our site</p>
        </div>
        <div className="w-[270px] my-[50px] hover:bg-[#DB4444] hover:text-[white] text-center border-[2px] border-gray-300 rounded-[4px] group">
          <img
            className="m-auto py-[20px]  group-hover:invert"
            src={services}
            alt=""
          />
          <h1 className="text-[32px] font-[700]">10.5k</h1>
          <p className="pb-[20px]">Sellers active our site</p>
        </div>
      </section>

      <section className="flex items-center justify-center gap-[40px] flex-wrap mt-[100px]">
        <div>
          <img src={tom} alt="" />
          <h1 className="text-[32px] font-[500]">Tom Cruise</h1>
          <p className="mb-[10px]">Founder & Chairman</p>
          <figure className="flex items-center gap-[10px]">
            <img className="invert" src={twitter} alt="" />
            <img className="invert" src={instagram} alt="" />
            <img className="invert" src={linkedin} alt="" />
          </figure>
        </div>
        <div>
          <img src={emma} alt="" />
          <h1 className="text-[32px] font-[500]">Tom Cruise</h1>
          <p className="mb-[10px]">Founder & Chairman</p>
          <figure className="flex items-center gap-[10px]">
            <img className="invert" src={twitter} alt="" />
            <img className="invert" src={instagram} alt="" />
            <img className="invert" src={linkedin} alt="" />
          </figure>
        </div>
        <div>
          <img src={smith} alt="" />
          <h1 className="text-[32px] font-[500]">Tom Cruise</h1>
          <p className="mb-[10px]">Founder & Chairman</p>
          <figure className="flex items-center gap-[10px]">
            <img className="invert" src={twitter} alt="" />
            <img className="invert" src={instagram} alt="" />
            <img className="invert" src={linkedin} alt="" />
          </figure>
        </div>
      </section>
      <section className="flex items-center justify-center gap-[50px] pb-[150px] pt-[100px] ">
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
    </div>
  );
};

export default aboutUs;

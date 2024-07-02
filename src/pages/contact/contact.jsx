import React from "react";

import phonecall from "../../assets/images/phonecall.png";
import gmail from "../../assets/images/gmail.png";
import MyButton from "../../components/myButton/myButton";

const Contact = () => {
  return (
    <div>
      <ul className="flex ml-[180px] pt-[40px] items-center">
        <li>Home /</li>
        <li> Contact</li>
      </ul>

      <section className="flex items-center justify-center gap-[50px] my-[100px]">
        <div className="w-[350px] bg-white shadow-[0px_0px_5px_gray] hover:shadow-2xl transition-shadow duration-300 p-10 rounded-lg">
          <figure className="flex items-center gap-[10px]">
            <img src={phonecall} alt="" className="w-8 h-8" />
            <h1 className="text-lg font-semibold">Call To Us</h1>
          </figure>
          <p className="text-gray-700 pt-[20px]">
            We are available 24/7, 7 days a week.
          </p>
          <p className="text-gray-600 py-[10px]">Phone: +8801611112222</p>
          <hr className="my-4" />
          <figure className="flex items-center py-[10px] gap-[10px]">
            <img src={gmail} alt="" className="w-8 h-8" />
            <h1 className="text-lg font-semibold">Write To Us</h1>
          </figure>
          <p className="text-gray-700 pb-[15px] pt-[10px] ">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-gray-600">Emails: customer@exclusive.com</p>
          <p className="text-gray-600 py-[10px] ">
            Emails: support@exclusive.com
          </p>
        </div>
        <div className="shadow-[0px_0px_5px_gray] transition-shadow duration-300 hover:shadow-2xl w-[780px]">
          <div className="p-[30px]  ">
            <input
              className=" border-[1.5px] outline-none border-gray-300 w-[220px] pl-[20px] h-[45px] rounded-[4px] "
              type="text"
              placeholder="Name"
            />
            <input
              className=" border-[1.5px] outline-none border-gray-300 w-[220px] mx-[20px] pl-[20px] h-[45px] rounded-[4px] "
              type="text"
              placeholder="Email"
            />
            <input
              className=" border-[1.5px] outline-none border-gray-300 w-[220px] pl-[20px] h-[45px] rounded-[4px] "
              type="text"
              placeholder="Phone"
            />
          </div>
          <div>
            <textarea
              className="ml-[30px] shadow-[0px_0px_5px_gray] w-[700px] h-[176px] mb-[30px] outline-none p-[20px] "
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className=" flex justify-end mr-[40px] pb-[50px]">
            <MyButton text={"Send Message"} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

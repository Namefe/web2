import React from "react";

const Footer = () => {
  return (
    <section className=" w-full h-fit bg-black text-white pb-4">
      <div className="w-full h-[1px] line"></div>
      <div className="lg:flex lg:justify-between px-6  lg:pb-4">
        <div className="mt-6">
          <img src={process.env.PUBLIC_URL + "/smlogo.png"} />
        </div>
        <div className="mb-8">
          <div>
            <h3 className="font-bold text-[14px] sm:text-[16px] mt-6 mb-2 ">CONTACT US</h3>
            <div className="flex lg:block">
              <div className="opacity-80 text-[12px] sm:text-[14px] mr-2">대표번호: 02-6240-9800</div>
              <div className="opacity-80 text-[12px] sm:text-[14px]">이메일: smeir@smtown.com</div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mt-4 hidden lg:block">OUR BUSINESS</h3>
            <div className="opacity-80 hidden lg:block sm:text-[14px]">
              SM Entertainment operates across multiple business
              <br />
              sectors within the entertainment industry.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] line px-6"></div>
      <div className="footer2  w-full flex flex-col-reverse lg:flex-row lg:justify-between px-6   pt-12 pb-12 lg:pb-10">
        <div className="block mt-12 lg:mt-0">
          <h3 className="font-bold mt-4 mb-2 text-[14px] sm:text-[16px]">OUR COMMUNITY</h3>
          <div className="flex flex-end m-0 p-0">
            <img className="m-2" src={process.env.PUBLIC_URL + "/icon3.png"} />
            <img className="m-2" src={process.env.PUBLIC_URL + "/icon6.png"} />
            <img className="m-2" src={process.env.PUBLIC_URL + "/icon4.png"} />
            <img className="m-2" src={process.env.PUBLIC_URL + "/icon2.png"} />
            <img className="m-2" src={process.env.PUBLIC_URL + "/icon_01.png"} />
          </div>
        </div>
        <div className="mr-[70px]">
          <h3 className="font-bold mt-4 mb-2 text-[14px] sm:text-[16px]">POLICY</h3>
          <div className="flex lg:block">
            <div className="opacity-80 text-[12px] sm:text-[14px] mr-2">개인정보처리방침</div>
            <div className="opacity-80 text-[12px] sm:text-[14px]">©SM Entertainment. All Right Reserved.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

import React from "react";

const View01 = () => {
  return (
    <section className="relative w-full  min-h-screen bg-black  overflow-hidden hidden lg:block">
      <div className="relative w-full h-screen z-10">
<div className="absolute top-[40%] left-[5%] lg:top-[65%] lg:left-[8%] -translate-x-1/2 -translate-y-1/2 scale-[0.5] lg:scale-[0.7] z-50 pointer-events-none">
  <div className="relative inline-block overflow-hidden pointer-events-auto">
    <img
      src={process.env.PUBLIC_URL + "/1.png"}
      className="relative z-10 block hover:animate-shake origin-center will-change-transform"
    />
    <div
      className="backdrop-blur-sm w-[165px] h-[752px] absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[138deg] z-0"
      style={{ borderRadius: "100px" }}
    ></div>
  </div>
</div>

<div className="absolute top-[27%] left-[10%] 2xl:top-[40%] 2xl:left-[25%] -translate-x-1/2 -translate-y-1/2 scale-[1] 2xl:scale-[0.8] pointer-events-none">
  <div className="relative inline-block overflow-hidden pointer-events-auto">
    <img
      src={process.env.PUBLIC_URL + "/2.png"}
      className="relative z-10 hover:animate-shake origin-center will-change-transform"
    />
    <div
      className="absolute z-0 w-[300px] h-[100px] sm:w-[400px] sm:h-[120px] lg:w-[550px] lg:h-[170px] 
        top-[120px] left-[60px] sm:top-[135px] sm:left-[165px] lg:top-[135px] lg:left-[165px] 
        rotate-[23deg] backdrop-blur-sm"
      style={{
        borderRadius: "100px",
      }}
    ></div>
  </div>
</div>

<div className="absolute top-[20%] left-[40%] lg:top-[10%] lg:left-[40%] -translate-x-1/2 -translate-y-1/2 scale-[0.4] lg:scale-[0.7] pointer-events-none">
  <img
    src={process.env.PUBLIC_URL + "/3.png"}
    className="hover:animate-shake origin-center will-change-transform pointer-events-auto"
  />
</div>

<div className="absolute top-[18%] left-[95%] lg:top-[5%] lg:left-[65%] -translate-x-1/2 -translate-y-1/2 scale-[0.8] pointer-events-none">
  <img
    src={process.env.PUBLIC_URL + "/4.png"}
    className="hover:animate-shake origin-center will-change-transform pointer-events-auto"
  />
</div>

<div className="absolute top-[45%] left-[80%] -translate-x-1/2 -translate-y-1/2  z-10 pointer-events-none">
  <img
    src={process.env.PUBLIC_URL + "/5.png"}
    className="hover:animate-shake origin-center will-change-transform pointer-events-auto"
  />
</div>

<div className="absolute top-[90%] left-[90%] -translate-x-1/2 -translate-y-1/2 xl:scale-[2] pointer-events-none">
  <img
    src={process.env.PUBLIC_URL + "/6.png"}
    className="hover:animate-shake origin-center will-change-transform pointer-events-auto"
  />
</div>
      </div>
      <div className="sm:text-left px-40 absolute w-full font-bold text-white  bottom-9">
        <div className="mb-20 ">
          <p className="m-0 text-[44px] sm:text-[60px] lg:text-[94px] xl:text-[120px] 2xl:text-[152px] leading-none font-sans">
            THE <span className="en text-[35px] sm:text-[50px] lg:text-[80px] xl:text-[100px] 2xl:text-[130px] align-baseline font-normal">CUL</span>TURE,
          </p>
          <p className="m-0 text-[44px] sm:text-[60px] lg:text-[94px] xl:text-[120px] 2xl:text-[152px] leading-none font-sans">
            THE <span className="en text-[35px] sm:text-[50px] lg:text-[80px] xl:text-[100px] 2xl:text-[130px] align-baseline font-normal">FU</span>TURE
          </p>
        </div>
        <div className="text-right text-white text-xs sm:text-base font-medium relative z-20">
          <span className="opacity-90 text-[25px] sm:text-[30px] xl:text-[50px] z-40">We invest in the future.</span>
        </div>
      </div>

      <div className="relative">
        <div className="absolute lg:bottom-[50px] lg:left-[50px] text-xs sm:text-[12px] text-white">
          Introduction
        </div>
        <div className="absolute bottom-[50px] left-[50%] lg:bottom-[50px] lg:left-[50%] -translate-x-1/2  scroll hover:cursor-pointer">
          <img
            className="cursor-pointer pointer-events-auto w-8 sm:w-12 "
            src={process.env.PUBLIC_URL + "/scroll.png"}
          />
        </div>
      </div>

      <div
        className="fixed bottom-4 right-4  border border-white/50 rounded-full hover:cursor-pointer w-[70px] h-[70px] sm:w-[50px] sm:h-[50px] lg:w-[72px] lg:h-[72px]  z-10"
        style={{ backdropFilter: "blur(3.86px)", zIndex: "9999" }}
      >
        <img
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          src={process.env.PUBLIC_URL + "/top.png"}
          alt="top"
          className="w-full h-full scale-75 relative top-[-4px]"
        />
      </div>

      <div>
        <div className="lg:block hidden absolute top-0 bottom-0 left-[140px] w-px bg-gradient-to-b from-white to-transparent opacity-40"></div>

        <div className="lg:block hidden absolute top-0 bottom-0 right-[140px] w-px bg-gradient-to-b from-white to-transparent opacity-40"></div>

        <div className="absolute bottom-[150px] left-0 w-full lg:w-[150%] h-px bg-gradient-to-r from-white lg:via-transparent lg:to-transparent lg:opacity-40"></div>
      </div>
    </section>
  );
};

export default View01;

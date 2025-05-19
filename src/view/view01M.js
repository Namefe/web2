import React from 'react'

const View01M = () => {
  return (
        <section className="relative w-full  min-h-screen bg-black  overflow-hidden block lg:hidden">
      <div className="relative w-full h-screen z-10">
<div className="absolute top-[55%] left-[10%] lg:top-[65%] lg:left-[8%] -translate-x-1/2 -translate-y-1/2 scale-[0.5] lg:scale-[1] z-50 pointer-events-none">
  <div className="relative inline-block overflow-hidden pointer-events-auto">
    <img
      src={process.env.PUBLIC_URL + "/1.png"}
      className="relative z-10 block hover:animate-shake origin-center will-change-transform"
    />
    <div
      className="backdrop-blur-sm w-[160px] h-[750px] absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[138deg] z-0"
      style={{ borderRadius: "100px" }}
    ></div>
  </div>
</div>

<div className="absolute top-[30%] left-[10%] 2xl:top-[40%] 2xl:left-[25%] -translate-x-1/2 -translate-y-1/2 scale-[1] 2xl:scale-[0.8] pointer-events-none">
  <div className="relative inline-block pointer-events-auto">
    <img
      src={process.env.PUBLIC_URL + "/2.png"}
      className="relative z-10 hover:animate-shake origin-center will-change-transform"
    />
    <div
      className="backdrop-blur-sm absolute top-[48px] left-1/2 -translate-x-1/2 mt-2 w-[300px] h-[100px] rotate-[23deg] z-0"
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

<div className="absolute w-[300px] top-[1%] left-[70%] lg:top-[5%] lg:left-[65%] w-fit h-fit  pointer-events-none">
  <img
    src={process.env.PUBLIC_URL + "/4.png"}
    className="hover:animate-shake origin-center will-change-transform pointer-events-auto"
  />
</div>

<div className="absolute top-[35%] left-[80%]  z-10 pointer-events-none">
  <img
    src={process.env.PUBLIC_URL + "/5.png"}
    className="hover:animate-shake origin-center will-change-transform pointer-events-auto"
  />
</div>

<div className="absolute top-[70%] left-[75%] w-[200px] h-fit pointer-events-none">
  <img
    src={process.env.PUBLIC_URL + "/6.png"}
    className="hover:animate-shake origin-center will-change-transform pointer-events-auto"
  />
</div>
      </div>
      <div className="xl:text-left text-center absolute w-full font-bold text-white  bottom-9">
        <div className="relative bottom-[35vh] ">
          <p className="m-0 text-[44px] sm:text-[60px] lg:text-[94px] xl:text-[120px] 2xl:text-[152px] leading-none font-sans">
            THE <span className="font-myfont text-[35px] sm:text-[50px] lg:text-[80px] xl:text-[100px] align-baseline">CUL</span>TURE,
          </p>
          <p className="m-0 text-[44px] sm:text-[60px] lg:text-[94px] xl:text-[120px] 2xl:text-[152px] leading-none font-sans">
            THE <span className="font-myfont text-[35px] sm:text-[50px] lg:text-[80px] xl:text-[100px] align-baseline">FU</span>TURE
          </p>
        </div>
        <div className="text-center text-white relative bottom-[30vh] text-xs sm:text-base font-medium ">
          <span className="opacity-90 text-[20px] sm:text-[30px] xl:text-[50px] z-40">We invest in the future.</span>
        </div>
      </div>

      <div className="relative">
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

        <div className="absolute bottom-[100px] left-0 w-full lg:w-[150%] h-px bg-gradient-to-r from-white lg:via-transparent lg:to-transparent lg:opacity-40"></div>
      </div>
    </section>
  )
}

export default View01M
import React from "react";

const View04 = () => {
  return (
    <section className="relative sec4bg w-full text-white  bg-cover bg-center z-[90]">
      <video autoPlay muted loop className="sticky top-0 left-0 w-full h-screen object-cover z-[-1]">
        <source src={process.env.PUBLIC_URL + "/BackgroundVideo.mp4"} type="video/mp4" />
      </video>

      <div className="relative h-[500vh]">
        <div className="sec5txt flex flex-col justify-center items-center w-full h-[100vh]  mix-blend-difference relative z-30">
          <div className="text-[14px] lg:text-2xl xl:text-[31px] xl:m-4">SM Entertainment는</div>
          <div className="text-[22px] font-bold lg:text-2xl xl:text-[52px]">K-Culture의 미래를 설계합니다.</div>
        </div>
        <div className="sec5 ">
          <img
            className="absolute left-[10%] top-[10%] sec5img1 w-[200px] lg:w-[300px] xl:w-[420px] h-auto object-contain"
            src={process.env.PUBLIC_URL + "/sec4_01.png"}
          ></img>
          <img
            className="absolute right-[10%] top-[20%] lg:top-[15%] sec5img2 w-[200px] lg:w-[300px] xl:w-[420px] h-auto object-contain"
            src={process.env.PUBLIC_URL + "/sec4_02.png"}
          ></img>
          <img
            className="absolute left-[50%] top-[30%] lg:top-[25%] -translate-x-1/2 w-[200px] lg:w-[300px] xl:w-[420px] h-auto object-contain"
            src={process.env.PUBLIC_URL + "/sec4_03.png"}
          ></img>
          <img
            className="absolute left-[20%] top-[38%] sec5img4 w-[200px] lg:w-[300px] xl:w-[420px] h-auto object-contain"
            src={process.env.PUBLIC_URL + "/sec4_04.png"}
          ></img>
          <img
            className="absolute right-[15%] top-[55%] sec5img5 w-[200px] lg:w-[300px] xl:w-[420px] h-auto object-contain"
            src={process.env.PUBLIC_URL + "/sec4_05.png"}
          ></img>
          <img
            className="absolute left-[10%] top-[70%] lg:top-[60%] sec5img6 w-[200px] lg:w-[300px] xl:w-[420px] h-auto object-contain"
            src={process.env.PUBLIC_URL + "/sec4_06.png"}
          ></img>
          <img
            className="sec5img7 left-[50%] top-[80%]  -translate-x-1/2  w-[200px] lg:w-[300px] xl:w-[420px] h-auto object-contain"
            src={process.env.PUBLIC_URL + "/sec4_07.png"}
          ></img>
        </div>
      </div>
    </section>
  );
};

export default View04;

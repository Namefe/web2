"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollReveal() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const clipPathBg = useTransform(scrollYProgress, [0, 0.3], [
  //   'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
  //   'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  // ])
  const scaleBg = useTransform(scrollYProgress, [0, 0.3], [0, 2]);
  const translateYBg = useTransform(scrollYProgress, [0, 0.3], ["-20%", "0%"]);

  const clipPathContent = useTransform(
    scrollYProgress,
    [0.3, 0.6],
    ["polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)", "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"]
  );
  const opacityContent = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

  const innerOpacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);

  const innerTextOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  const imgWidth = useTransform(scrollYProgress, [0.62, 0.65], [0, isMobile ? 80 : 160]);

  const scaleText = useTransform(scrollYProgress, [0.3, 0.6], [0.6, 1]);

  const maskScale = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);

  const scaleX = useTransform(scrollYProgress, [0.6, 0.65], [0, 1])

  return (
    <>
      <div className="h-[50vh] w-full bg-black"></div>
      <section ref={sectionRef} className="relative w-full h-[400vh] bg-black">
        <div className="sticky top-1/2 -translate-y-1/2 z-30 text-white text-[30px] lg:text-5xl font-bold text-center px-4 w-full ">
          아시아를 넘어 글로벌 No.1을 지향합니다.
        </div>

        <motion.div
          className="sticky top-0 w-full h-screen z-[50] overflow-x-clip"
          style={
            {
              // clipPath: clipPathBg,
            }
          }
          
        >
          <motion.img
           src={process.env.PUBLIC_URL + "/bg.jpg"}
            alt="배경"
            className="w-full h-full object-cover"
            style={{
              maskImage: `url(${process.env.PUBLIC_URL}/map/map.svg)`,
              scale: scaleBg,
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskImage: `url(${process.env.PUBLIC_URL}/map/map.svg)`,
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              transform: `scale(${scaleBg.get()})`,
              transformOrigin: "center",
            }}
          />

          <motion.div
            className="main-slogan-3 absolute top-0 w-full h-screen z-[60] bg-white p-10 text-black font-bold flex flex-col items-center justify-center"
            style={{
              clipPath: clipPathContent,
              opacity: opacityContent,
              backgroundImage: 'url("/sec3_bg.png")',
            }}
          >
          <motion.div
            className=" text-[13px] lg:text-[32px] 2xl:text-[64px]  h-15 leading-[2.5rem] 2xl:h-28 2xl:leading-[7rem] text-center flex items-center"
            style={{ opacity: innerTextOpacity, scale: scaleText }}
          >

            <motion.div
            className="inline-block"
            // style={{
            //   x: useTransform(scrollYProgress, [0.6, 0.65], [30, 10]), 
            // }}
          >
           SM Entertainment는 1995년 설립 이후&nbsp;
          </motion.div>

            <motion.div className="flex-none h-full origin-center relative w-[60px] lg:w-[150px] mx-2 lg:mx-0 2xl:mx-4">
                <motion.div
                  className="absolute inset-0"
                  style={{
                    clipPath: useTransform(scrollYProgress, [0.6, 0.65], [
                      'inset(0 50% 0 50%)',
                      'inset(0 0% 0 0%)'
                    ])
                  }}
                >
                <img src={process.env.PUBLIC_URL + "/sec3_01.png"} alt="..." className="w-full h-full object-contain" />
                </motion.div>
            </motion.div>
              </motion.div>


            <motion.div
              className="text-[13px] lg:text-[32px] 2xl:text-[64px]  h-15 leading-[2.5rem] 2xl:h-28 2xl:leading-[7rem]  text-center"
              style={{ opacity: innerTextOpacity, scale: scaleText }}
            >
              K-POP을 선도하며 글로벌 시장을 개척해왔습니다.
            </motion.div>

            <motion.div
              className="text-[13px] lg:text-[32px] 2xl:text-[64px]  h-15 leading-[2.5rem] 2xl:h-28 2xl:leading-[7rem] text-center flex items-center"
              style={{ opacity: innerTextOpacity, scale: scaleText }}>

          <motion.div
            className="inline-block"
            // style={{
            //   x: useTransform(scrollYProgress, [0.6, 0.65], [0, -30]), 
            // }}
          >
            최고의 인재와 퍼포먼스로 세계에
          </motion.div>

            <motion.div 
              className="flex-none h-full origin-center relative w-[60px] lg:w-[150px]  mx-2 lg:mx-0 2xl:mx-4"
            >
                <motion.div
                  className="absolute inset-0"
                  style={{
                    clipPath: useTransform(scrollYProgress, [0.6, 0.65], [
                      'inset(0 50% 0 50%)',
                      'inset(0 0% 0 0%)'
                    ])
                  }}
                >
                <img src={process.env.PUBLIC_URL + "/sec3_02.png"} alt="..." className="w-full h-full object-contain" />
                </motion.div>
            </motion.div>

          <motion.div
            className="inline-block"
            // style={{
            //   x: useTransform(scrollYProgress, [0.6, 0.65], [0, 30]), 
            // }}
          >
            '한류'를 알리며
          </motion.div>
          </motion.div>


          <motion.div
            className="text-[13px] lg:text-[32px] 2xl:text-[64px]  h-10 leading-[2.5rem] 2xl:h-28 2xl:leading-[7rem] flex items-center text-center"
            style={{ opacity: innerTextOpacity, scale: scaleText }}
          >
            <motion.div className="inline-block relative w-[20px] lg:w-[60px] 2xl:w-[80px]  2xl:h-[80px] h-[20px] lg:h-[60px]  mx-2 lg:mx-0 2xl:mx-4">
                <motion.div
                  className="absolute inset-0"
                  style={{
                    clipPath: useTransform(scrollYProgress, [0.6, 0.65], [
                      'inset(0 50% 0 50%)',
                      'inset(0 0% 0 0%)'
                    ])
                  }}
                >
                <img src={process.env.PUBLIC_URL + "/sec3_03.png"} alt="..." className="w-full h-full justify-center items-center object-contain" />
                </motion.div>
            </motion.div>
            <motion.div
            className="inline-block"
            // style={{
            //   x: useTransform(scrollYProgress, [0.6, 0.65], [0, 30]), 
            // }}
          >
            글로벌 1등 기업으로 도약하겠습니다.
          </motion.div>
          </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

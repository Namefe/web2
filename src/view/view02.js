'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollReveal() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // const clipPathBg = useTransform(scrollYProgress, [0, 0.3], [
  //   'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
  //   'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  // ])
  const scaleBg = useTransform(scrollYProgress, [0, 0.3], [0, 2])
  const translateYBg = useTransform(scrollYProgress, [0, 0.3], ['-20%', '0%'])

  const clipPathContent = useTransform(scrollYProgress, [0.3, 0.6], [
    'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
    'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  ])
  const opacityContent = useTransform(scrollYProgress, [0.3, 0.4], [0, 1])

  const innerOpacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1])

  const innerTextOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1])
  

  const imgWidth = useTransform(scrollYProgress, [0.62, 0.65], [0, isMobile ? 80 : 160])

  const scaleText = useTransform(scrollYProgress, [0.3, 0.6], [0.6, 1])

  const maskScale = useTransform(scrollYProgress, [0, 0.3], [0.5, 1])

  return (
    <>
    <div className='h-[50vh] w-full bg-black'></div>
    <section ref={sectionRef} className="relative w-full h-[400vh] bg-black">

      <div className="sticky top-1/2 -translate-y-1/2 z-30 text-white text-[30px] lg:text-5xl font-bold text-center px-4 w-full ">
        아시아를 넘어 글로벌 No.1을 지향합니다.
      </div>

      <motion.div
        className="sticky top-0 w-full h-screen z-[50] overflow-x-clip"
        style={{
          // clipPath: clipPathBg,
        }}
      >
        <motion.img 
          src="/bg.png" 
          alt="배경" 
          className="w-full h-full object-cover"
          style={{
            maskImage: 'url("/map/map.svg")',
            scale: scaleBg,
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskImage: 'url("/map/map.svg")',
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            transform: `scale(${scaleBg.get()})`,
            transformOrigin: 'center'
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
            className="text-base lg:text-[32px] 2xl:text-[64px] h-20 leading-[5rem] 2xl:h-28 2xl:leading-[7rem]  text-center flex items-center"
            style={{ opacity: innerTextOpacity , scale: scaleText, }}
          >
            SM Entertainment는 1995년 설립 이후&nbsp;
            <div className="overflow-hidden flex items-center">
              <motion.img
                src="/sec3_01.png"
                className="mx-2"
                style={{ width: imgWidth, opacity: innerOpacity }}
              />
            </div>
          </motion.div>

          <motion.div
            className="text-base lg:text-[32px] 2xl:text-[64px] h-20 leading-[5rem] 2xl:h-28 2xl:leading-[7rem]  text-center"
            style={{ opacity: innerTextOpacity , scale: scaleText, }}
          >
            K-POP을 선도하며 글로벌 시장을 개척해왔습니다.
          </motion.div>

          <motion.div
            className="text-base lg:text-[32px] 2xl:text-[64px] h-20 leading-[5rem] 2xl:h-28 2xl:leading-[7rem]  text-center "
            style={{ opacity: innerTextOpacity , scale: scaleText,}}
          >
            최고의 인재와 퍼포먼스로 세계에&nbsp;
            <motion.img
              src="/sec3_02.png"
              className="inline-block align-middle  mx-2"
              style={{ width: imgWidth, opacity: innerOpacity }}
            />
            '한류'를 알리며
          </motion.div>

          <motion.div
            className="text-base lg:text-[32px] 2xl:text-[64px] h-20 leading-[5rem] 2xl:h-28 2xl:leading-[7rem]  flex items-center  text-center"
            style={{ opacity: innerTextOpacity , scale: scaleText, }}
          >
            {/* transform으로 변경 transform: `translateX(${imgWidth})` */}
            <motion.div className="overflow-hidden flex items-center" style={{transform: `translateX(${imgWidth})`, opacity: innerOpacity}}>
              <img
                src="/sec3_03.png"
                className="mx-2 w-10 lg:w-[76px]"
              />
            </motion.div>
            글로벌 1등 기업으로 도약하겠습니다.
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
    </>
  )
}

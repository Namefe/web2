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
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const clipPathBg = useTransform(scrollYProgress, [0, 0.3], [
    'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
    'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  ])
  const scaleBg = useTransform(scrollYProgress, [0, 0.3], [0.5, 1])
  const translateYBg = useTransform(scrollYProgress, [0, 0.3], ['-20%', '0%'])

  const clipPathContent = useTransform(scrollYProgress, [0.3, 0.6], [
    'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
    'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  ])
  const opacityContent = useTransform(scrollYProgress, [0.3, 0.4], [0, 1])

  const translateX = useTransform(scrollYProgress, [0.35, 0.45], [-100, 0])
  const innerOpacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1])

  const innerTextOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1])
  
  // ✅ 모바일이면 100px, 아니면 148px
  const imgWidth = useTransform(scrollYProgress, [0.5, 0.65], [0, isMobile ? 50 : 148])

  return (
    <section ref={sectionRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-1/2 left-1/2  -translate-y-1/2 z-30 text-white text-[30px] lg:text-5xl font-bold text-center px-4 max-w-[90%] ">
        아시아를 넘어 글로벌 No.1을 지향합니다.
      </div>

      <motion.div
        className="sticky top-0 w-full h-screen z-[50]"
        style={{
          clipPath: clipPathBg,
          scale: scaleBg,
          translateY: translateYBg,
        }}
      >
        <img src="/bg.png" alt="배경" className="w-full h-full object-cover" />

        <motion.div
          className="main-slogan-3 absolute top-0 w-full h-screen z-[60] bg-white p-10 text-black font-bold flex flex-col items-center justify-center"
          style={{
            clipPath: clipPathContent,
            opacity: opacityContent,
            backgroundImage: 'url("/sec3_bg.png")',
          }}
        >
          <motion.div
            className="text-[20px] lg:text-[64px] text-center flex items-center"
            style={{ opacity: innerTextOpacity }}
          >
            SM Entertainment는 1995년 설립 이후&nbsp;
            <div className="overflow-hidden flex items-center">
              <motion.img
                src="/sec3_01.png"
                className="h-[15px] lg:h-[58px] mx-2"
                style={{ width: imgWidth, opacity: innerOpacity }}
              />
            </div>
          </motion.div>

          <motion.div
            className="text-[20px] lg:text-[64px] text-center"
            style={{ opacity: innerTextOpacity }}
          >
            K-POP을 선도하며 글로벌 시장을 개척해왔습니다.
          </motion.div>

          <motion.div
  className="mt-4 text-[20px] lg:text-[64px] text-center leading-snug"
  style={{ opacity: innerTextOpacity }}
>
  최고의 인재와 퍼포먼스로 세계에&nbsp;
  <motion.img
    src="/sec3_02.png"
    className="inline-block align-middle h-[17px] lg:h-[58px] mx-2"
    style={{ width: imgWidth, opacity: innerOpacity }}
  />
  ‘한류’를 알리며
</motion.div>

          <motion.div
            className="mt-4 text-[20px] lg:text-[64px] flex items-center leading-snug text-center"
            style={{ opacity: innerTextOpacity }}
          >
            <div className="overflow-hidden flex items-center">
              <motion.img
                src="/sec3_03.png"
                className="h-[24px] lg:h-[147px] mx-2 "
                style={{ width: imgWidth, opacity: innerOpacity }}
              />
            </div>
            글로벌 1등 기업으로 도약하겠습니다.
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

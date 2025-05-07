'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollReveal() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // --- Step 1: 배경 이미지 퍼짐 ---
  const clipPathBg = useTransform(scrollYProgress, [0, 0.3], [
    'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
    'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  ])
  const scaleBg = useTransform(scrollYProgress, [0, 0.3], [0.5, 1])
  const translateYBg = useTransform(scrollYProgress, [0, 0.3], ['-20%', '0%'])

  // --- Step 2: 흰색 배경 콘텐츠 확장 ---
  const clipPathContent = useTransform(scrollYProgress, [0.25, 0.35], [
    'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
    'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  ])
  const opacityContent = useTransform(scrollYProgress, [0.25, 0.35], [0, 1])

  // --- Step 3: 내부 이미지 translate + fade-in ---
  const translateX = useTransform(scrollYProgress, [0.35, 0.45], [-100, 0])
  const innerOpacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1])

  return (
<section ref={sectionRef} className="relative h-[400vh] bg-black">
  {/* 고정된 h1 */}
  <div className="sticky top-1/2 -translate-y-1/2 z-30 text-white text-5xl font-bold text-center">
    아시아를 넘어 글로벌 No.1을 지향합니다.
  </div>

  {/* 배경 이미지 애니메이션 */}
  <motion.div
    className="sticky top-0 w-full h-screen z-[50]"
    style={{
      clipPath: clipPathBg,
      scale: scaleBg,
      translateY: translateYBg,
    }}
  >
    <img
      src="/bg.png"
      alt="배경"
      className="w-full h-full object-cover"
    />
  </motion.div>

      {/* STEP 3: 텍스트 + 이미지 콘텐츠 */}
      <motion.div
        className="main-slogan-3 absolute top-0 w-full h-screen z-[60] bg-white p-10 text-black font-semibold flex flex-col justify-center"
        style={{ clipPath: clipPathContent, opacity: opacityContent }}
      >
        <div className="text-[64px] flex items-center">
          SM Entertainment는 1995년 설립 이후&nbsp;
          <motion.img
            src="/sec3_01.png"
            className="w-[173px] h-[58px] mx-2"
            style={{ x: translateX, opacity: innerOpacity }}
          />
        </div>
        <div className="text-[64px]">
          K-POP을 선도하며 글로벌 시장을 개척해왔습니다.
        </div>

        <div className="mt-4 text-[64px] flex items-center">
          최고의 인재와 퍼포먼스로 세계에&nbsp;
          <motion.img
            src="/sec3_02.png"
            className="w-[148px] h-[58px] mx-2"
            style={{ x: translateX, opacity: innerOpacity }}
          />
        </div>
        <div className="text-[64px]">'한류'를 알리며</div>

        <div className="mt-4 text-[64px] flex items-center">
          <motion.img
            src="/sec3_03.png"
            className="w-[100px] h-[100px] mx-2"
            style={{ x: translateX, opacity: innerOpacity }}
          />
          글로벌 1등 기업으로 도약하겠습니다.
        </div>
      </motion.div>
    </section>
  )
}

'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollReveal() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // 첫 번째 div에서 두 번째 div로의 변환 (원형 확대)
  const clipPathFirstToSecond = useTransform(
    scrollYProgress,
    [0, 0.4],
    ['circle(0% at 50% 50%)', 'circle(250% at 50% 50%)']
  )

  // 두 번째 div에서 세 번째 div로의 변환 (직사각형 변환)
  const clipPathSecondToThird = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    ['circle(250% at 50% 50%)', 'rect(0% 100% 100% 0%)']
  )

  // 세 번째 div의 opacity 애니메이션 (스크롤에 따라 점차적으로 나타나게)
  const opacityThirdDiv = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    [0, 1] // 0에서 1로 opacity가 변화
  )

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center z-10">
        <h1 className="text-white text-5xl font-bold text-center z-30">
          아시아를 넘어 글로벌 No.1을 지향합니다.
        </h1>

        <motion.div
          className="absolute top-0 left-0 w-[100%] h-full z-30 overflow-hidden"
          style={{ clipPath: clipPathFirstToSecond }}
        >
          <img
            src="/bg.png"
            className="w-full  h-full object-cover absolute"
            alt="background"
          />
        </motion.div>

        {/*<motion.div
          className="absolute top-0 left-0 w-full h-full z-20 overflow-hidden"
          style={{ clipPath: clipPathSecondToThird }}
        >
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="text-black text-[40px] font-bold leading-relaxed bg-white p-10  text-center">
              <div>
                SM Entertainment는 1995년 설립 이후
                <img
                  src="/sec3_01.png"
                  className="inline-block w-24 h-8 ml-2 mr-2 mb-2"
                />
              </div>
              <div>K-POP을 선도하며 글로벌 시장을 개척해왔습니다.</div>
              <div>
                최고의 인재와 퍼포먼스로 세계에
                <img
                  src="/sec3_02.png"
                  className="inline-block w-24 h-8 ml-2 mr-2 mb-2"
                />
                '한류'를 알리며
              </div>
              <div>
                <img
                  src="/sec3_03.png"
                  className="inline-block w-16 h-16 mr-2"
                />
                글로벌 1등 기업으로 도약하겠습니다.
              </div>
            </div>
          </div>
        </motion.div>*/}



      </div>
    </section>
  )
}
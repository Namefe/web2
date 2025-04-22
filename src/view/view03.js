import React from 'react'

const View03 = () => {
  return (
    <>
        <div
  className="sec4bg w-full h-full text-black font-bold"
  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/sec3_bg.png)` }}
>
  <section>
    <div className="m-32 text-[20px] leading-relaxed text-center">
      <span className="text-justify 2xl:text-[55px]">
        SM Entertainment는 1995년 설립 이후
        <img
          src={`${process.env.PUBLIC_URL}/sec3_01.png`}
          alt="icon1"
          className="inline w-21 h-6 2xl:w-40 2xl:h-14 align-middle mx-1"
        />
        <br/>K-POP을 선도하며 글로벌 시장을 개척해왔습니다.<br/> 최고의 인재와 퍼포먼스로 세계에
        <img
          src={`${process.env.PUBLIC_URL}/sec3_02.png`}
          alt="icon2"
          className="inline w-21 h-6 2xl:w-40 2xl:h-14 align-middle mx-1"
        />
        ‘한류’를 알리며
        <img
          src={`${process.env.PUBLIC_URL}/sec3_03.png`}
          alt="icon3"
          className="inline w-12 h-12 2xl:w-20 2xl:h-20 align-middle mx-1"
        />
        글로벌 1등 기업으로 도약하겠습니다.
      </span>
    </div>
  </section>
</div>
    </>
  )
}

export default View03
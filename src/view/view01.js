import React from 'react'

const View01 = () => {
  return (
    <section className='relative w-full h-screen bg-black  overflow-hidden'>
    <div className='sec1_img w-full h-screen relative  z-10'>
      <div className='img1'>
      <img className='inline-block relative z-50'  src={process.env.PUBLIC_URL + '/1.png'} />
      <div className='backdrop-blur-md w-[160px] h-[750px] inline-block absolute top-[-45px] right-[230px]  rotate-[319deg]'
      style={{ borderRadius: '50px 0 110px 80px' }}></div>
      </div>
      <div className='img2 '>
      <img className='relative z-10' src={process.env.PUBLIC_URL + '/2.png'} />
      <div className=' backdrop-blur-md w-[400px] h-[120px] sm:w-[550px] sm:h-[170px] inline-block absolute top-[135px] left-[165px] rotate-[23deg]'
      style={{ borderRadius: '100px' }}></div>
      </div>
      <img className='img3' src={process.env.PUBLIC_URL + '/3.png'} />
      <img className='img4' src={process.env.PUBLIC_URL + '/4.png'} />
      <img className='img5' src={process.env.PUBLIC_URL + '/5.png'} />
      <img className='img6' src={process.env.PUBLIC_URL + '/6.png'} />
    </div>
    <div className=" text-center absolute top-[350px] left-[80px] font-bold text-white  sm:top-[400px] sm:left-[150px]">
      <div className="text-[44px] sm:text-[152px] font-sans">THE <span className='font-serif'>CUL</span>TURE,</div>
      <div className="text-[44px] sm:text-[152px] font-sans">THE <span className='font-serif'>FU</span>TURE</div>
    </div>

    <div>
      <div className="absolute bottom-4 left-4 text-xs sm:text-[12px] text-white hidden 2xl:block">Introduction</div>
      <div className="scroll hover:cursor-pointer">
        <img className="cursor-pointer pointer-events-auto w-8 sm:w-12 " src={process.env.PUBLIC_URL + '/scroll.png'} />
      </div>
      <div className="absolute text-white bottom-[420px] right-[150px] sm:bottom-[30px] sm:right-[50px] text-xs sm:text-base font-medium z-30">
        <span className="opacity-90 text-[20px] sm:text-[50px]">We invest in the future.</span>
      </div>
    </div>

    <div className="fixed bottom-4 right-4  border border-white/50 rounded-full hover:cursor-pointer w-[40px] h-[40px] sm:w-[72px] sm:h-[72px]  z-10" style={{ backdropFilter: 'blur(3.86px)' }}>
      <img onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} src={process.env.PUBLIC_URL + '/top.png'} alt="top" className="w-full h-full scale-75 relative top-[-4px]"/>
    </div>

    <div>
      <div className="sm:block hidden absolute top-0 bottom-0 left-[140px] w-px line1" ></div>
      <div className="sm:block hidden absolute top-0 bottom-0 right-[140px] w-px line1" ></div>
     <div className="absolute left-0 right-0 bottom-[90px] h-px line2"></div>
    </div>
    </section>
  )
}

export default View01;
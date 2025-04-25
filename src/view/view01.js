import React from 'react'

const View01 = () => {
  return (
    <section className='relative w-full h-screen bg-black text-white overflow-hidden'>
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
    <div className=" absolute top-[280px] left-[70px] sm:top-[400px] sm:left-[150px]">
      <div className="text-[50px] sm:text-[150px]">THE CULTURE,</div>
      <div className="text-[50px] sm:text-[150px]">THE FUTURE</div>
    </div>

    <div>
      <div className="absolute bottom-4 left-4 text-xs sm:text-base font-medium hidden 2xl:block">Introduction</div>
      <div className="scroll hover:cursor-pointer">
        <img className="cursor-pointer pointer-events-auto w-8 sm:w-12 " src={process.env.PUBLIC_URL + '/scroll.png'} />
      </div>
      <div className="absolute bottom-[350px] right-[90px] sm:bottom-[30px] sm:right-[50px] text-xs sm:text-base font-medium z-30">
        <span className="opacity-90 text-[30px] sm:text-[35px]">We invest in the future.</span>
      </div>
    </div>

    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 border border-white/50 rounded-full hover:cursor-pointer w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] z-10" style={{ backdropFilter: 'blur(2px)' }}>
      <img onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} src={process.env.PUBLIC_URL + '/top.png'} alt="top" className="w-full h-full"/>
    </div>

    <div className=" w-full h-screen">
      <div className="sm:block hidden absolute top-0 bottom-0 left-[140px] w-px bg-white/20"></div>
      <div className="sm:block hidden absolute top-0 bottom-0 right-[140px] w-px bg-white/20"></div>
     <div className="absolute left-0 right-0 bottom-[90px] h-px bg-white/20"></div>
    </div>
    </section>
  )
}

export default View01;
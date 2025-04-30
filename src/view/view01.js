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
    <div className=" text-center absolute top-[300px] left-[80px] font-bold text-white sm:left-[130px]  lg:top-[300px] lg:left-[150px]">
      <div className="text-[44px] sm:text-[60px] lg:text-[100px] xl:text-[152px] font-sans">THE <span className='font-serif'>CUL</span>TURE,</div>
      <div className="text-[44px] sm:text-[60px] lg:text-[100px] xl:text-[152px] font-sans">THE <span className='font-serif'>FU</span>TURE</div>
    </div>

    <div>
      <div className="absolute bottom-[150px] left-4 text-xs sm:text-[12px] text-white hidden 2xl:block">Introduction</div>
      <div className="scroll hover:cursor-pointer">
        <img className="cursor-pointer pointer-events-auto w-8 sm:w-12 " src={process.env.PUBLIC_URL + '/scroll.png'} />
      </div>
      <div className="absolute text-white bottom-[250px] right-[150px] sm:bottom-[180px] sm:right-[180px] lg:bottom-[130px] lg:right-[50px] text-xs sm:text-base font-medium z-30">
        <span className="opacity-90 text-[20px] sm:text-[30px] xl:text-[50px]">We invest in the future.</span>
      </div>
    </div>

    <div className="fixed bottom-4 right-4  border border-white/50 rounded-full hover:cursor-pointer w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[72px] lg:h-[72px]  z-10" style={{ backdropFilter: 'blur(3.86px)', zIndex: '9999' }}>
      <img onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} src={process.env.PUBLIC_URL + '/top.png'} alt="top" className="w-full h-full scale-75 relative top-[-4px]"/>
    </div>

    <div>
      <div className="lg:block hidden absolute top-0 bottom-0 left-[140px] w-px line1" ></div>
      <div className="lg:block hidden absolute top-0 bottom-0 right-[140px] w-px line1" ></div>
     <div className="absolute left-0 right-0 bottom-[200px] h-px line2"></div>
    </div>
    </section>
  )
}

export default View01;
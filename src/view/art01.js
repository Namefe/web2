import React from 'react'

const Art01 = () => {
  return (
    <div className='relative w-screen h-full text-white bg-black '>
        <img src={process.env.PUBLIC_URL + '/artist-bg.png'}/>
    <div className="fixed bottom-4 right-4  border border-white/50 rounded-full hover:cursor-pointer w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[72px] lg:h-[72px]  z-10" style={{ backdropFilter: 'blur(3.86px)', zIndex: '9999' }}>
      <img onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} src={process.env.PUBLIC_URL + '/top.png'} alt="top" className="w-full h-full scale-75 relative top-[-4px]"/>
    </div>
    <div className="w-[100px] h-[100px] mx-auto flex justify-center items-center">
  <img
    src={process.env.PUBLIC_URL + '/play.png'}
    alt="play"
    className="transition-opacity duration-300 opacity-100 hover:opacity-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
  />
  <img
    src={process.env.PUBLIC_URL + '/hoverplay.png'}
    alt="play-hover"
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300"
  />
</div>
    <div>
    <div>
      <div className="absolute bottom-[150px] left-4 text-xs sm:text-[12px] text-white hidden 2xl:block">Introduction</div>
      <div className="scroll hover:cursor-pointer">
        <img className="cursor-pointer pointer-events-auto w-8 sm:w-12 " src={process.env.PUBLIC_URL + '/scroll.png'} />
      </div>
      <div className="absolute text-white bottom-[250px] right-[150px] sm:bottom-[180px] sm:right-[180px] lg:bottom-[130px] lg:right-[50px] text-xs sm:text-base font-medium z-30">
        <span className="opacity-90 text-[20px] sm:text-[30px] xl:text-[50px]">THE 5TH ALBUM</span>
      </div>
    </div>
      <div className="lg:block hidden absolute top-0 bottom-0 left-[140px] w-px line1" ></div>
      <div className="lg:block hidden absolute top-0 bottom-0 right-[140px] w-px line1" ></div>
     <div className="absolute left-0 right-0 bottom-[200px] h-px line2"></div>
    </div>
    </div>
  )
}

export default Art01
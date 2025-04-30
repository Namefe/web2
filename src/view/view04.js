import React from 'react'

const View04 = () => {
  return (
    
     <section className="relative sec4bg w-full text-white  bg-cover bg-center">
    <video
    autoPlay
    muted
    loop
    className="sticky top-0 left-0 w-full h-screen object-cover z-[-1]"
  >
    <source src={process.env.PUBLIC_URL + "/BackgroundVideo.mp4"} type="video/mp4" />
  </video>

        <div className='relative h-[500vh]'>
          <div className='sec5txt flex flex-col justify-center items-center w-full h-[100vh]  mix-blend-difference relative z-30'>
            <div className='text-[14px] lg:text-2xl xl:text-[31px] xl:m-4'>SM Entertainment는</div>
            <div className='text-[22px] font-bold lg:text-2xl xl:text-[52px]'>K-Culture의 미래를 설계합니다.</div>
            </div>
            <div className='sec5 '>
            <img className='sec5img1 w-1/3 h-auto object-contain' src={process.env.PUBLIC_URL + '/sec4_01.png'}></img>
            <img className='sec5img2 w-1/3 h-auto object-contain' src={process.env.PUBLIC_URL + '/sec4_02.png'}></img>
            <img className='sec5img3 w-1/3 h-auto object-contain' src={process.env.PUBLIC_URL + '/sec4_03.png'}></img>
            <img className='sec5img4 w-1/3 h-auto object-contain' src={process.env.PUBLIC_URL + '/sec4_04.png'}></img>
            <img className='sec5img5 w-1/3 h-auto object-contain' src={process.env.PUBLIC_URL + '/sec4_05.png'}></img>
            <img className='sec5img6 w-1/3 h-auto object-contain' src={process.env.PUBLIC_URL + '/sec4_06.png'}></img>
            <img className='sec5img7 w-1/2 h-auto object-contain' src={process.env.PUBLIC_URL + '/sec4_07.png'}></img>
            </div>
            </div>
      </section>
    
  )
}

export default View04
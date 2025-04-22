import React from 'react'

const View04 = () => {
  return (
    <>
     <section className="relative sec4bg w-auto text-white  bg-contain">
    <video
    autoPlay
    muted
    loop
    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
  >
    <source src={process.env.PUBLIC_URL + "/BackgroundVideo.mp4"} type="video/mp4" />
  </video>

        <div className='relative h-[500vh]'>
          <div className='sec5txt flex flex-col  justify-center items-center h-[100vh]'>
            <div className='text-[20px] lg:text-2xl xl:text-[30px] xl:m-4'>SM Entertainment는</div>
            <div className='text-[25px] font-bold lg:text-2xl xl:text-[60px]'>K-Culture의 미래를 설계합니다.</div>
            </div>
            <div className='sec5 mix-blend-screen'>
            <img className='sec5img1 w-1/3 h-auto object-contain' src={process.env.PUBLIC_URL + '/sec4_01.png'}></img>
            <img className='sec5img2 w-1/3 h-auto object-contain' src={process.env.PUBLIC_URL + '/sec4_03.png'}></img>
            <img className='sec5img3 w-1/3 h-auto object-contain' src={process.env.PUBLIC_URL + '/sec4_01.png'}></img>
            <img className='sec5img4 w-1/3 h-auto object-contain' src={process.env.PUBLIC_URL + '/sec4_03.png'}></img>
            <img className='sec5img5 w-1/3 h-auto object-contain' src={process.env.PUBLIC_URL + '/sec4_01.png'}></img>
            <img className='sec5img6 w-1/3 h-auto object-contain' src={process.env.PUBLIC_URL + '/sec4_03.png'}></img>
            <img className='sec5img7 w-1/2 h-auto object-contain' src={process.env.PUBLIC_URL + '/sec4_02.png'}></img>
            </div>
            </div>
      </section>
    </>
  )
}

export default View04
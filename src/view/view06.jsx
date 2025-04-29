import React from 'react'

const View06 = () => {
  return (
    <>
        <section className="inline-block w-full min-h-screen px-10 py-12 text-black ">
          <div className='sec7txt text-[32px] sm:text-[80px] font-bold'>
            <div className='text-pink-400 inline-block font-bold'>SM</div>
            ENTERTAINMENT CONNECTS FANS AND ARTIST            
              <img className='inline-block relative left-[4px] top-[-4px]' src={process.env.PUBLIC_URL + '/sec5_01.png'}/>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="relative col-span-2  group hover: cursor-pointer">
                <img className='w-full h-full object-cover' src={process.env.PUBLIC_URL + '/sec7_01.png'}/>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className='inline-block text-white  text-[20px] sm:text-[36px] group'>
                    <span className="inline-block relative font-bold">SMTOWN
                    <span className="absolute left-0 -bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </div>
                  <img className='inline-block relative top-[-4px] sm:top-[-13px] sm:left-[6px] scale-75  sm:scale-110 ' src={process.env.PUBLIC_URL + '/화살표.png'}/>
                
                <div className=' block text-white text-[20px] sm:text-[36px] group'>
                  <span className="inline-block relative font-bold">GOODS&ITEMS 
                  <span className="absolute left-0 -bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  </div>
                <div className='text-white text-[14px] sm:text-[16px] '>SM TOWN에서 팔로우하는 아티스트의 최신 굿즈와 앨범 등 다양한 아이템들을 한번에 만나보세요.</div>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-center ">
              <div className='relative  group hover: cursor-pointer'>
              <img className='w-full h-full object-cover' src={process.env.PUBLIC_URL + '/sec7_02bg.png'}/>
                  <img className='sec7_01 absolute right-4 top-[-100px] w-[300px] h-[300px]' src={process.env.PUBLIC_URL + '/sec7_02_1.png'}/>
                  <img className='sec7_02 absolute left-[200px] top-[0px] w-[100px] h-[100px]' src={process.env.PUBLIC_URL + '/sec7_02_2.png'}/>
                <div className='absolute bottom-4 left-4 text-white'>
                  <div className='inline-block  group'>
                    <span className="inline-block relative text-[20px] sm:text-[40px] font-bold">KWANGYA 119
                    <span className="absolute left-0 -bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span></div>
                  <img className='inline-block relative top-[-4px] sm:top-[-13px] sm:left-[4px] scale-75' src={process.env.PUBLIC_URL + '/화살표.png'}/>
                  <div className='text-[14px] sm:text-[16px]'>아티스트의 활동을 위한 제보는 광야 119로 문의해주세요.</div>
                </div>
              </div>
              <div className='relative   group hover: cursor-pointer'>
                <img className='w-full h-full object-cover' src={process.env.PUBLIC_URL + '/sec7_03.png'}/>
                  <div className='absolute bottom-4 left-4 text-white '>
                  <div className='inline-block  group'>
                    <span className="inline-block relative text-[20px] sm:text-[40px] font-bold">SMTOWN 30
                    <span className="absolute left-0 -bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span></div>
                    <img className='inline-block relative top-[-4px] sm:top-[-13px] sm:left-[4px] scale-75 ' src={process.env.PUBLIC_URL + '/화살표.png'}/>
                    <div className='text-[14px] sm:text-[16px]'>SM TOWN의 30주년 이벤트를 체험해보세요.</div>
                  </div>
              </div>
              </div>
            </div>

      </section>
    </>
  )
}

export default View06
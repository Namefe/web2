import React from 'react'

const View06 = () => {
  return (
    <>
        <section className="inline-block w-full min-h-screen px-10 py-12 text-black font-bold">
          <div className='sec7txt text-[40px] sm:text-[50px]'>
            <div className='text-pink-400 inline-block '>SM</div>
            ENTERTAINMENT CONNECTS<br/> FANS AND ARTIST            
              <img className='inline-block w-16' src={process.env.PUBLIC_URL + '/sec5_01.png'}/>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-2">
              <div className="relative col-span-2 h-[516px] group hover: cursor-pointer">
                <img className='w-full h-full object-cover' src={process.env.PUBLIC_URL + '/sec7_01.png'}/>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className='inline-block text-white  text-[30px] sm:text-[40px] group'>
                    <span className="inline-block relative">SMTOWN
                    <span className="absolute left-0 -bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </div>
                  <img className='inline-block ml-2' src={process.env.PUBLIC_URL + '/화살표.png'}/>
                
                <div className=' block text-white text-[30px] sm:text-[40px] group'>
                  <span className="inline-block relative">GOODS&ITEMS 
                  <span className="absolute left-0 -bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  </div>
                <div className='text-white '>SM TOWN에서 팔로우하는 아티스트의 최신 굿즈와 앨범 등 다양한 아이템들을 한번에 만나보세요.</div>
                </div>
              </div>
              <div className="flex flex-col gap-4 ">
              <div className='relative h-[250px]  group hover: cursor-pointer'>
              <img className='w-full h-full object-cover' src={process.env.PUBLIC_URL + '/sec7_02bg.png'}/>
                  <img className='sec7_01 absolute right-4 top-[-100px] w-[300px] h-[300px]' src={process.env.PUBLIC_URL + '/sec7_02_1.png'}/>
                  <img className='sec7_02 absolute left-[200px] top-[0px] w-[100px] h-[100px]' src={process.env.PUBLIC_URL + '/sec7_02_2.png'}/>
                <div className='absolute bottom-4 left-4 text-white'>
                  <div className='inline-block  group'>
                    <span className="inline-block relative text-[30px] sm:text-[40px]">KWANGYA 119
                    <span className="absolute left-0 -bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span></div>
                  <img className='inline-block' src={process.env.PUBLIC_URL + '/화살표.png'}/>
                  <div className='text-sm'>아티스트의 활동을 위한 제보는 광야 119로 문의해주세요.</div>
                </div>
              </div>
              <div className='relative h-[250px] group hover: cursor-pointer'>
                <img className='w-full h-full object-cover' src={process.env.PUBLIC_URL + '/sec7_03.png'}/>
                  <div className='absolute bottom-4 left-4 text-white '>
                  <div className='inline-block  group'>
                    <span className="inline-block relative text-[30px] sm:text-[40px]">SMTOWN 30
                    <span className="absolute left-0 -bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span></div>
                    <img className='inline-block' src={process.env.PUBLIC_URL + '/화살표.png'}/>
                    <div className='text-sm'>SM TOWN의 30주년을 맞이하여 준비한 이벤트를 체험해보세요.</div>
                  </div>
              </div>
              </div>
            </div>

      </section>
    </>
  )
}

export default View06
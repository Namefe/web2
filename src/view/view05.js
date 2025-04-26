import React from 'react'

const View05 = () => {


      const imageList = [
        "sm6.png", "sm12.png", "sm8.png", "sm9.png",
        "sm7.png", "sm1.png", "sm10.png", "sm11.png",
        "sm2.png", "sm3.png", "sm4.png", "sm5.png"
      ];
  return (
    <>
        <section  className="pc hidden md:block w-full bg-black text-white  px-0 py-12 z-20">
  <div className="text-center mb-12 py-10">
    <div className="text-4xl inline-block mr-2 text-pink-300">SM</div>
    <div className="text-4xl inline-block font-bold">ARTISTS</div>
    <div className="text-sm mt-4 font-bold">SM의 빛나는 성장을 함께한 주요 아티스트</div>
  </div>
  <div className="grid grid-cols-12 gap-0  inline-block overflow-hidden"> 
    <div className="col-span-8 object-cover w-full transition duration-300 group-hover:brightness-50 relative group overflow-hidden">
    <img src={process.env.PUBLIC_URL + '/sm6.png'} className="col-span-8 object-cover w-full h-auto transition duration-300 group-hover:brightness-50 group-hover:scale-105"/>
    <div style={{ cursor: "url('/hover.png') 0 0, auto" }} className=" absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
    <a className="text-white iniline-block  text-[30px]">VIEW MUSIC VIDEO <img className='inline-block mb-3' src={`${process.env.PUBLIC_URL}/hoverimg.png`}/></a>
  </div>
  </div>
  <div className="self-end col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 relative group overflow-hidden">
    <img src={process.env.PUBLIC_URL + '/sm12.png'} className="block col-span-4  w-full self-end transition duration-300 group-hover:brightness-50 group-hover:scale-105"/>
    <div style={{ cursor: "url('/hover.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
    <a className="text-white iniline-block   text-[30px]">VIEW MUSIC VIDEO <img className='inline-block mb-3' src={`${process.env.PUBLIC_URL}/hoverimg.png`}/></a>
  </div>
    </div>
    <div className="col-span-4" />
    <div className=" col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 relative group overflow-hidden">
    <img src={process.env.PUBLIC_URL + '/sm8.png'} className="block col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
    <div style={{ cursor: "url('/hover.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
    <a className="text-white iniline-block   text-[30px]">VIEW MUSIC VIDEO <img className='inline-block mb-3' src={`${process.env.PUBLIC_URL}/hoverimg.png`}/></a>
    </div>
    </div>
    <div className=" col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 relative group overflow-hidden">
    <img src={process.env.PUBLIC_URL + '/sm9.png'} className="block col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
    <div style={{ cursor: "url('/hover.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
    <a className="text-white iniline-block  text-[30px]">VIEW MUSIC VIDEO <img className='inline-block mb-3' src={`${process.env.PUBLIC_URL}/hoverimg.png`}/></a>
    </div>
    </div>
    <div className='col-span-4 w-full'>
    <div className=" col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 relative group overflow-hidden">
    <img src={process.env.PUBLIC_URL + '/sm7.png'} className="block col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
    <div style={{ cursor: "url('/hover.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
    <a className="text-white iniline-block  text-[30px]">VIEW MUSIC VIDEO <img className='inline-block mb-3' src={`${process.env.PUBLIC_URL}/hoverimg.png`}/></a>
    </div>
    </div>
    <div className=" col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 relative group overflow-hidden">
    <img src={process.env.PUBLIC_URL + '/sm1.png'} className="block col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
    <div style={{ cursor: "url('/hover.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
    <a className="text-white iniline-block text-[30px]">VIEW MUSIC VIDEO <img className='inline-block mb-3' src={`${process.env.PUBLIC_URL}/hoverimg.png`}/></a>
    </div>
    </div>
    </div>
    <div className='col-span-8'>
    <div className=" col-span-8 object-cover w-full transition duration-300 group-hover:brightness-50 relative group overflow-hidden">
    <img src={process.env.PUBLIC_URL + '/sm10.png'} className="block col-span-8 object-cover w-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
    <div style={{ cursor: "url('/hover.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
    <a className="text-white iniline-block  text-[30px]">VIEW MUSIC VIDEO <img className='inline-block mb-3' src={`${process.env.PUBLIC_URL}/hoverimg.png`}/></a>
    </div>
    </div>
    <div className="self-start w-1/2 object-cover transition duration-300 group-hover:brightness-50 relative group overflow-hidden">
    <img src={process.env.PUBLIC_URL + '/sm11.png'} className="self-start w-1/2 block col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
    <div style={{ cursor: "url('/hover.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
    <a className="text-white iniline-block   text-[30px]">VIEW MUSIC VIDEO <img className='inline-block mb-3' src={`${process.env.PUBLIC_URL}/hoverimg.png`}/></a>
    </div>
    </div>
    </div>
    <div className=" col-span-8 object-cover w-full h-256 transition duration-300 group-hover:brightness-50 relative group overflow-hidden">
    <img src={process.env.PUBLIC_URL + '/sm2.png'} className="block col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
    <div style={{ cursor: "url('/hover.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
    <a className="text-white iniline-block   text-[30px]">VIEW MUSIC VIDEO <img className='inline-block mb-3' src={`${process.env.PUBLIC_URL}/hoverimg.png`}/></a>
    </div>
    </div>
    <div className=" col-span-4 object-cover w-full h-128 transition duration-300 group-hover:brightness-50 relative group overflow-hidden">
    <img src={process.env.PUBLIC_URL + '/sm3.png'} className="block col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
    <div style={{ cursor: "url('/hover.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
    <a className="text-white iniline-block   text-[30px]">VIEW MUSIC VIDEO <img className='inline-block mb-3' src={`${process.env.PUBLIC_URL}/hoverimg.png`}/></a>
    </div>
    </div>
    <div className=" col-span-4 object-cover w-full h-256 transition duration-300 group-hover:brightness-50 relative group overflow-hidden">
    <img src={process.env.PUBLIC_URL + '/sm4.png'} className="block col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
    <div style={{ cursor: "url('/hover.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
    <a className="text-white iniline-block  text-[30px]">VIEW MUSIC VIDEO <img className='inline-block mb-3' src={`${process.env.PUBLIC_URL}/hoverimg.png`}/></a>
    </div>
    </div>
    <div className=" col-span-4 object-cover w-full h-256 transition duration-300 group-hover:brightness-50 relative group overflow-hidden">
    <img src={process.env.PUBLIC_URL + '/sm5.png'} className="block object-cover w-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
    <div style={{ cursor: "url('/hover.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
    <a className="text-white iniline-block  text-[30px]">VIEW MUSIC VIDEO <img className='inline-block mb-3' src={`${process.env.PUBLIC_URL}/hoverimg.png`}/></a>
    </div>
    </div>
    <div className="inline-block text-center mt-24 text-[50px] text-white opacity-80 col-span-4">
    Who's next?
  </div>
  </div>
</section>
{/*SECTION6 PC 끝 */}

{/* <section className='overflow-hidden'>
    <div className='flex'>1섹션 : 이미지 3개씩</div>
    <div>2섹션</div>
    <div>3섹션</div>

</section> */}


<section className="block md:hidden w-full bg-black text-white font-bold px-2 py-8">
  <div className="text-center mb-8">
    <div className="text-3xl inline-block mr-2 text-pink-300">SM</div>
    <div className="text-3xl inline-block">ARTISTS</div>
    <div className="text-xs mt-2">SM의 빛나는 성장을 함께한 주요 아티스트</div>
  </div>
  <div className='w-full bg-black px-0'>
  <div className="grid grid-cols-4 gap-4 w-full">
    {imageList.map((img, idx) => (
      <div key={img} className=" w-full overflow-hidden ">
        <img
          src={`${process.env.PUBLIC_URL}/${img}`}
          alt={img}
          className="w-full h-60 object-cover"
        />
      </div>
    ))}
  </div>
  </div>
</section>
    </>
  )
}

export default View05
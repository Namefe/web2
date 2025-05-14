import { useEffect, useRef } from 'react';


const View05 = () => {
  const rowsRef = useRef([]);

  useEffect(() => {
    rowsRef.current.forEach((row) => {
      if (!row) return;

      const onWheel = (e) => {
        // 수직 스크롤을 가로로 대체
        e.preventDefault();
        row.scrollLeft += e.deltaY;
      };

      row.addEventListener("wheel", onWheel, { passive: false });

      return () => row.removeEventListener("wheel", onWheel);
    });
  }, []);




  return (
    <>
    <section  className="pc hidden md:block w-full bg-black text-white  px-0 py-12 z-20">
  <div className="text-center font-bold mb-12 py-10">
    <div className="sm:text-[60px] inline-block mr-2 text-pink-300">SM</div>
    <div className="sm:text-[60px] inline-block ">ARTISTS</div>
    <div className="sm:text-[24px] mt-4 ">SM의 빛나는 성장을 함께한 주요 아티스트</div>
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
    <img src={process.env.PUBLIC_URL + '/sm11.png'} className="self-start  block col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
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
    <div className="flex justify-center items-center  col-span-4">
    <img src={process.env.PUBLIC_URL + '/next.png'} />
  </div>
  </div>
</section>
{/*SECTION6 PC 끝 */}

{/* <section className='overflow-hidden'>
    <div className='flex'>1섹션 : 이미지 3개씩</div>
    <div>2섹션</div>
    <div>3섹션</div>

</section> */}


<section className="block md:hidden bg-black text-white font-bold py-8">
  <div className="text-center mb-8">
    <div className="text-[36px] text-pink-300 inline-block mr-2">SM</div>
    <div className="text-[36px] inline-block">ARTISTS</div>
    <div className="text-[14px] mt-2">SM의 빛나는 성장을 함께한 주요 아티스트</div>
  </div>

  {/* 각 줄을 별도로 스크롤 가능하게 */}
  <div className="space-y-6 px-4">
    {/* 첫 번째 줄 */}
    <div
    ref={(el) => (rowsRef.current[0] = el)}
    className="overflow-x-auto no-scrollbar flex gap-4 transform -translate-x-[100px] whitespace-nowrap">
      <img src={`${process.env.PUBLIC_URL}/sm12.png`} className="w-[250px] h-[140px] flex-none object-cover" />
      <img src={`${process.env.PUBLIC_URL}/sm10.png`} className="w-[250px] h-[140px] flex-none object-cover" />
      <img src={`${process.env.PUBLIC_URL}/sm9.png`} className="w-[250px] h-[140px] flex-none object-cover" />
      <img src={`${process.env.PUBLIC_URL}/sm6.png`} className="w-[250px] h-[140px] flex-none object-cover" />
    </div>

    {/* 두 번째 줄 */}
    <div
    ref={(el) => (rowsRef.current[1] = el)}
    className="overflow-x-auto no-scrollbar flex gap-4 flex-row-reverse">
      <img src={`${process.env.PUBLIC_URL}/sm1.png`} className="w-[250px] h-[140px] flex-none object-cover" />
      <img src={`${process.env.PUBLIC_URL}/sm7.png`} className="w-[250px] h-[140px] flex-none object-cover" />
      <img src={`${process.env.PUBLIC_URL}/sm8.png`} className="w-[250px] h-[140px] flex-none object-cover" />
      <img src={`${process.env.PUBLIC_URL}/sm3.png`} className="w-[250px] h-[140px] flex-none object-cover" />
    </div>

    {/* 세 번째 줄 */}
    <div
    ref={(el) => (rowsRef.current[2] = el)}
    className="overflow-x-auto no-scrollbar flex gap-4">
      <img src={`${process.env.PUBLIC_URL}/sm2.png`} className="w-[250px] h-[140px] flex-none object-cover" />
      <img src={`${process.env.PUBLIC_URL}/sm5.png`} className="w-[250px] h-[140px] flex-none object-cover" />
      <img src={`${process.env.PUBLIC_URL}/sm4.png`} className="w-[250px] h-[140px] flex-none object-cover" />
      <img src={`${process.env.PUBLIC_URL}/sm11.png`} className="w-[250px] h-[140px] flex-none object-cover" />
    </div>
  </div>
</section>

    </>
  )
}

export default View05
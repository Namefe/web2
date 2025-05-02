import React, { useRef } from 'react';

const Art03 = () => {
  const scrollRefs = {
    discography: useRef(null),
    items: useRef(null),
    events: useRef(null),
  };

  const handleWheel = (ref) => (e) => {
    if (ref.current) {
      e.preventDefault();
      ref.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="bg-black text-white w-full h-full pt-10 pl-[20px] pb-[50px] lg:pl-[190px] space-y-20">
      <section className="relative overflow-hidden">
        <div className="lg:block hidden absolute top-0 left-0 h-full w-[0.5px] bg-gradient-to-b from-white to-gray-500"></div>
        <div className="lg:ml-[100px]">
          <div className=" text-[36px] lg:text-[24px] font-bold mb-[30px]">DISCOGRAPHY</div>
          <div
            ref={scrollRefs.discography}
            onWheel={handleWheel(scrollRefs.discography)}
            className="flex gap-[60px] overflow-x-hidden overflow-y-hidden pb-4 w-full"
          >
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex-none">
                <img
                  className="w-[211px] sm:w-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  src={process.env.PUBLIC_URL + `/artsec3_0${num}.png`}
                  alt={`disc-${num}`}
                />
                <div>
                  <div className="font-bold text-[20px]">Whiplash</div>
                  <div className="text-[14px] lg:text-[12px] text-white opacity-50">The 5th mini album</div>
                  <div className="text-[14px] lg:text-[12px] text-white opacity-50">2024.10.21</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-2 lg:px-10">
        <div className="lg:text-[24px] text-[36px] font-bold mb-[30px]">SELECTED ITEMS</div>
        <div
          ref={scrollRefs.items}
          onWheel={handleWheel(scrollRefs.items)}
          className="flex lg:gap-8 gap-4 overflow-x-hidden overflow-y-hidden pb-4 w-full"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="flex-none">
              <img src={process.env.PUBLIC_URL + `/artsec4_0${num}.png`} alt={`item-${num}`}
              className='w-[134px] h-[190px] sm:w-[340px] sm:h-[463px]' />
              <div>
                <div className="font-bold text-[20px]">Whiplash</div>
                <div className="text-[14px] lg:text-[12px] font-white opacity-50">The 5th mini album</div>
                <div className="text-[14px] lg:text-[12px] font-white opacity-50">2024.10.21</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-2 lg:px-10">
        <div className="lg:text-[24px] text-[36px] font-bold mb-[30px]">EVENTS</div>
        <div
          ref={scrollRefs.events}
          onWheel={handleWheel(scrollRefs.events)}
          className="flex lg:gap-8 gap-4 overflow-x-hidden overflow-y-hidden pb-4 w-full"
        >
          {[1, 2, 3].map((num, i) => {
            const titles = ['광야로 쓱-걸어가', '1ST ANNIVERSARY', 'BUBBLE POP'];
            const desc = ['KWANGYA X SSG.COM', 'SM TOWN', 'SM TOWN'];
            return (
              <div key={num} className="flex-none">
                <img src={process.env.PUBLIC_URL + `/artsec5_0${num}.png`} alt={`event-${num}`} 
                className='w-[290px] h-[185px] sm:w-[710px] sm:h-[453px]'/>
                <div>
                  <div className="font-bold text-[20px]">{titles[i]}</div>
                  <div className="text-[12px] font-white opacity-50">{desc[i]}</div>
                  <div className="text-[12px] font-white opacity-50">2024.10.21~2024.11.21</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Art03;
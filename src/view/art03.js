import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';

const Art03 = () => {
  return (
    <div className="bg-black text-white w-full h-full pt-10 pl-[20px] pb-[50px] lg:pl-[190px] space-y-20">
      
      {/* DISCOGRAPHY */}
      <section className="relative overflow-hidden">
        <div className="lg:block hidden absolute top-0 left-0 h-full w-[0.5px] bg-gradient-to-b from-white to-gray-500"></div>
        <div className="lg:ml-[100px]">
          <div className="text-[36px] lg:text-[24px] font-bold mb-[30px]">DISCOGRAPHY</div>
          <Swiper
            modules={[FreeMode]}
            spaceBetween={60}
            slidesPerView="auto"
            freeMode={true}
            className="pb-4"
          >
            {[1, 2, 3].map((num) => (
              <SwiperSlide key={num} style={{ width: 'auto' }}>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* SELECTED ITEMS */}
      <section className="px-2 lg:px-10">
        <div className="lg:text-[24px] text-[36px] font-bold mb-[30px]">SELECTED ITEMS</div>
        <Swiper
          modules={[FreeMode]}
          spaceBetween={20}
          slidesPerView="auto"
          freeMode={true}
          className="pb-4"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <SwiperSlide key={num} style={{ width: 'auto' }}>
              <img
                src={process.env.PUBLIC_URL + `/artsec4_0${num}.png`}
                alt={`item-${num}`}
                className="w-[134px] h-[190px] sm:w-[340px] sm:h-[463px]"
              />
              <div>
                <div className="font-bold text-[20px]">Whiplash</div>
                <div className="text-[14px] lg:text-[12px] text-white opacity-50">The 5th mini album</div>
                <div className="text-[14px] lg:text-[12px] text-white opacity-50">2024.10.21</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* EVENTS */}
      <section className="px-2 lg:px-10">
        <div className="lg:text-[24px] text-[36px] font-bold mb-[30px]">EVENTS</div>
        <Swiper
          modules={[FreeMode]}
          spaceBetween={20}
          slidesPerView="auto"
          freeMode={true}
          className="pb-4"
        >
          {[1, 2, 3].map((num, i) => {
            const titles = ['광야로 쓱-걸어가', '1ST ANNIVERSARY', 'BUBBLE POP'];
            const desc = ['KWANGYA X SSG.COM', 'SM TOWN', 'SM TOWN'];
            return (
              <SwiperSlide key={num} style={{ width: 'auto' }}>
                <img
                  src={process.env.PUBLIC_URL + `/artsec5_0${num}.png`}
                  alt={`event-${num}`}
                  className="w-[290px] h-[185px] sm:w-[710px] sm:h-[453px]"
                />
                <div>
                  <div className="font-bold text-[20px]">{titles[i]}</div>
                  <div className="text-[12px] text-white opacity-50">{desc[i]}</div>
                  <div className="text-[12px] text-white opacity-50">2024.10.21~2024.11.21</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
};

export default Art03;
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { useRef } from "react";

const images = [
  { src: "/artsec6_01.png" },
  { src: "/artsec6_02.png" },
  { src: "/artsec6_03.png" },
  { src: "/artsec6_01.png" },
  { src: "/artsec6_02.png" },
  { src: "/artsec6_03.png" },
];

export default function SlideGallery() {
  const swiperRef = useRef(null);

  const nextSlide = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const prevSlide = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  return (
    <div className="relative bg-black w-full h-full text-white pt-20 pb-2 lg:py-40">
      <div className="text-center mb-6">
        <div className="text-pink-300 text-[40px] font-bold">
          UPCOMING <span className="text-white">PERFORMANCE</span>
        </div>
        <div className="text-[16px] text-gray opacity-80 mt-1">SM 엔터테인먼트의 공연일정을 확인해보세요.</div>
      </div>

      <div className="relative max-w-7xl mx-auto overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,1)_15%,transparent_50%,transparent_50%,rgba(0,0,0,1)_90%)]" />
        </div>

        {/* 버튼 */}
        <button onClick={prevSlide} className="absolute left-[50px] lg:left-2 top-1/2 -translate-y-1/2 z-20">
          <img src="/left.png" alt="prev" />
        </button>
        <div className="relative max-w-7xl mx-auto overflow-hidden flex justify-start pl-[100px]">
          <Swiper
            effect="coverflow"
            centeredSlides={true}
            slidesPerView={1}
            allowTouchMove={false}
            spaceBetween={5}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            modules={[EffectCoverflow]}
            className="max-w-7xl mx-auto"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx} className=" transition-transform duration-500">
                <img src={img.src} alt={`slide-${idx}`} className="w-[300px] h-auto object-cover " />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button onClick={nextSlide} className="absolute right-[50px] lg:right-2 top-1/2 -translate-y-1/2 z-20">
          <img src="/right.png" alt="next" />
        </button>
      </div>

      {/* 설명 영역 */}
      <div className="mt-10 pl-[50px] text-left max-w-2xl mb-[200px] mx-auto px-4">
        <div className="text-[20px] lg:text-[24px] font-bold mb-4">SMTOWN LIVE 2025</div>
        <div className="text-[14px] lg:text-[16px] text-white opacity-80 mb-8 leading-relaxed ">
          1995년 2월 14일 창립한 SM은 내년 30주년을 맞아 소속 아티스트들이 총출동하는 에스엠타운 라이브 콘서트, SM만의
          특별한 음악을 만날 수 있는 다채롭고 의미 있는 온·오프라인 프로젝트를 전개한다.
        </div>
        <div className="mb-8 ">
          <div className="text-[20px] lg:text-[24px] mb-4">공연일정</div>
          <div className="text-[14px] lg:text-[16px] text-white opacity-80">
            장소 - GOCHEOK SKY DOME / 일시 - 01.11 SAT ~ 01.12 SUN
          </div>
        </div>
        <div className="relative mt-12 w-full flex justify-center items-center">
          <button className="text-center w-full h-[60px] lg:w-[465px] lg:h-[56px] inline-flex justify-center items-center bg-gradient-to-r from-[#1C0C0A] to-[#09121D] gap-2 px-6 py-2 border border-gray-500 text-[14px]">
            공연 정보 더 보기
            <div className="pt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                <path d="M0.679688 1.08203L5.17962 5.08203L9.67969 1.08203" stroke="white" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

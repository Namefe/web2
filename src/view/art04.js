import React, { useState } from "react";

const images = [
  { src: "/artsec6_01.png" },
  { src: "/artsec6_02.png" },
  { src: "/artsec6_03.png" },
];

export default function SlideGallery() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getDisplayImages = () => {
    const prev = (index - 1 + images.length) % images.length;
    const next = (index + 1) % images.length;
    return [images[prev], images[index], images[next]];
  };

  const displayImages = getDisplayImages();

  return (
    <div className="relative bg-black w-full h-full text-white py-10 ">
      <div className="text-center mb-6">
        <div className="text-pink-300 text-[40px] font-bold">
          UPCOMING <span className="text-white">PERFORMANCE</span>
        </div>
        <div className="text-[16px] text-gray opacity-80 mt-1">
          SM 엔터테인먼트의 공연일정을 확인해보세요.
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto overflow-hidden">
        <button
          onClick={prevSlide}
          className="absolute left-[150px] lg:left-2 top-1/2 -translate-y-1/2 z-10"
        >
          <img src="/left.png" alt="prev" />
        </button>

        <div className="flex justify-center w-full h-full items-center gap-4 transition-all duration-500">
          {displayImages.map((img, idx) => {
            const isCenter = idx === 1; 

            return (
              <div
                key={idx}
                className={`transition-all duration-500 ${
                  isCenter
                    ? "scale-105 brightness-100" 
                    : "scale-90 brightness-50 opacity-80" 
                }`}
              >
                <img
                  src={img.src}
                  alt={`slide-${idx}`}
                  className="w-[300px] h-auto object-cover transition-all duration-500"
                />
              </div>
            );
          })}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-[150px] lg:right-2 top-1/2 -translate-y-1/2 z-10"
        >
          <img src="/right.png" alt="next" />
        </button>
      </div>

      <div className="mt-10 pl-[50px] text-left max-w-2xl mb-[200px] mx-auto px-4">
        <div className="text-[20px] lg:text-[24px] font-bold mb-4">SMTOWN LIVE 2025</div>
        <div className="text-[14px] lg:text-[16px] text-white opacity-80 mb-2 leading-relaxed ">
          1995년 2월 14일 창립한 SM은 내년 30주년을 맞아 소속 아티스트들이 총출동하는
          에스엠타운 라이브 콘서트, SM만의 특별한 음악을 만날 수 있는 다채롭고 의미 있는 온·오프라인 프로젝트를 전개한다.
        </div>
        <div className="mb-8 ">
          <div className="text-[20px] lg:text-[24px] ">공연일정</div>
          <div className="text-[14px] lg:text-[16px] text-white opacity-80">장소 - GOCHEOK SKY DOME / 일시 - 01.11 SAT ~ 01.12 SUN</div>
        </div>
        <div className="relative">
        <button className="absolute top-0 left-[50%] -translate-x-1/2  w-[260px] h-[60px] lg:w-[465px] lg:h-[56px] inline-flex justify-center items-center bg-gradient-to-r from-[#1C0C0A] to-[#09121D] gap-2 px-6 py-2 border border-gray-500 text-[14px]">
          공연 정보 더 보기
          <img
            src={process.env.PUBLIC_URL + "/down.png"}
            alt="More"
          />
        </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-gray-500 via-white to-gray-500" />
    </div>
  );
}
import React, { useState } from 'react';

const accordionData = [
  {
    title: 'aespa',
    subtitle: 'THE 5TH MINI ALBUM - WHIPLASH',
    image: '/artist-logo.png' ,
    content: (
        <div className="flex items-center bg-black text-white min-h-[300px] px-16 py-10 ">
        <div className="flex-shrink-0 w-[400px] text-center mr-16">
          <h1 className="text-[50px] font-bold">THE 5TH ALBUM</h1>
        </div>
        <div className="flex-1 text-base leading-relaxed">
          <p>
            10월 21일 발매된 에스파 다섯 번째 미니앨범 'Whiplash'는 공개 직후 각종 국내 주요 음악 차트 상위권으로 진입해 무서운 추이로 순위 상승에 시동을 걸고 있는 것은 물론, 아이튠즈 톱 앨범 차트에서 태국, 일본, 대만 등 총 17개 지역의 정상에 올랐으며, 월드와이드 아이튠즈 앨범 차트에서도 1위를 차지했다.
          </p>
          <p className="mt-4">
            이번 앨범은 중국 텐센트뮤직 산하 5개 음원 플랫폼 통합 K-POP 차트 1위, QQ뮤직·쿠고우뮤직 디지털 앨범 판매 차트 1위, 더블 플래티넘 인증을 획득했으며, 일본 AWA 실시간 차트·Mora 데일리 차트 1위에 오르며 글로벌 인기를 입증했다.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'RIIZE',
    subtitle: 'THE 1ST MINI ALBUM - RIIZING',
    image: '/artist-logo.png' ,
    content: (
        <div className="flex items-center bg-black text-white min-h-[300px] px-16 py-10 ">
        <div className="flex-shrink-0 w-[350px] text-center mr-16">
          <h1 className="text-[50px] font-bold">THE 1ST MINI ALBUM</h1>
        </div>
        <div className="flex-1 text-base leading-relaxed">
          <p>
            10월 21일 발매된 에스파 다섯 번째 미니앨범 ‘Whiplash’는 공개 직후 각종 국내 주요 음악 차트 상위권으로 진입해 무서운 추이로 순위 상승에 시동을 걸고 있는 것은 물론, 아이튠즈 톱 앨범 차트에서 태국, 일본, 대만 등 총 17개 지역의 정상에 올랐으며, 월드와이드 아이튠즈 앨범 차트에서도 1위를 차지했다.
          </p>
          <p className="mt-4">
            이번 앨범은 중국 텐센트뮤직 산하 5개 음원 플랫폼 통합 K-POP 차트 1위, QQ뮤직·쿠고우뮤직 디지털 앨범 판매 차트 1위, 더블 플래티넘 인증을 획득했으며, 일본 AWA 실시간 차트·Mora 데일리 차트 1위에 오르며 글로벌 인기를 입증했다.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'NCT127',
    subtitle: 'THE 6TH ALBUM - WLAK',
    image: '/artist-logo.png' ,
    content: (
        <div className="flex items-center bg-black text-white min-h-[300px] px-16 py-10 ">
        <div className="flex-shrink-0 w-[350px] text-center mr-16">
          <h1 className="text-[50px] font-bold">THE 6TH ALBUM</h1>
        </div>
        <div className="flex-1 text-base leading-relaxed">
          <p>
            10월 21일 발매된 에스파 다섯 번째 미니앨범 ‘Whiplash’는 공개 직후 각종 국내 주요 음악 차트 상위권으로 진입해 무서운 추이로 순위 상승에 시동을 걸고 있는 것은 물론, 아이튠즈 톱 앨범 차트에서 태국, 일본, 대만 등 총 17개 지역의 정상에 올랐으며, 월드와이드 아이튠즈 앨범 차트에서도 1위를 차지했다.
          </p>
          <p className="mt-4">
            이번 앨범은 중국 텐센트뮤직 산하 5개 음원 플랫폼 통합 K-POP 차트 1위, QQ뮤직·쿠고우뮤직 디지털 앨범 판매 차트 1위, 더블 플래티넘 인증을 획득했으며, 일본 AWA 실시간 차트·Mora 데일리 차트 1위에 오르며 글로벌 인기를 입증했다.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Hearts2Hearts',
    subtitle: 'THE 1ST SINGLE ALBUM - THE CHASE',
    image: '/artist-logo.png' ,
    content: (
        <div className="flex items-center bg-black text-white min-h-[300px] px-16 py-10 ">
        <div className="flex-shrink-0 w-[350px] text-center mr-16">
          <h1 className="text-[50px] font-bold">THE 1ST SINGLE ALBUM</h1>
        </div>
        <div className="flex-1 text-base leading-relaxed">
          <p>
            10월 21일 발매된 에스파 다섯 번째 미니앨범 ‘Whiplash’는 공개 직후 각종 국내 주요 음악 차트 상위권으로 진입해 무서운 추이로 순위 상승에 시동을 걸고 있는 것은 물론, 아이튠즈 톱 앨범 차트에서 태국, 일본, 대만 등 총 17개 지역의 정상에 올랐으며, 월드와이드 아이튠즈 앨범 차트에서도 1위를 차지했다.
          </p>
          <p className="mt-4">
            이번 앨범은 중국 텐센트뮤직 산하 5개 음원 플랫폼 통합 K-POP 차트 1위, QQ뮤직·쿠고우뮤직 디지털 앨범 판매 차트 1위, 더블 플래티넘 인증을 획득했으며, 일본 AWA 실시간 차트·Mora 데일리 차트 1위에 오르며 글로벌 인기를 입증했다.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Red Velvet',
    subtitle: 'THE 7TH MINI ALBUM - COSMIC',
    image: '/artist-logo.png' ,
    content: (
        <div className="flex items-center bg-black text-white min-h-[300px] px-16 py-10 ">
        <div className="flex-shrink-0 w-[350px] text-center mr-16">
          <h1 className="text-[50px] font-bold">THE 7TH MINI ALBUM</h1>
        </div>
        <div className="flex-1 text-base leading-relaxed">
          <p>
            10월 21일 발매된 에스파 다섯 번째 미니앨범 ‘Whiplash’는 공개 직후 각종 국내 주요 음악 차트 상위권으로 진입해 무서운 추이로 순위 상승에 시동을 걸고 있는 것은 물론, 아이튠즈 톱 앨범 차트에서 태국, 일본, 대만 등 총 17개 지역의 정상에 올랐으며, 월드와이드 아이튠즈 앨범 차트에서도 1위를 차지했다.
          </p>
          <p className="mt-4">
            이번 앨범은 중국 텐센트뮤직 산하 5개 음원 플랫폼 통합 K-POP 차트 1위, QQ뮤직·쿠고우뮤직 디지털 앨범 판매 차트 1위, 더블 플래티넘 인증을 획득했으며, 일본 AWA 실시간 차트·Mora 데일리 차트 1위에 오르며 글로벌 인기를 입증했다.
          </p>
        </div>
      </div>
    )
  }
];

const Art02 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full h-full bg-black text-white">
      {accordionData.map((item, index) => (
        <div key={index} className="border-t border-white">
          <button
            onClick={() => toggleIndex(index)}
            className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-800 transition"
          >
            <div className="relative w-full h-full">
              <div className="text-[20px] font-bold">{item.title}</div>
              <div className="absolute inset-0 flex items-center justify-center text-[20px] text-center w-full">{item.subtitle}</div>
            </div>
            <div>
              {openIndex === index ? (
                <img src="/up.png" alt="Arrow Up" />
              ) : (
                <img src="/down.png" alt="Arrow Down" />
              )}
            </div>
          </button>
          {openIndex === index && (
            <div className="p-4 bg-black text-sm leading-relaxed">
              <div className="mt-4">
                <img src={item.image} alt={`${item.title} Image`} className="w-full h-auto" />
              </div>
              <div>{item.content}</div>
            </div>
          )}
        </div>
      ))}
      <div className='flex jusitfy-center items-center'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
};

export default Art02;
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Art01 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const videoRef = useRef(null); 
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const handlePlayClick = () => {
    setIsVideoPlaying(true); 
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 0); 
  };

  return (
    <div className='relative w-full min-h-screen text-white bg-black overflow-hidden'>
      <img className='absolute top-0 left-0 object-cover w-full h-full z-0' src={process.env.PUBLIC_URL + '/artist-bg.png'} />
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-4 py-4 z-50">
        <img
          src={process.env.PUBLIC_URL + '/Group 1.png'}
          className="w-10 absolute top-6 left-6 sm:w-14 sm:ml-8 sm:mt-8"
          alt="로고"
        />
        <div className="absolute top-0 left-[90px] lg:top-0 lg:left-[200px] leading-tight">
          <h1 className="text-[50px] sm:text-[70px] font-bold">aespa</h1>
          <div className="text-[10px] sm:text-[18px]">æ-nergy Unleashed<br /> aespa coming soon</div>
        </div>
        <button onClick={toggleMenu}>
          <img
            src={process.env.PUBLIC_URL + '/bar.svg'}
            className="absolute top-8 right-8 w-10 sm:w-[30px] sm:mr-8"
            alt="메뉴"
          />
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black text-white z-[9999] transition-all duration-300">
          <div className="absolute top-8 right-8">
            <button onClick={toggleMenu}>
              <img src={process.env.PUBLIC_URL + '/close.png'} className="w-8" alt="닫기" />
            </button>
          </div>
          <ul className="flex flex-col justify-center items-center h-full space-y-8 text-2xl">
            <li className="group">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="relative inline-block"
              >
                ABOUT
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li className="group">
              <Link
                to="/artists"
                onClick={() => setIsMenuOpen(false)}
                className="relative inline-block"
              >
                ARTISTS
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li className="group">
              <span className="relative inline-block">BUSINESS
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </span>
            </li>
            <li className="group">
              <span className="relative inline-block">CONTACT
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </span>
            </li>
          </ul>
        </div>
      )}

      <div className="fixed bottom-4 right-4  border border-white/50 rounded-full hover:cursor-pointer w-[70px] h-[70px] sm:w-[50px] sm:h-[50px] lg:w-[72px] lg:h-[72px]  z-10" style={{ backdropFilter: 'blur(3.86px)', zIndex: '9999' }}>
        <img onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} src={process.env.PUBLIC_URL + '/top.png'} alt="top" className="w-full h-full scale-75 relative top-[-4px]" />
      </div>

      <div className="relative w-full h-screen flex items-center justify-center">
  {!isVideoPlaying && (
    <button
      onClick={handlePlayClick}
      className="z-50 relative w-[100px] h-[100px] group"
    >
      <img
        src={process.env.PUBLIC_URL + '/play.png'}
        alt="play"
        className="absolute w-full h-full opacity-100 group-hover:opacity-0 transition-opacity duration-300"
      />
      <img
        src={process.env.PUBLIC_URL + '/hoverplay.png'}
        alt="hover-play"
        className="absolute w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </button>
  )}

  {isVideoPlaying && (
    <video
      ref={videoRef}
      className="absolute top-0 left-0 w-full h-full object-cover z-40"
      muted
      playsInline
      autoPlay
    >
      <source src={process.env.PUBLIC_URL + '/aespaVideo2.mp4'} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )}
</div>

      <div>
        <div>
          <div className="absolute bottom-[150px] left-4 lg:bottom-[40px] lg:left-[40px] text-xs sm:text-[12px] text-white hidden 2xl:block">Introduction</div>
          <div className="hover:cursor-pointer">
            <img className="absolute bottom-8 left-[50%] lg:bottom-[50px] lg:left-[50%] cursor-pointer pointer-events-auto w-8 sm:w-12" src={process.env.PUBLIC_URL + '/scroll.png'} />
          </div>
          <div className="absolute text-white bottom-[250px] right-[150px] sm:bottom-[100px] sm:right-[180px] lg:bottom-[40px] lg:right-[150px] text-xs sm:text-base font-medium z-30">
            <span className="lg:block hidden opacity-90 text-[20px] sm:text-[30px] xl:text-[50px]">THE 5TH ALBUM</span>
          </div>
        </div>
        <div className="lg:block hidden absolute top-0 bottom-0 left-[140px] w-px line1" ></div>
        <div className="lg:block hidden absolute top-0 bottom-0 right-[140px] w-px line1" ></div>
        <div className="absolute left-0 right-0 bottom-[100px] h-px line2"></div>
      </div>
    </div>
  );
}

export default Art01;
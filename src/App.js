
import './App.css';
import View01 from './view/view01';
import View02 from './view/view02';
import View04 from './view/view04';
import View05 from './view/view05';
import View06 from './view/view06';
import Footer from './view/footer';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const Header = () => (
    <header className="relative text-white top-0 left-0 w-full flex justify-between items-center p-4 sm:p-6 z-50 bg-black">
      <div className="flex items-center gap-2 relative">
        <img src={process.env.PUBLIC_URL + '/Group 1.png'} className="w-10 sm:w-14 sm:ml-4" alt="로고" />
        <span className="text-xs sm:text-sm tracking-widest font-semibold ml-12">
          SM<br />ENTERTAINMENT
        </span>
      </div>
      <button onClick={toggleMenu} className="text-white text-xl sm:text-2xl hover:cursor-pointer">
        <img src={process.env.PUBLIC_URL + '/bar.png'} className="w-10 sm:w-8 sm:mr-4" alt="메뉴버튼" />
      </button>
    </header>
  );

  const Menu = () => (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-500 text-black p-8 z-40 transition-all duration-300">
      <ul className="flex flex-col justify-center items-center h-full space-y-8 text-2xl">
        <li className="hover:bg-gray-100 p-6 w-full text-center">HOME</li>
        <li className="hover:bg-gray-100 p-6 w-full text-center">INTRODUCTION</li>
        <li className="hover:bg-gray-100 p-6 w-full text-center">SERVICES</li>
        <li className="hover:bg-gray-100 p-6 w-full text-center">AAAA</li>
      </ul>
    </div>
  );

  return (
    <div className="relative min-h-screen">
      <Header />
      {isMenuOpen && <Menu />}
      <div> 
        <View01 />
        <View02 />
        <View04 />
        <View05 />
        <View06 />
        <Footer />
      </div>
    </div>
  );
}

export default App;
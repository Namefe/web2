
import './App.css';
import View01 from './view/view01';
import View02 from './view/view02';
import View04 from './view/view04';
import View05 from './view/view05';
import View06 from './view/view06';
import Footer from './view/footer';

function App() {

  const Header = () => (
    <header className="absolute text-white top-4 left-0 w-full flex justify-between items-center p-4 sm:p-6 z-10">
      <div className="flex items-center gap-2 relative">
        <img src={process.env.PUBLIC_URL + '/Group 1.png'} className="w-10 sm:w-14 sm:ml-4"/>
        <span className="text-xs sm:text-sm tracking-widest font-semibold ml-12">
          SM<br />ENTERTAINMENT
        </span>
      </div>
      <button className="text-white text-xl sm:text-2xl">
        <img src={process.env.PUBLIC_URL + '/bar.png'} className="w-10 sm:w-8 sm:mr-4 hover:cursor-pointer"/>
      </button>
    </header>
  );
  
  return (
    <>
      <Header />
      <View01/>
      <View02/>
      <View04/>
      <View05/>
      <View06 />
      <Footer />
    </>
  )
};

export default App;
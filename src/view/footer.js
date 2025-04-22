import React from 'react'

const Footer = () => {
  return (
    <>
        <footer>
      <section className=" w-full h-auto bg-black text-white  px-6 py-12">
        <div className='footer1 xl:flex xl:justify-between'>
      <div>
      <img src={process.env.PUBLIC_URL + '/smlogo.png'}/>
      </div>
      <div>
        <div>
          <h3 className='font-bold '>CONTACT US</h3>
          <div className='opacity-80'>대표번호: 02-6240-9800</div>
          <div className='opacity-80'>이메일: smeir@smtown.com</div>
        </div>
        <div>
          <h3 className='font-bold mt-4 hidden 2xl:block'>OUR BUSINESS</h3>
          <div className='opacity-80 hidden 2xl:block'>SM Entertainment operates across multiple business<br/>sectors within the entertainment industry.</div>
        </div>
      </div>
      </div>
      <div className="footer1 inline-block border-t border-gray-700 my-8 w-full xl:flex xl:justify-between">
      <div className='block'>
        <h3 className='font-bold mt-4'>OUR COMMUNITY</h3>
        <div className='flex flex-end'>
        <img className='m-2' src={process.env.PUBLIC_URL + '/icon3.png'}/>
        <img className='m-2' src={process.env.PUBLIC_URL + '/icon6.png'}/>
        <img className='m-2' src={process.env.PUBLIC_URL + '/icon4.png'}/>
        <img className='m-2' src={process.env.PUBLIC_URL + '/icon2.png'}/>
        <img className='m-2' src={process.env.PUBLIC_URL + '/icon_01.png'}/>
        </div>
      </div>
      <div className='policy'>
        <h3 className='font-bold mt-4'>POLICY</h3>
        <div className='opacity-80'>개인정보처리방침</div>
        <div className='opacity-80'>◎SM Entertainment. All Right Reserved.</div>
      </div>
      </div>
      </section>
    </footer>
    </>
  )
}

export default Footer
import React from 'react'

const Footer = () => {
  return (
    <>
        <footer>
        <div className='w-full h-[1px] line' ></div>
      <section className=" w-full h-auto bg-black text-white  px-6 py-12">
        <div className='footer1 xl:flex xl:justify-between'>
      <div>
      <img src={process.env.PUBLIC_URL + '/smlogo.png'}/>
      </div>
      <div>
        <div>
          <h3 className='font-bold text-[14px] sm:text-[16px] mt-4 mb-2 '>CONTACT US</h3>
          <div className='flex lg:block'>
          <div className='opacity-80 text-[12px] sm:text-[14px] mr-2'>대표번호: 02-6240-9800</div>
          <div className='opacity-80 text-[12px] sm:text-[14px]'>이메일: smeir@smtown.com</div>
          </div>
        </div>
        <div>
          <h3 className='font-bold mt-4 hidden 2xl:block'>OUR BUSINESS</h3>
          <div className='opacity-80 hidden 2xl:block sm:text-[14px]'>SM Entertainment operates across multiple business<br/>sectors within the entertainment industry.</div>
        </div>
      </div>
      </div>
      <div className='w-full h-[1px] line' ></div>
      <div className="footer2 inline-block my-8 w-full xl:flex xl:justify-between">
      <div className='block'>
        <h3 className='font-bold mt-4 text-[14px] sm:text-[16px]'>OUR COMMUNITY</h3>
        <div className='flex flex-end m-0 p-0'>
        <img className='m-2' src={process.env.PUBLIC_URL + '/icon3.png'}/>
        <img className='m-2' src={process.env.PUBLIC_URL + '/icon6.png'}/>
        <img className='m-2' src={process.env.PUBLIC_URL + '/icon4.png'}/>
        <img className='m-2' src={process.env.PUBLIC_URL + '/icon2.png'}/>
        <img className='m-2' src={process.env.PUBLIC_URL + '/icon_01.png'}/>
        </div>
      </div>
      <div className='policy'>
        <h3 className='font-bold mt-4 mb-2 text-[14px] sm:text-[16px]'>POLICY</h3>
        <div className='flex lg:block'>
        <div className='opacity-80 text-[12px] sm:text-[14px] mr-2'>개인정보처리방침</div>
        <div className='opacity-80 text-[12px] sm:text-[14px]'>©SM Entertainment. All Right Reserved.</div>
        </div> 
      </div>
      </div>
      </section>
    </footer>
    </>
  )
}

export default Footer
import React, { useEffect } from 'react'
import cat1 from '../../assets/images/img/cat1.jpg'
import cat2 from '../../assets/images/img/cat2.jpg'
import cat3 from '../../assets/images/img/cat3.jpg'
import cat4 from '../../assets/images/img/cat4.jpg'
import cat5 from '../../assets/images/img/cat5.jpg'
import AOS from 'aos'

const Category = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrowsL: false
  };
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',

    })
    AOS.refresh();

  }, [])
  return (
    <>
      <div id='category' className='w-full bg-gray-100 lg:px-20 px-5 pt-[130px] pb-[80px] flex lg:flex-row flex-col justify-center items-center gap-20'>
        <div data-aos='zoom-in' data-aos-delay='50' className='lg:w-[15%] w-full flex flex-col justify-center lg:items-center items-center gap-5'>
          <h1 className='text-themepurpule text-xl font-semibold text-center'>Favorite Item</h1>
          <h1 className='text-black font-semibold text-[42px] leading-[50px] lg:text-start text-center'>Popular Category</h1>
          <button className='bg-themepurpule text-white hover:bg-themeyellow hover:text-black px-8 py-3 rounded-lg font-semibold mt-[60px]'>
            VIEW ALL
          </button>

        </div>
        <div className='lg:w-[85%] w-full grid lg:grid-cols-5 grid-cols-1 justify-center items-start gap-10'>
          <div data-aos='zoom-in' data-aos-delay='100' className='flex flex-col justify-center items-center gap-6'>
            <img src={cat1} alt="Cat1" className='rounded-full cursor-pointer' />
            <h1 className='text-black text-xl font-semibold hover:text-themepurpule cursor-pointer'>Portable Speakers</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex flex-col justify-center items-center gap-6'>
            <img src={cat2} alt="Cat2" className='rounded-full cursor-pointer' />
            <h1 className='text-black text-xl font-semibold hover:text-themepurpule cursor-pointer'>Cooler</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='300' className='flex flex-col justify-center items-center gap-6'>
            <img src={cat3} alt="Cat3" className='rounded-full cursor-pointer' />
            <h1 className='text-black text-xl font-semibold hover:text-themepurpule cursor-pointer'>Data Cables</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='400' className='flex flex-col justify-center items-center gap-6'>
            <img src={cat4} alt="Cat4" className='rounded-full cursor-pointer' />
            <h1 className='text-black text-xl font-semibold hover:text-themepurpule cursor-pointer'>Hard-Disk</h1>
          </div>
          <div data-aos='zoom-in' data-aos-delay='500' className='flex flex-col justify-center items-center gap-6'>
            <img src={cat5} alt="Cat5" className='rounded-full cursor-pointer' />
            <h1 className='text-black text-xl font-semibold hover:text-themepurpule cursor-pointer'>Camera</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Category
import { useEffect } from 'react'
import Insta1 from '../../assets/images/img/insta-1.jpg'
import Insta2 from '../../assets/images/img/insta-2.jpg'
import Insta3 from '../../assets/images/img/insta-3.jpg'
import Insta4 from '../../assets/images/img/insta-4.jpg'
import Insta5 from '../../assets/images/img/insta-5.jpg'
import Insta6 from '../../assets/images/img/insta-6.jpg'
import AOS from 'aos'

const Insta = () => {
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
      <div className='w-full lg:px-20 px-5 py-[80px] bg-white flex flex-col justify-center items-center gap-4'>
        <h1 data-aos='zoom-in' data-aos-delay='100' className='text-themepurpule text-xl font-semibold capitalize'>
          Our Instagram Shop
        </h1>
        <h1 data-aos='zoom-in' data-aos-delay='200' className='text-black font-semibold text-[42px] leading-[50px] text-center capitalize' >
          Follow On Instagram
        </h1>
        <div className='w-full grid lg:grid-cols-6 grid-cols-1 justify-center items-center gap-6 mt-8'>
          <img data-aos='zoom-in' data-aos-delay='300' src={Insta1} alt="" className='rounded-lg' />
          <img data-aos='zoom-in' data-aos-delay='400' src={Insta2} alt="" className='rounded-lg' />
          <img data-aos='zoom-in' data-aos-delay='500' src={Insta3} alt="" className='rounded-lg' />
          <img data-aos='zoom-in' data-aos-delay='500' src={Insta4} alt="" className='rounded-lg' />
          <img data-aos='zoom-in' data-aos-delay='400' src={Insta5} alt="" className='rounded-lg' />
          <img data-aos='zoom-in' data-aos-delay='300' src={Insta6} alt="" className='rounded-lg' />
        </div>
        <button data-aos='zoom-in' data-aos-delay='400' className='bg-themepurpule hover:bg-themeyellow text-white hover:text-black font-semibold px-8 py-3 rounded-lg mt-12 uppercase'>#Electrashop</button>
      </div>
    </>
  )
}

export default Insta
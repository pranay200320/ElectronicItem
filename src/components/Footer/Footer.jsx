import Client1 from '../../assets/images/img/client1.png'
import Client2 from '../../assets/images/img/client2.png'
import Client3 from '../../assets/images/img/client3.png'
import Client4 from '../../assets/images/img/client4.png'
import Client5 from '../../assets/images/img/client5.png'
import Client6 from '../../assets/images/img/client6.png'
import google from '../../assets/images/img/google.jpg'
import apple from '../../assets/images/img/apple.jpg'
import pay1 from '../../assets/images/img/pay-1.jpg'
import pay2 from '../../assets/images/img/pay-2.jpg'
import pay3 from '../../assets/images/img/pay-3.jpg'
import pay4 from '../../assets/images/img/pay-4.jpg'
import { FaArrowUp } from "react-icons/fa";
import AOS from 'aos'
import { useEffect } from 'react'
import { Link } from 'react-scroll'


const Footer = () => {

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
      <div id='contact' className='w-full flex flex-col justify-center items-center'>
        {/* 1st Box Start Here */}
        <div data-aos='zoom-in' data-aos-delay='200' className='w-full bg-themepurpule lg:px-20 px-10 py-8 grid lg:grid-cols-6 grid-cols-2 justify-center items-center gap-10' >
          <img src={Client1} alt="" className='w-[130px] opacity-70 cursor-pointer hover:opacity-100' />
          <img src={Client2} alt="" className='w-[130px] opacity-70 cursor-pointer hover:opacity-100' />
          <img src={Client3} alt="" className='w-[130px] opacity-70 cursor-pointer hover:opacity-100' />
          <img src={Client4} alt="" className='w-[130px] opacity-70 cursor-pointer hover:opacity-100' />
          <img src={Client5} alt="" className='w-[130px] opacity-70 cursor-pointer hover:opacity-100' />
          <img src={Client6} alt="" className='w-[130px] opacity-70 cursor-pointer hover:opacity-100' />
        </div>
        {/* 1st Box End Here */}
        {/* 2nd Box Start Here */}
        <div className='w-full lg:px-20 px-5 py-[60px] bg-gray-100 grid lg:grid-cols-[auto,auto,auto,auto,auto] grid-cols-1 justify-between items-start lg:gap-3 gap-10'>
          <div data-aos='zoom-in' data-aos-delay='200' className='flex flex-col justify-center items-start gap-10 grow'>
            <div className='flex flex-col justify-center items-start gap-4'>
              <h1 className='text-4xl font-bold text-themepurpule underline italic hover:text-violet-400 cursor-pointer'>Electra Shop</h1>
              <p className='text-gray-500 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /> Unde modi cum voluptatem veniam ad libero iste ipsa placeat. <br /> Necessitatibus, autem?</p>

            </div>
            <div className='flex flex-col justify-center items-start gap-4'>
              <h1 className='text-black text-xl font-semibold capitalize'>Download Our App</h1>
              <div className='flex justify-center items-center gap-4'>
                <img src={google} alt="" />
                <img src={apple} alt="" />
              </div>

            </div>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200'>
            <h1 className='text-black text-xl font-semibold capitalize'>UseFul Links</h1>
            <ul className='mt-8 flex flex-col justify-center items-start gap-2'>
              <li className='text-gray-500 cursor-pointer hover:text-black'>Home</li>
              <li className='text-gray-500 cursor-pointer hover:text-black'>About</li>
              <li className='text-gray-500 cursor-pointer hover:text-black'>Serviecs</li>
              <li className='text-gray-500 cursor-pointer hover:text-black'>Blogs</li>
              <li className='text-gray-500 cursor-pointer hover:text-black'>Contact</li>
            </ul>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200'>
            <h1 className='text-black text-xl font-semibold capitalize'>Information</h1>
            <ul className='mt-8 flex flex-col justify-center items-start gap-2'>
              <li className='text-gray-500 cursor-pointer hover:text-black'>Return Policy</li>
              <li className='text-gray-500 cursor-pointer hover:text-black'>Privacy Policy</li>
              <li className='text-gray-500 cursor-pointer hover:text-black'>Refund Policy</li>
              <li className='text-gray-500 cursor-pointer hover:text-black'>Agreement</li>
              <li className='text-gray-500 cursor-pointer hover:text-black'>We Our Brand</li>
            </ul>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200'>
            <h1 className='text-black text-xl font-semibold capitalize'>Top Category</h1>
            <ul className='mt-8 flex flex-col justify-center items-start gap-2'>
              <li className='text-gray-500 cursor-pointer hover:text-black'>Wireless Headphones</li>
              <li className='text-gray-500 cursor-pointer hover:text-black'>Bluetooth Speakers</li>
              <li className='text-gray-500 cursor-pointer hover:text-black'>Portable Devices</li>
              <li className='text-gray-500 cursor-pointer hover:text-black'>Monio Live Camera</li>
              <li className='text-gray-500 cursor-pointer hover:text-black'>Movie Projector T6</li>
            </ul>
          </div>
          <div data-aos='zoom-in' data-aos-delay='200'>
            <h1 className='text-black text-xl font-semibold capitalize'>Contact Info</h1>
            <ul className='mt-8 flex flex-col justify-center items-start gap-2'>
              <li className='text-gray-500 cursor-pointer hover:text-black'>Phone: +1 234 567 890</li>
              <li className='text-gray-500 cursor-pointer hover:text-black'>Email: info@domain.com</li>

              <li className='text-gray-500 cursor-pointer hover:text-black'>401 Broadway, 24th floor,</li>
              <li className='text-gray-500 cursor-pointer hover:text-black'>orchard view, london, UK</li>
            </ul>
          </div>
        </div>
        {/* 2nd Box End Here */}
        {/* 3rd Box Start Here */}
        <div className='w-full lg:px-20 px-5 py-[40px] bg-gray-100'>
          <hr className='border-t border-gray-300 py-3' />
          <div className='w-full flex lg:flex-row flex-col justify-between items-center lg:gap-4 gap-10'>
            <div className='lg:w-[20%] w-full flex justify-center items-center gap-4'>
              <img src={pay1} alt="" className='w-[50px] rounded-lg' />
              <img src={pay2} alt="" className='w-[50px] rounded-lg' />
              <img src={pay3} alt="" className='w-[50px] rounded-lg' />
              <img src={pay4} alt="" className='w-[50px] rounded-lg' />
            </div>
            <div className='lg:w-[60%] w-full flex lg:flex-col flex-col justify-center items-center gap-4 flex-grow'>
              <h1 className='text-black font-semibold text-2xl'>Subscribe Newsletter</h1>
              <div>
                <input type="email" placeholder='Enter Valid Email' className='lg:w-auto w-full capitalize px-6 py-3 rounded-l-lg' />
                <button className='text-white bg-themepurpule hover:text-black hover:bg-themeyellow lg:w-auto w-full px-6 py-3 rounded-r-lg font-semibold'>Submit</button>
              </div>

            </div>
            <div className='lg:w-[20%] w-full'>
              <p className='text-gray-500 lg:text-end text-center'>2024 Powered By Debug Entity</p>
            </div>
          </div>
        </div>

        {/* 3rd Box End Here */}

        {/* scroll to top button */}
        <div id='icon-box' className='bg-themepurpule text-white p-3 rounded-full hover:bg-themeyellow hover:text-black cursor-pointer fixed lg:bottom-6 right-6 bottom-6'>
          <Link to='hero' spy={true} offset={-100} smooth={true}>
            <FaArrowUp className='w-[35px] h-[35px]' />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Footer
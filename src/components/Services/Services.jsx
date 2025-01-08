import { useEffect } from "react"
import AOS from "aos"
import Payment1 from '../../assets/images/img/payment.png'
import Shipping from '../../assets/images/img/shipping.png'
import Refund from '../../assets/images/img/return.png'
import Gift from '../../assets/images/img/gift.png'





const Services = () => {
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
      <div className="w-full lg:px-20 px-5 pt-0 pb-[80px] grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10">
        <div data-aos='zoom-in' data-aos-delay='100' className="flex flex-col justify-center items-center gap-2">
          <img src={Shipping} alt="Payment" className="mb-[20px] w-[60px] hover:size-[80px] duration-200" />
          <h1 className="text-xl text-black font-semibold hover:text-[30px] duration-200">Worldwide Shipping</h1>
          <p className="text-[17px] text-gray-500 hover:text-black">Lorem ipsum dolor sit amet</p>
        </div>
        <div data-aos='zoom-in' data-aos-delay='300' className="flex flex-col justify-center items-center gap-2">
          <img src={Payment1} alt="Payment" className="mb-[20px] w-[60px] hover:size-[80px] duration-200" />
          <h1 className="text-xl text-black font-semibold hover:text-[30px] duration-200">100% Secure Payment</h1>
          <p className="text-[17px] text-gray-500 hover:text-black">Lorem ipsum dolor sit amet</p>
        </div>
        <div data-aos='zoom-in' data-aos-delay='500' className="flex flex-col justify-center items-center gap-2">
          <img src={Refund} alt="Payment" className="mb-[20px] w-[60px] hover:size-[80px] duration-200" />
          <h1 className="text-xl text-black font-semibold hover:text-[30px] duration-200">100% Cash-Back</h1>
          <p className="text-[17px] text-gray-500 hover:text-black">Lorem ipsum dolor sit amet</p>
        </div>
        <div data-aos='zoom-in' data-aos-delay='700' className="flex flex-col justify-center items-center gap-2">
          <img src={Gift} alt="Payment" className="mb-[20px] w-[60px] hover:size-[80px] duration-200" />
          <h1 className="text-xl text-black font-semibold hover:text-[30px] duration-200">Free Boucher</h1>
          <p className="text-[17px] text-gray-500 hover:text-black">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </>
  )
}

export default Services
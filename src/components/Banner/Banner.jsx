import AOS from "aos"
import { useEffect } from "react";
import deal from '../../assets/images/img/deal-bg.jpg'


const Banner = () => {
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
      <div className="w-full lg:px-10 px-5 py-[60px]">
        <div data-aos='zoom-in' data-aos-delay='100' className="w-full h-[350px] rounded-lg bg-cover bg-center flex flex-col justify-center items-center gap-3 p-4" style={{ backgroundImage: `url(${deal})` }}>
          <h1 className="text-themeyellow text-[25px] font-semibold " >EveryDay Shoping</h1>
          <h1 className="text-white font-bold text-[42px] leading-[50px] text-center" >Deal Of The Day</h1>
        </div>
      </div>
    </>
  )
}

export default Banner
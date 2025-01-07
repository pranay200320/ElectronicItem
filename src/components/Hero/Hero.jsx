import React, { useEffect } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from "../../assets/images/img/headset.jpg"
import earbuds from "../../assets/images/img/earbuds.jpg"
import earbud from "../../assets/images/img/earbud.jpg"
import dslr from "../../assets/images/img/dslr.jpg"
import AOS from 'aos'




const Hero = () => {
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

        <div id='hero' className='w-full flex justify-center items-center lg:h-[700px] h-[600px]'>
            <Slider className='w-full' {...settings} >
                <div>
                    <div className='w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center' style={{ backgroundImage: `url(${dslr})` }}>
                        <h1 data-aos='zoom-in' data-aos-delay='100' className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-xl'>Get UpTo Discounts 80% Off </h1>
                        <h1 data-aos='zoom-in' data-aos-delay='100' className='text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]'>DSLR 360 <br /> Camera </h1>

                        <h1 data-aos='zoom-in' data-aos-delay='100' className='text-white text-2xl'>
                            100% Trusted <span className='text-themeyellow font-semibold '>Electronics Gadgets</span>
                        </h1>
                        <button data-aos='zoom-in' data-aos-delay='200' className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold'>
                            ONLINE COLLECTIONS
                        </button>

                    </div>

                </div>
                <div>
                    <div className='w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center' style={{ backgroundImage: `url(${earbuds})` }}>
                        <h1 data-aos='zoom-in' data-aos-delay='100' className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-xl'>Get UpTo Discounts 50% Off </h1>
                        <h1 data-aos='zoom-in' data-aos-delay='100' className='text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]'>WireLess <br /> EarBuds </h1>

                        <h1 data-aos='zoom-in' data-aos-delay='100' className='text-white text-2xl'>
                            100% Trusted <span className='text-themeyellow font-semibold'>Electronics Gadgets</span>
                        </h1>
                        <button data-aos='zoom-in' data-aos-delay='200' className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold'>
                            ONLINE COLLECTIONS
                        </button>

                    </div>

                </div>
                <div>
                    <div className='w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center' style={{ backgroundImage: `url(${headset})` }}>
                        <h1 data-aos='zoom-in' data-aos-delay='100' className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-xl'>Get UpTo Discounts 60% Off </h1>
                        <h1 data-aos='zoom-in' data-aos-delay='100' className='text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]'>WireLess <br /> HeadPhones </h1>

                        <h1 data-aos='zoom-in' data-aos-delay='100' className='text-white text-2xl'>
                            100% Trusted <span className='text-themeyellow font-semibold'>Electronics Gadgets</span>
                        </h1>
                        <button data-aos='zoom-in' data-aos-delay='200' className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold'>
                            ONLINE COLLECTIONS
                        </button>

                    </div>

                </div>


            </Slider >
        </div >

    )
}

export default Hero
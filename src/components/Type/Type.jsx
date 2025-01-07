import React, { useEffect } from 'react'
import Banner1 from '../../assets/images/img/banner1.jpg'
import Banner2 from '../../assets/images/img/banner2.jpg'
import Banner3 from '../../assets/images/img/banner3.jpg'
import AOS from 'aos'


const Type = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: 'ease-in-out'
        })
        AOS.refresh();
    }, [])
    return (
        <div className='w-full lg:px-20 px-5 py-[80px] grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-10 '>
            <div data-aos='zoom-in' data-aos-delay="100" className='flex flex-col justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg ' style={{
                backgroundImage: `url(${Banner1})`
            }}>
                <h1 className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-lg '>60% Off</h1>
                <h1 className='text-4xl text-end text-white font-semibold'>Wireless <br />Devices</h1>
                <button className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold hover:bg-yellow-500'>
                    SHOP NOW
                </button>

            </div>
            <div data-aos='zoom-in' data-aos-delay="300" className='flex flex-col justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg' style={{
                backgroundImage: `url(${Banner2})`
            }}>
                <h1 className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 lext-lg'>60% Off</h1>
                <h1 className='text-4xl text-end text-white font-semibold'>Wired <br />Devices</h1>
                <button className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold hover:bg-yellow-500'>
                    SHOP NOW
                </button>

            </div>
            <div data-aos='zoom-in' data-aos-delay="500" className='flex flex-col justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg' style={{
                backgroundImage: `url(${Banner3})`
            }}>
                <h1 className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 lext-lg'>60% Off</h1>
                <h1 className='text-4xl text-end text-white font-semibold'>Digital <br />Devices</h1>
                <button className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold hover:bg-yellow-500'>
                    SHOP NOW
                </button>

            </div>

        </div>
    )
}

export default Type
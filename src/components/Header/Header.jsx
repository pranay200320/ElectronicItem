import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { useEffect, useState } from "react";
import watch from '../../assets/images/img/watch.jpg'
import { FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import { Link } from "react-scroll"

const Header = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',

    })
    AOS.refresh();
  }, [])

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggelMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  const navItems = [
    {
      link: 'Home', path: 'header'
    },
    {
      link: 'About', path: 'about'
    },
    {
      link: 'Products', path: 'products'
    },
    {
      link: 'Testimonials', path: 'testimonials'
    },
    {
      link: 'Contact', path: 'contact'
    },
  ]

  return (
    <>
      <div id="header" className="w-full px-16 py-2 bg-themeyellow lg:flex hidden justify-between items-center gap-6" >
        <h1 className="text-sm font-semibold flex justify-center items-center gap-2"><FaPhoneVolume className="size-[18px]" /><span>+91 909 958 7730</span></h1>
        <h1 className="text-sm font-semibold flex justify-center items-center gap-2"><FaMapMarkerAlt className="size-[18px]" /><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, totam?</span></h1>
        <h1 className="text-sm font-semibold flex justify-center items-center gap-2"><MdMail className="size-[18px]" /><span>pranaytiwari290@gmail.com</span></h1>


      </div>
      <nav className="w-full bg-gray-100 flex justify-between items-center gap-1 lg:px-16 px-6 py-5 sticky top-0 z-50">
        <h1 className="text-themepurpule font-bold lg:text-[30px] text-3xl underline italic">
          Electra Shop
        </h1>
        <ul className="lg:flex justify-center items-center gap-10 hidden">
          {
            navItems.map(({ link, path }) => (
              <Link key={path} className="text-black text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-themepurpule hover:text-white" to={path} spy={true} offset={-100} smooth={true} >{link}</Link>

            ))
          }
        </ul>
        <div id="header-icons" className="lg:flex hidden justify-center items-center gap-6 text-black">
          <FaSearch className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themepurpule" />
          <IoPerson className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themepurpule" />
          <FaHeart className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themepurpule" />
          <div className="relative">
            <FaShoppingCart className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themepurpule" />
            <div className="bg-themepurpule hover:bg-themeyellow px-3 py-1 text-white hover:text-black rounded-full absolute -top-[24px] -right-[15px] text-[14px] font-bold" >2</div>
          </div>
        </div>

        {/* mobile menu start here */}

        <div className="flex justify-center items-center lg:hidden mt-3" onClick={toggelMenu}>
          <div>
            {isMenuOpen ? <FaXmark className="text-themepurpule text-3xl" /> : <FaBars className="text-themepurpule text-3xl" />}
          </div>
        </div>
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-themepurpule p-4 absolute top-[80px] left-0`} onClick={closeMenu}>
          <ul className="flex flex-col justify-center items-center gap-2 w-full">
            {
              navItems.map(({ link, path }) => (
                <Link key={path} className="text-white  uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-themeyellow hover:text-black w-full text-center" to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
              ))
            }

          </ul>

        </div>
      </nav>
    </>
  )
}

export default Header
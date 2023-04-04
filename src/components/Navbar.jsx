import React, { useState } from 'react'
import list from "../list.json";
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
      };
  return (
    <nav className='bg-white py-2 text-black'>
        <div className='container mx-auto h-20 flex items-center justify-between text-[#000000] tracking-wide bg-white rounded-2xl p-3 shadow-2xl shadow-inherit placeholder-opacity-90 flex-shrink-0'>
            <NavLink href="#" to={"/my-app"}>  <h1 className='text-2xl font-black p-2 md:flex hidden'> ERAYSOFT. </h1> </NavLink>
            <nav className='hidden md:flex'>
                <ul className='flex items-center gap-x-8 font-sm text-base pr-2 '>

                    <li className='hover:text-[#1A2238] hover:bg-gray-100 rounded-lg duration-200 py-1 px-2'>
                        <NavLink href="#" to='/my-app'>Ana Sayfa</NavLink>
                    </li>

                    <li className='hover:text-[#1A2238] hover:bg-gray-100 rounded-lg duration-200 py-1 px-2' >
                        <NavLink href="#" className='flex' to={"/my-app/about"}>Hakkımızda  </NavLink>
                    </li>

                    <div className='justify-items-center'>
                        <li className='hover:text-[#1A2238] hover:bg-gray-100 rounded-lg duration-200 py-1 px-2'>
                            <NavLink href="#" className='flex' onClick={() => setIsOpen((prev) => !prev)}>Ürünler  </NavLink>
                        </li>

                            {/* DROPDOWN MENU */}
                            {isOpen && <div className='bg-gray-200 absolute top-20 max-w-20 flex flex-col items-start rounded-lg p-4 gap-y-2'>
                
                            {list.map((item,i) => (
                                <div className='hover:bg-blue-200 rounded-lg w-full flex py-2 hover:cursor-pointer duration-75 hover:border-b-2'>
                                <NavLink to={item.to}> {item.name} </NavLink>
                                </div>
                            ))}
                        
                            </div>}
                    </div>

                    <li className='hover:text-[#1A2238] hover:bg-gray-100 rounded-lg duration-200 py-1 px-2'>
                        <NavLink href="#" to='/my-app/referances'>Referanslarımız</NavLink>
                    </li>

                    <li className='hover:text-[#1A2238] hover:bg-gray-100 rounded-lg duration-200 py-1 px-2'>
                        <NavLink href="#" to={"/my-app/help"}>Yardım</NavLink>
                    </li>
                </ul>
            </nav>

            {/* MOBİL MENU */}
            <div className='flex justify-between items-center h-24 max-w-[1240px] right-0 fixed px-4 md:hidden'>
                <div onClick={handleNav} className='block md:hidden '>
                    {nav ? <AiOutlineClose size={20} className=''/> : <AiOutlineMenu size={20}  className=''/>}
                </div>
                <ul className={nav ? 'list-disc fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-200 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                    <h1 className='w-full text-3xl font-bold m-4'>ERAYSOFT</h1>
                    <NavLink to={"/my-app"}             className="p-4 border-b block ">Ana Sayfa                 </NavLink>
                    <NavLink to={"/my-app/about"}       className="p-4 border-b block">Hakkımızda                </NavLink>
                    <NavLink                            className="p-4 border-b block">Ürünler                   </NavLink>
                    <NavLink to={"/my-app/panini"}      className="p-4 pl-10 border-b block">Çek Okuyucu               </NavLink>
                    <NavLink to={"/my-app/idscsanner"}  className="p-4 pl-10 border-b block">Kimlik & Pasaport Okuyucu </NavLink>
                    <NavLink to={"/my-app/referances"}  className="p-4 border-b block">Referanslarımız           </NavLink>
                    <NavLink to={"/my-app/help"}        className="p-4 border-b block">Yardım                    </NavLink>
                    <NavLink to={"/my-app/iletisim"}    className="p-4 border-b block">İletişim                  </NavLink>
                </ul>
            </div>
            
            <div>
                <NavLink to="/my-app/iletisim" className=" hidden md:flex px-6 py-4 bg-[#1A2238] text-base font-medium rounded-lg text-white hover:bg-[#0e1624] duration-200 transition">
                    İletişim
                </NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
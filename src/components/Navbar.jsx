import React, { useState } from 'react'
import list from "../list.json";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='bg-white py-2 text-black'>
        <div className='container mx-auto h-20 flex items-center justify-between text-[#000000] tracking-wide bg-white rounded-2xl p-3 shadow-2xl shadow-inherit placeholder-opacity-90 flex-shrink-0'>
            <NavLink href="#" to={"/my-app"}>  <h1 className='text-2xl font-black p-2'> ERAYSOFT. </h1> </NavLink>
            <nav>
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
            <div>
                <NavLink to="/my-app/iletisim" className="px-6 py-4 bg-[#1A2238] text-base font-medium rounded-lg text-white hover:bg-[#0e1624] duration-200 transition">
                    İletişim
                </NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
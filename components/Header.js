import React, { useState } from "react";
import Image from 'next/image'
import NavItem from "./NavItem";
import { UserCircleIcon } from '@heroicons/react/24/solid'

const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "Features", href: "/about" },
    { text: "Examples", href: "/contact" },
    { text: "Pricing", href: "/contact" },
];

function Header() {
    const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  return (
    <header className='sticky top-0 z-50 flex justify-between	 bg-white shadow-md p-2 md:px-4'>
        {/* Left  */}
        <div className='relative flex items-center justify-start cursor-pointer'>
            <Image
            src="https://ik.imagekit.io/dataviz/dv-logo.png"
            width={180}
            height={52}
            alt="DataViz"
            />
        </div>
        {/* Middle  */}
        <div className={`${navActive ? "active" : ""} nav__menu-list gap-4 justify-center items-center hidden md:flex `}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
        {/* Right  */}
        <div className='flex items-center justify-end'>
            <UserCircleIcon className="h-8 w-8 text-slate-400 cursor-pointer hover:text-slate-900" />
        </div>
    </header>
  )
}

export default Header
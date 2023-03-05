import React from "react";
import Image from 'next/image'
import NavItem from "./NavItem";
import { UserCircleIcon } from '@heroicons/react/24/solid'

const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "Features", href: "/about" },
    { text: "Examples", href: "/contact" },
    { text: "Pricing", href: "/contact" },
];

const RIGHT_MENU_LIST = [
    { text: "Sign in", href: "/login" },
    { text: "Sign up", href: "/register" },
];

function Header() {
  return (
    <header className='sticky top-0 z-50 flex justify-between bg-white shadow-md p-2 md:px-4'>
        {/* Left  */}
        <div className='relative   cursor-pointer'>
            <Image
            src="https://ik.imagekit.io/dataviz/dv-logo.png"
            width={180}
            height={52}
            alt="DataViz"
            priority
            />
        </div>
        {/* Middle  */}
        <ul className="gap-4 flex items-center justify-center hidden md:flex ">
            {MENU_LIST.map((menu, idx) => (
                    <li key={menu.text} >
                        <NavItem {...menu} />
                    </li>
            ))}           
        </ul>
        {/* Right  */}
        <div className='flex items-center justify-end'>
            <UserCircleIcon className="h-8 w-8 text-slate-400 cursor-pointer hover:text-slate-900" />
        </div>
    </header>
  )
}

export default Header
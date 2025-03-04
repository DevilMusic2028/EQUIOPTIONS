"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ReorderThreeOutline } from 'react-ionicons';

const Navbar = () => {

    // Handle scrolling changes - logo change, header color change
    const [isScrolled, setIsScrolled] = useState(false);
    const [isScrolledHeader, setIsScrolledHeader] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200);
            setIsScrolledHeader(window.scrollY > 35);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    // Mobile sidebar menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <header className={`fixed top-0 left-0 w-full flex items-center justify-between px-[5.6rem] py-[1.5rem] z-100 
                            ${isScrolledHeader ? 'bg-[#002e5f] bg-opacity-80 shadow-[0_0.2rem_0.5rem_rgba(0,0,0,0.4)]' : ''}
                            ${isMenuOpen ? 'bg-[#002e5f]' : ''}`}>

            <div className="relative">
                <h2 className={`text-white text-[2.1rem] transition-all duration-300 ease-in-out
                        ${isScrolled ? 'opacity-0 translate-x-[-20px]' : ''}`}>
                    EQUIOPTIONS
                </h2>

                <Image
                    src="/favicon.png"
                    alt="EQ Logo"
                    width={26}
                    height={26}
                    className={`absolute top-0 left-0 transition-all duration-100 ease-in-out
                        ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                />
            </div>

            <ReorderThreeOutline
                className={` hover:text-blue-400 duration-100 md:hidden h-[3em] w-[3em] text-white`}
                onClick={toggleMenu}
            />

            <nav className={`md:flex ${isMenuOpen ? 'block bg-[#002e5f]' : 'hidden'} absolute md:relative top-full left-0 w-full md:w-auto`}>
                <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12 py-4 md:py-0">
                    {['home', 'about', 'services', 'contact', 'FAQ'].map((item) => (
                        <li key={item}>
                            <Link href={`#${item}`} className="capitalize text-white text-[2.1rem] relative after:block after:content-['']
                                                               after:h-px after:w-0 after:bg-white after:transition-all after:duration-100
                                                               after:ease-in-out hover:after:w-full">
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;

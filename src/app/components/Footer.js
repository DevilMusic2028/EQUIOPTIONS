"use client"

import { ChevronForwardOutline } from 'react-ionicons'

const Footer = () => {
    return (
        <footer className="bg-gray-800">
            <div className="bg-[#002e5f] py-20">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 gap-12 text-white">
                    {/* Useful Links */}
                    <div>
                        <h4 className="text-xl uppercase pb-3 border-b-2 border-white tracking-wide">
                            Useful Links
                        </h4>
                        <ul className="mt-4 space-y-2 text-lg">
                            {['Home', 'About', 'Services', 'Contact', 'FAQ'].map((item) => (
                                <li key={item} className="border-b border-white pb-2 items flex items-center">
                                    <ChevronForwardOutline
                                        color={'#ffffff'}
                                        height="1.25em"
                                        width="1.25em"
                                    />
                                    <a href={`#${item.toLowerCase()}`} className="hover:underline ml-1">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className="text-xl uppercase pb-3 border-b-2 border-white tracking-wide">
                            Contact Us
                        </h4>
                        <p className="mt-4 leading-7 text-lg">
                            1349 Western Road N6G 1H3, London Ontario<br />
                            <strong>Phone:</strong> <br />
                            <strong>Email:</strong> info.equioptions@gmail.com
                        </p>
                    </div>

                    {/* Social media links - Update when needed*/}
                    {/* <div class="social-links">
                        <a href="https://www.facebook.com/"><i class="ion-logo-facebook"></i></a>
                        <a href="https://twitter.com/login?lang=en"><i class="ion-logo-twitter"></i></a>
                        <a href="https://www.linkedin.com/"><i class="ion-logo-linkedin"></i></a>
                        <a href="https://www.instagram.com/"><i class="ion-logo-instagram"></i></a>
                        <a href="https://accounts.google.com/servicelogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin"><i class="ion-logo-googleplus"></i></a>
                    </div> */}
                    
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-white text-center md:text-left text-lg py-7">
                <div className="max-w-6xl mx-auto px-4">
                    Copyright &copy; {new Date().getFullYear()} EquiOptions. All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer

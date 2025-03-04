"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import useBackToTop from './components/BackToTop';
import Counter from './components/Counter';
import ContactForm from './components/ContactForm';

import {
    TrendingUpOutline,
    BriefcaseOutline,
    CashOutline,
    BusinessOutline,
    PeopleOutline,
    ChevronUpOutline,
    OpenOutline
} from "react-ionicons";

export default function Home() {

    // Scroll back on top button
    const { isVisible, scrollToTop } = useBackToTop();

    return (
        <main>

            {/* HERO SECTION */}
            <section id="home" className="home min-h-screen w-screen bg-[url(/images/subtle-prism.svg)] flex flex-col
                        items-left justify-center text-left
                        px-20 relative overflow-hidden">

                <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-snug text-white">
                    <span className="block text-white">Simplifying Investments,</span>
                    <span className="text-white">Empowering Communities</span>
                </h2>

                <div className="flex flex-col md:flex-row gap-8 mt-10">
                    <Link href="/listings" className="bg-[#ffffff] text-[#002e5f] text-2xl px-6 py-4
                                rounded-lg shadow-md hover:bg-[#dfdfdf] transition duration-300 flex items-center">
                        List your business
                        <OpenOutline className="h-[16px] w-[16px] ml-3 mt-[-1px]" />
                    </Link>

                    <Link href="/investors" className="bg-transparent border-2 border-[#ffffff] text-[#ffffff] text-2xl px-6 py-4
                    rounded-lg shadow-md hover:bg-[#ffffff] hover:text-[#002e5f] transition duration-300 flex items-center">
                        Become an Investor
                        <OpenOutline className="h-[16px] w-[16px] ml-3 mt-[-1px]" />
                    </Link>
                </div>
            </section>



            {/* ABOUT SECTION */}
            <section id="about" className="relative w-full overflow-hidden py-16">
                <div className="flex flex-col items-center max-w-6xl mx-auto px-6 md:px-12">
                    <h1 className="text-[#002e5f] text-3xl md:text-5xl mb-8 md:mb-12 border-eq">About Us</h1>

                    <div className="text-gray-700 text-base md:text-xl leading-relaxed">
                        <p className="mb-6">
                            EquiOptions was founded with a clear vision: to create a marketplace that empowers both investors
                            and entrepreneurs. By blending the strategic precision of options trading with the growth potential
                            of private businesses, we open doors to opportunities that were once out of reach. Our team of
                            financial experts, technologists, and visionaries is dedicated to transforming the investment
                            landscape and making a lasting impact.
                        </p>
                    </div>
                </div>

                {/* Advisory Board */}
                <div className="flex flex-col items-center max-w-6xl mx-auto px-6 md:px-12 pt-12 md:pt-20">
                    <h1 className="text-[#002e5f] text-3xl md:text-5xl mb-8 md:mb-12 border-eq">Advisory Board</h1>
                    <div></div>
                </div>
            </section>



            {/* SERVICES SECTION */}
            <section id="services" className="bg-gray-100 py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-[#002e5f] text-5xl mb-6 border-eq">Our Services</h1>

                    <div className="grid md:grid-cols-2 gap-4">
                        {/* Investor Card */}
                        <div className="relative p-16">
                            <h2 className="text-3xl text-[#002e5f] flex items-center mb-10">
                                <TrendingUpOutline
                                    color={'#002e5f'}
                                    height="2.2rem"
                                    width="2.2rem"
                                    className="mr-4"
                                />
                                For Investors
                            </h2>

                            <ul className="list-disc pl-6 text-left text-gray-700 space-y-10 text-xl">
                                <li>Sign up and create your investor profile</li>
                                <li>Explore a curated selection of private companies seeking funding</li>
                                <li>Use options trading strategies to manage risk and maximize returns</li>
                                <li>Monitor your portfolio with real-time insights and updates</li>
                            </ul>
                        </div>

                        {/* Business Card */}
                        <div className="relative p-16">
                            <h2 className="text-3xl text-[#002e5f] flex items-center mb-10">
                                <BriefcaseOutline
                                    color={'#002e5f'}
                                    height="1.875rem"
                                    width="1.875rem"
                                    className="mr-4"
                                />
                                For Businesses
                            </h2>

                            <ul className="list-disc pl-6 text-left text-gray-700 space-y-8 text-xl">
                                <li>Register your business and outline your funding requirements</li>
                                <li>Showcase your potential with detailed business profiles</li>
                                <li>Connect with investors who align with your vision</li>
                                <li>Access flexible funding solutions tailored to your growth</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>



            {/* STATS SECTION */}
            <section className="relative bg-[#002e5f] bg-cover bg-fixed bg-center text-white py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                        {/* Counter Item 1 */}
                        <div className="flex flex-col items-center">
                            <CashOutline
                                color={'#ffffff'}
                                height="3rem"
                                width="3rem"
                            />
                            <Counter target={0} speed={120} />
                            <h3 className="text-xl font-medium mt-1 text-center">Total Investments</h3>
                        </div>

                        {/* Counter Item 2 */}
                        <div className="flex flex-col items-center">
                            <BusinessOutline
                                color={'#ffffff'}
                                height="3rem"
                                width="3rem"
                            />
                            <Counter target={0} speed={120} />
                            <h3 className="text-xl font-medium mt-1 text-center">Number of Businesses</h3>
                        </div>

                        {/* Counter Item 3 */}
                        <div className="flex flex-col items-center">
                            <PeopleOutline
                                color={'#ffffff'}
                                height="3rem"
                                width="3rem"
                            />
                            <Counter target={0} speed={120} />
                            <h3 className="text-xl font-medium mt-1 text-center">Number of Investors</h3>
                        </div>
                    </div>
                </div>
            </section>



            {/* CONTACT SECTION */}
            <section id="contact" className="text-center py-24 bg-gray-100">
                <h1 className="text-[#002e5f] text-5xl border-eq mb-12">Get in touch</h1>
                <ContactForm />
            </section>



            {/* FAQ SECTION - UPDATE TO REACT WHEN NEEDED */}
            {/* <section class="faq">
                <h1 class="heading" style="margin-top: -2rem; color: #00bfff;" id="faq">FAQ</h1>
                <div class="row">
                    <div class="accordion-container">
                        <div class="accordion">
                            <div class="accordion-header">
                                <span>+</span>
                                <h3>what problems did you face in creating this car?</h3>
                            </div>
                            <div class="accordion-body">
                                <p></p>
                            </div>
                        </div>
                        <div class="accordion">
                            <div class="accordion-header">
                                <span>+</span>
                                <h3>How long it takes to design?</h3>
                            </div>
                            <div class="accordion-body">
                                <p></p>
                            </div>
                        </div>
                        <div class="accordion">
                            <div class="accordion-header">
                                <span>+</span>
                                <h3>How did you come up with mechine learning?</h3>
                            </div>
                            <div class="accordion-body">
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}



            {/* GO BACK ON TOP BUTTON - MAY NEED TO BE A COMPONENT */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bg-[#002e5f] text-white w-12 h-12 flex items-center justify-center text-5xl 
                     right-4 bottom-4 shadow-lg hover:bg-blue-800 opacity-100 transition-opacity duration-300"
                >
                    <ChevronUpOutline className="w-[30px] h-[30px]" />
                </button>
            )}

        </main>
    );
}
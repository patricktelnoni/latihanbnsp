'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-4 gap-4 lg:gap-0">
                    {/* Logo Section */}
                    <div className="flex items-center justify-between w-full lg:w-auto">
                        <div className="flex items-center">
                            <Image
                                src="/images/img_header_logo.png"
                                alt="The Food Ninja Blog Logo"
                                width={132}
                                height={34}
                                className="w-[132px] h-[34px]"
                                priority
                            />
                        </div>

                        {/* Mobile Hamburger Menu */}
                        <button
                            className="block lg:hidden p-2"
                            aria-label="Toggle menu"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-text-brown"
                            >
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Menu */}
                    <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block w-full lg:w-auto`}>
                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 mt-4 lg:mt-0">
                            <button
                                className="text-left lg:text-center px-0 py-2 lg:py-0 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                                style={{
                                    fontSize: '18px',
                                    fontFamily: 'Roboto',
                                    fontWeight: '400',
                                    lineHeight: '22px',
                                    color: '#5f5b58'
                                }}
                                role="menuitem"
                            >
                                Blog
                            </button>

                            <button
                                className="text-left lg:text-center px-0 py-2 lg:py-0 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                                style={{
                                    fontSize: '18px',
                                    fontFamily: 'Roboto',
                                    fontWeight: '400',
                                    lineHeight: '22px',
                                    color: '#5f5b58'
                                }}
                                role="menuitem"
                            >
                                About
                            </button>

                            <button
                                className="text-left lg:text-center px-0 py-2 lg:py-0 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                                style={{
                                    fontSize: '18px',
                                    fontFamily: 'Roboto',
                                    fontWeight: '400',
                                    lineHeight: '22px',
                                    color: '#5f5b58'
                                }}
                                role="menuitem"
                            >
                                Contact
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
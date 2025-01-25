import React, { useState } from 'react';

const Navbar2 = () => {
    type MenuItem = {
        id: string;
        icon: string;
        label: string;
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menu: MenuItem[] = [
        { id: 'Prophecies', icon: 'ri-sun-fill', label: 'Prophecies' },
        { id: 'Services', icon: 'ri-customer-service-2-fill', label: 'Services' },
        { id: 'Store', icon: 'ri-store-2-fill', label: 'Store' },
        { id: 'Blogs', icon: 'ri-news-fill', label: 'Blogs' },
        { id: 'Aboutus', icon: 'ri-team-fill', label: 'About us' },
        { id: 'Contacts', icon: 'ri-phone-fill', label: 'Contacts' },
    ];

    return (
        <div>
            <div className="bg-black py-4 mob-lg:py-8 px-4 mob-lg:px-12 bg-[url('/spacefooter.jpg')] gap-x-5 items-center grid grid-cols-7">
                <div className="col-span-7 border-0 border-white flex justify-end">
                    {/* Menu Button - 1 */}
                    <button
                        className="bg-yellow-500 w-8 mob-lg:w-10 h-8 mob-lg:h-10 text-2xl rounded-lg"
                        onClick={toggleMenu}
                    >
                        <i className="ri-menu-line"></i>
                    </button>
                </div>
                <div className="text-red-600 font-felix text-xl mob-md:text-2xl mob-lg:text-4xl border-0 border-white col-span-7 flex justify-center">
                    COSMIC PROPHECIES
                </div>
                <div className="flex justify-center col-span-7 items-center gap-2">
                    <div className="bg-white h-[1px] w-full" />
                    <div>
                        <img src="logo.png" className="h-10 mob-lg:h-14 w-24 mob-lg:w-28" />
                    </div>
                    <div className="bg-white h-[1px] w-full" />
                </div>
            </div>

            {/*---------menu list----------*/}
            {isMenuOpen && (
                <div className="fixed top-0 right-0 h-full w-56 bg-black px-6 py-4">
                    <div className="flex justify-end">
                        {/* Menu Button - 2 */}
                        <button
                            className="bg-yellow-500 w-8 mob-lg:w-10 h-8 mob-lg:h-10 text-2xl rounded-lg"
                            onClick={toggleMenu}
                        >
                            <i className="ri-menu-line"></i>
                        </button>
                    </div>
                    <div className="border-0 border-white px-4 py-8 text-yellow-400">
                        {menu.map((item) => (
                            <div key={item.id}>
                                <div className="flex mt-4 gap-4">
                                    <i className={item.icon} />
                                    <p>{item.label}</p>
                                </div>
                                <div className="bg-red-400 h-[1px] w-full mt-5" />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar2;

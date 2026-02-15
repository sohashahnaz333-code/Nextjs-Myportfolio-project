'use client';

import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
//import path from 'node:path';
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
const {theme, toggleTheme} = useTheme ();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50">
      <div className='container max-w-7xl mx-auto px-4'>

        {/* Navbar Row */}
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link href="/" className='text-xl font-bold hover:text-primary transition-colors'>
            SHAHNAZ FATIMA
          </Link>
          {/*Desktop Menu*/}
          <div className="hidden md:flex items-center space-x-8 ">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-primary transition-colors${isActive ? "font-medium text-primary" : ""
                    }`}
                >
                  {item.label}
                </Link>
              )

            }

            )}
            {/* Theme Toggle */}
            <button onClick={toggleTheme} className='p-2 rounded-lg hover:bg-gray-100 dark:bg-gray-800  dark:text-primary text-primary transition-colors cursor-pointer'>
              {
                theme === "dark" ? (
                  <SunIcon className='w-5 h-5' />
                )
                  : (
                    <MoonIcon className='w-5 h-5' />
                  )


              }
            </button>
          </div>
          {/* humburger & XMarkIcon Mobile Menu Button */}
          <button onClick={toggleMobileMenu}
            className='md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800   dark:text-white cursor-pointer'>
            {
              isMobileMenuOpen ? (<XMarkIcon className='w-6 h-6' />) : (<Bars3Icon className='w-6 h-6' />)


            }

          </button>

        </div>

        {/* Mobile Menu*/}
        {
          isMobileMenuOpen && (
            <div className='absolute top-16 left-0 w-full  bg-gray-100 dark:bg-gray-900 border-t'>
              <div className='flex flex-col px-4 py-4 space-y-4'>
                {
                  menuItems.map((item, index) => (
                    <div key={index} onClick={toggleMobileMenu} className='px-4'>
                      <Link href={item.href} className='block py-2 hover:text-primary transition-colors'>{item.label}</Link>
                    </div>
                  ))
                }
                <div>
                  <button onClick={toggleTheme} className=' flex items-center py-2 hover:text-primary transition-colors'>
                    {
                      theme === "dark" ? (
                        <> <SunIcon className='w-5 h-5 mr-2' />Dark Mode</>
                      )
                        : (
                          <><MoonIcon className='w-5 h-5 mr-2' />Light Mode</>
                        )
                    }
                  </button>
                </div>
              </div>
            </div>

          )
        }

      </div>

    </nav>
  )
} 
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { IoLogoLinkedin } from "react-icons/io5"
import { MailIcon } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-900 bg-clip-text text-transparent"
            >
              Shahnaz Fatima
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              © {new Date().getFullYear()} All rights reserved. built with Next.js
            </p>
          </div>

          {/* Right - Social Icons */}
          <div className="flex items-center space-x-6">
            
            <Link
              href="https://github.com/"
              target="_blank"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-transform duration-300 hover:scale-110"
            >
              <FaGithub className="w-6 h-6" />
            </Link>

            <Link
              href="https://www.instagram.com/react6070/"
              target="_blank"
              className="text-gray-500 dark:text-gray-400 hover:text-pink-500 transition-transform duration-300 hover:scale-110"
            >
              <FaInstagram className="w-6 h-6" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/shahnaz-fatima-883967241/"
              target="_blank"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-transform duration-300 hover:scale-110"
            >
              <IoLogoLinkedin className="w-6 h-6" />
            </Link>

            <Link
              href="mailto:sohashahnaz333@gmail.com"
              className="text-gray-500 dark:text-gray-400 hover:text-red-500 transition-transform duration-300 hover:scale-110"
            >
              <MailIcon className="w-6 h-6" />
            </Link>

          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer

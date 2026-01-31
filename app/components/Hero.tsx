'use client';

import Link from "next/link";
import { MailIcon } from "lucide-react";
import Image from 'next/image';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { IoLogoLinkedin } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="py-28 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center px-4">

        {/* Profile Image */}
        <div className="relative flex justify-center mb-6">
          <div className="rounded-full ring-4 ring-gradient-to-r from-blue-500 to-purple-600 p-1">
            <Image 
              src="/profile.jpeg" 
              alt="profile image" 
              width={200} 
              height={200} 
              className="rounded-full w-32 h-32 object-cover"
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          Hi, I am <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Shahnaz</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Frontend Developer from Bangladesh. Currently building modern React apps. Contact me below.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-10">
          <Link href="https://github.com/sohashahnaz333-code" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition transform hover:scale-110">
            <FaGithub className="w-6 h-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/shahnaz-fatima-883967241/" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition transform hover:scale-110">
            <IoLogoLinkedin className="w-6 h-6" />
          </Link>
          <Link href="https://www.instagram.com/react6070/" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition transform hover:scale-110">
            <FaInstagram className="w-6 h-6" />
          </Link>
          <Link href="mailto:sohashahnaz333@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition transform hover:scale-110">
            <MailIcon className="w-6 h-6" />
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link 
            href="/projects" 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold
            hover:opacity-90 transition transform hover:-translate-y-1"
          >
            View Projects
          </Link>
          <Link 
            href="/contact" 
            className="bg-gray-500 dark:bg-gray-700 text-white px-8 py-3 rounded-full font-semibold
            hover:bg-gray-400 dark:hover:bg-gray-600 transition transform hover:-translate-y-1"
          >
            Contact Me
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Hero;

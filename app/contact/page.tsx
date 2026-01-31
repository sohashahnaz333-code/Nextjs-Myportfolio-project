'use client'

import React from 'react'

export default function ContactPage() {
  return (
    <section className="min-h-screen py-20 px-4 bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-12">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          Contact Me
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
          Have a question or want to work together? Fill out the form below 👇
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700
              bg-white dark:bg-gray-800 text-gray-900 dark:text-white
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700
              bg-white dark:bg-gray-800 text-gray-900 dark:text-white
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700
              bg-white dark:bg-gray-800 text-gray-900 dark:text-white
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold
            hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

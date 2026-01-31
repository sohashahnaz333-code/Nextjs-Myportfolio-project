import React from 'react'
import { FaCode, FaLaptop } from 'react-icons/fa'

const AboutPage = () => {
  return (
    <section className="container max-w-7xl mx-auto px-4 py-20">

      {/* Hero */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Me
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-100 max-w-3xl mx-auto leading-relaxed">
          I’m currently working on several personal projects focused on
          building responsive and modern web applications with React.js,
          Tailwind CSS, and Node.js. My projects reflect my growing expertise in
          component-based design, API integration, and user-centered development.
          Through self-driven learning and experimentation, I’ve developed a strong
          understanding of how to structure clean, maintainable frontend code and create smooth,
          interactive user experiences.I’m passionate about turning ideas into functional interfaces,
          continuously exploring new technologies, and improving my full-stack development skills
          every day
        </p>
      </div>

      {/* Skills */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Frontend */}
          <div className="group bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-md
            hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <FaCode className="h-10 w-10 mb-4 text-blue-600 group-hover:scale-110 transition" />
            <h3 className="text-xl font-semibold mb-4">
              Frontend
            </h3>
            <ul className="text-gray-600 dark:text-gray-400 space-y-2">
              <li>React.js</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="group bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-md
            hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <FaLaptop className="h-10 w-10 mb-4 text-purple-600 group-hover:scale-110 transition" />
            <h3 className="text-xl font-semibold mb-4">
              Backend
            </h3>
            <ul className="text-gray-600 dark:text-gray-400 space-y-2">
              <li>Node.js</li>
              <li>PostgreSQL</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="group bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-md
            hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <FaLaptop className="h-10 w-10 mb-4 text-green-600 group-hover:scale-110 transition" />
            <h3 className="text-xl font-semibold mb-4">
              Tools & Others
            </h3>
            <ul className="text-gray-600 dark:text-gray-400 space-y-2">
              <li>Git / GitHub</li>
              <li>VS Code</li>
              <li>Vercel</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Experience */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Experience
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-2">
              React Frontend Developer (Personal Projects)
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Sep 2025 – Present · Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Education
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-2">
              Bachelor of Computer Science & Engineering
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              2018 – 2022
            </p>
          </div>
        </div>
      </section>

    </section>
  )
}

export default AboutPage

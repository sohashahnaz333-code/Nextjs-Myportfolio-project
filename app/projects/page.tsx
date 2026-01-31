import React from 'react'
import { projects } from '@/contents/project'
import { article } from 'framer-motion/m'
import Link from "next/link";
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa6'
import { FaExternalLinkAlt } from 'react-icons/fa';

function projectspage() {
  return (
    <div className='container max-w-7xl mx-auto py-20'>
      <h1 className='text-4xl font-bold mb-4 text-center'>My Project</h1>
      <p className='text-lg text-secondary mb-24 text-center'>Here Some of my Recent  Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group bg-white dark:dark:bg-indigo-950 rounded-2xl overflow-hidden
                   shadow-md hover:shadow-xl transition-all duration-300
                   hover:-translate-y-2"
          >

            {/* Image */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full
                           bg-gradient-to-r from-blue-500/10 to-purple-500/10
                           text-blue-600 dark:text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center justify-between">
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="flex items-center gap-2 text-sm font-medium
                         text-gray-600 dark:text-gray-400 hover:text-blue-600
                         transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                  Code
                </Link>

                <Link
                  href={project.demoLink || project.githubLink}
                  target="_blank"
                  className="flex items-center gap-2 text-sm font-medium
                         text-gray-600 dark:text-gray-400 hover:text-purple-600
                         transition-colors"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  Live Demo
                </Link>
              </div>
            </div>

          </article>
        ))}
      </div>
    </div>
  )
}

export default projectspage
import { blogs } from '@/contents/blog'
import Link from "next/link"
import { FaCalendarAlt, FaClock } from 'react-icons/fa'

const Blogs = () => {
  return (
    <section className="py-20 container max-w-7xl mx-auto px-4">
      
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
        Latest Blog Posts
      </h2>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <article
            key={blog.slug}
            className="group bg-white dark:bg-blue-950 rounded-2xl p-6
            shadow-md hover:shadow-xl transition-all duration-300
            hover:-translate-y-2"
          >
            <Link href={`/blogs/${blog.slug}`} className="block">
              
              <h3 className="text-xl font-semibold mb-3
                text-gray-800 dark:text-white
                group-hover:text-blue-600 transition-colors">
                {blog.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                {blog.excerpt}
              </p>
            </Link>

            {/* Meta */}
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-2">
                <FaCalendarAlt />
                {new Date(blog.date).toLocaleDateString()}
              </span>

              <span className="flex items-center gap-2">
                <FaClock />
                {blog.readTime}
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-14">
        <Link
          href="/blogs"
          className="inline-block px-8 py-3 rounded-full
          bg-gradient-to-r from-blue-600 to-purple-600
          text-white font-medium
          hover:opacity-90 transition"
        >
          View All Posts
        </Link>
      </div>

    </section>
  )
}

export default Blogs

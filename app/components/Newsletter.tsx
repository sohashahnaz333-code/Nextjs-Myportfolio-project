export default function Newsletter() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto bg-white dark:bg-blue-950 rounded-3xl shadow-xl overflow-hidden p-8 md:p-12 transform animate-slide-up">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Text Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Subscribe to My Newsletter
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Get the latest updates on my projects, blog posts, and tech insights delivered straight to your inbox.
            </p>
          </div>

          {/* Form Section */}
          <form className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600
                bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-white
                focus:outline-none focus:ring-2 focus:ring-gradient-to-r focus:ring-blue-500 transition"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600
                text-white font-semibold hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

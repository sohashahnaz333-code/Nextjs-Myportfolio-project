import { blogs } from "@/contents/blog"
import { notFound } from "next/navigation"
import Link from "next/link"

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogDetails({ params }: PageProps) {

  // ✅ unwrap params
  const { slug } = await params

  console.log("Slug:", slug)

  const blog = blogs.find(
    (b) => b.slug === slug
  )

  console.log("Matched blog:", blog)

  if (!blog) return notFound()

  return (
    <div className="max-w-3xl mx-auto py-20 px-4">

      <Link href="/blogs" className="text-blue-600">
        ← Back to Blogs
      </Link>

      <h1 className="text-4xl font-bold mt-4">
        {blog.title}
      </h1>

      <p className="text-gray-500 mt-2">
        {blog.date} • {blog.readTime}
      </p>

      <div className="mt-6 whitespace-pre-line">
        {blog.content}
      </div>

    </div>
  )
}

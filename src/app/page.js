'use client'

import FormLogin from "@/components/FormLogin"
import Navbar from "@/components/Navbar"
import Link from "next/link"
import { useSelector } from "react-redux";

export default function Home() {
  const blogs = useSelector((state) => state.blog.value.posts);
  const isLoadingBlog = useSelector((state) => state.blog.value.isLoading);

  return (
    <>
      <Navbar />
      <div>
        <h3>Belajar Redux</h3>
        <p>Ini aplikasi sederhana</p>

        <Link href={'/profile'}>Profile</Link>
      </div>
      <form>
        <FormLogin />
      </form>
      
      <h1>News</h1>
      {isLoadingBlog ? 'loading' : (
          <ul>
              {blogs.map((blog, i) => (<li key={`blog-${i}`}>{blog.title}</li>))}
          </ul>
      )}
    </>
  )
}

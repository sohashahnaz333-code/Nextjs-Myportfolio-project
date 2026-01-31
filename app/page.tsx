'use client';

import Blog from "./components/Blog";
import Hero from "./components/Hero"
import Newsletter from "./components/Newsletter";
import Project from "./components/Project";
import './globals.css'

export default function Home() {
  return (
     <div>
       <Hero/>
       <Project/>
       <Blog/>
       <Newsletter/>
     </div>
  )
}

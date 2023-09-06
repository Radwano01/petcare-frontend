import React from 'react'
import "./blogsection.scss"
import Blog from '../../blog/Blog'

const BlogSection = () => {
  return (
    <div>
        <div className="slider-blog-section">
            <div className="slider-blog-section-container">
                Home / Blog
                <h1>OUR BLOG</h1>
            </div>
        </div>
        <Blog/>
    </div>
  )
}

export default BlogSection
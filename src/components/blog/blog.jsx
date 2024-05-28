import React from 'react'
import "./blog.css"
import { BiArrowBack } from 'react-icons/bi'


const Blog = () => {
  return (
   <section>
    <div className='container blog_container'>
      <div className='back'>
        <a href="/"><BiArrowBack/></a>
      <h3>Blog Page</h3>
      </div>

        <small className='badge'>3 Post Published</small>
        <p>These are my own words. Shaped by my own experiences. If you find something confusing, wrong or misleading, please let me know. If you find anything helpful, please consider sharing to your friends.</p>

    </div>
   </section>
  )
}

export default Blog
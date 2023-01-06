import React from "react";
import './posts.css';

import post_img1 from "../../assets/images/photo-1618220179428-22790b461013.webp";
import post_img2 from "../../assets/images/photo-1618221195710-dd6b41faaea6.webp";
import post_img3 from "../../assets/images/photo-1586023492125-27b2c045efd7.webp";

const Posts = () => {
  return (
    <section id="blog">
      <div className="pt-14 pb-8 mx-auto max-w-6xl">
        <h3 className="mb-2 text-center leading-10 text-4xl font-bold text-black tracking-tight primary_text editable">Latest
          Posts</h3>
        <div className="px-0 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            <div className="flex">
              <div className="pt-1 mr-6 text-center">
                <div className="px-2 pb-1 border-b border-gray-400">
                  <p className="text-sm text-gray-500  editable">Jan</p>
                </div>
                <div className="px-2 pt-1">
                  <p className="text-lg font-bold text-gray-900  editable">26</p>
                </div>
              </div>
              <div className="blog_post w-full">
                <div className="mb-2">
                  <a href="#" className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-teal-500 hover:text-teal-800  editable">HOME DECOR</a>
                </div>
                <div className="mb-2">
                  <a href="#" aria-label="Article" className="inline-block text-2xl font-bold leading-7 text-gray-900 transition-colors duration-200 tracking-tight hover:text-teal-800 w-full primary_text editable" data-content="blog-titles">Designing The Perfect Home Office: Tips And Tricks</a>
                </div>
                <p className="mb-5 text-gray-500 w-full  editable" data-subcontent="blog-intros">Your home
                  office is an important room in your life because it's usually where you spend a staggering number of
                  hours. So, in order to make the most of your workplace, design your home office with thes...</p>
                <div className="flex items-center">
                  <a href="#" aria-label="Author" title="Author" className="mr-3">
                    <img src={post_img1} alt="avatar" className="object-cover w-10 h-10 rounded-full shadow-sm  is_avatar img-editable" />
                  </a>
                  <div>
                    <a href="#" aria-label="Author" title="Author" className="font-semibold text-gray-800 transition-colors duration-200 hover:text-teal-800  editable">Kareem sayed</a>
                    <p className="text-sm font-medium leading-4 text-gray-500">Author</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="pt-1 mr-6 text-center">
                <div className="px-2 pb-1 border-b border-gray-400">
                  <p className="text-sm text-gray-500  editable">Jan</p>
                </div>
                <div className="px-2 pt-1">
                  <p className="text-lg font-bold text-gray-900  editable">01</p>
                </div>
              </div>
              <div className="blog_post w-full">
                <div className="mb-2">
                  <a href="#" className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-teal-500 hover:text-teal-800  editable">Office DECOR</a>
                </div>
                <div className="mb-2">
                  <a href="#" aria-label="Article" className="inline-block text-2xl font-bold leading-7 text-gray-900 transition-colors duration-200 tracking-tight hover:text-teal-800 w-full primary_text editable" data-content="blog-titles">Interior Design Services: A Beginner's Guide</a>
                </div>
                <p className="mb-5 text-gray-500 w-full  editable" data-subcontent="blog-intros">Get
                  professional interior design services as a beginner! From simple home makeovers to large-scale projects,
                  our team can design an interior that's perfect for you.</p>
                <div className="flex items-center">
                  <a href="#" aria-label="Author" title="Author" className="mr-3">
                    <img src={post_img3} alt="avatar" className="object-cover w-10 h-10 rounded-full shadow-sm  is_avatar img-editable" />
                  </a>
                  <div>
                    <a href="#" aria-label="Author" title="Author" className="font-semibold text-gray-800 transition-colors duration-200 hover:text-teal-800  editable">Krishna Chaitanya</a>
                    <p className="text-sm font-medium leading-4 text-gray-500">Author</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="pt-1 mr-6 text-center">
                <div className="px-2 pb-1 border-b border-gray-400">
                  <p className="text-sm text-gray-500  editable">Dec</p>
                </div>
                <div className="px-2 pt-1">
                  <p className="text-lg font-bold text-gray-900  editable">22</p>
                </div>
              </div>
              <div className="blog_post w-full">
                <div className="mb-2">
                  <a href="#" className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-teal-500 hover:text-teal-800  editable">Modular kitchen</a>
                </div>
                <div className="mb-2">
                  <a href="#" aria-label="Article" className="inline-block text-2xl font-bold leading-7 text-gray-900 transition-colors duration-200 tracking-tight hover:text-teal-800 w-full primary_text editable" data-content="blog-titles">Interior Design: Thoughts From A Professional</a>
                </div>
                <p className="mb-5 text-gray-500 w-full  editable" data-subcontent="blog-intros">"Interior
                  design can be complex, intimidating and tricky.</p>
                <div className="flex items-center">
                  <a href="#" aria-label="Author" title="Author" className="mr-3">
                    <img src={post_img2} alt="avatar" className="object-cover w-10 h-10 rounded-full shadow-sm is_avatar img-editable" />
                  </a>
                  <div>
                    <a href="#" className="font-semibold text-gray-800 transition-colors duration-200 hover:text-teal-800  editable">Daniel K</a>
                    <p className="text-sm font-medium leading-4 text-gray-500">Author</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}

export default Posts;
import React from "react";
import './portfolio.css';

const Portfolio = () => {
  return (
    <section className="flex-col justify-center flex gap-4 items-start py-12 bg-teal-50" id="portfolio">
      <div className="w-full mx-auto">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="text-base text-teal-800 font-semibold tracking-wide uppercase accent_text editable">Portfolio</h2>
              <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-black dark:text-black sm:text-4xl primary_text section_title editable" data-content="website-headlines">World Class Interior Design Serivices</p>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Portfolio;
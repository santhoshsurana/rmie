import React from "react";

const NotFound = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-9xl font-black text-teal-900 ">404</div>
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Oops page not found !</h1>
          <p className="mb-8 leading-relaxed">The page you are looking for is not found, here are the few links you can get help.</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-teal-900 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg">Services</button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Help</button>
          </div>
        </div>
      </div>
    </section>


  )
}

export default NotFound;
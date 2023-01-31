import React from "react";
import "./features.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faImage, faMagnifyingGlass, faLightbulb } from "@fortawesome/free-solid-svg-icons";
const Features = () => {
    return (
        <section>
            <div className="container px-5 py-24 mx-auto">
                <h1 className="sm:text-3xl text-gray-900 text-2xl font-medium title-font text-center mb-20">Transform Your Space with Features Of
                    <br className="hidden sm:block" />Our RM Interior Era
                </h1>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div className="p-4 md:w-1/3 flex">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-teal-100 text-teal-900 mb-4 flex-shrink-0">
                            <FontAwesomeIcon icon={faImage} size='xl'></FontAwesomeIcon>
                        </div>
                        <div className="flex-grow pl-6">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Room Visualizer:</h2>
                            <p className="leading-relaxed text-base"> This feature allows users to upload an image of their room or select a pre-designed room layout, and then experiment with different interior design elements such as furniture, flooring, lighting, and color schemes.</p>
                            <a className="mt-3 text-teal-900 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-teal-100 text-teal-900 mb-4 flex-shrink-0">
                        <FontAwesomeIcon icon={faMagnifyingGlass} size='xl'></FontAwesomeIcon>
                        </div>
                        <div className="flex-grow pl-6">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Product Finder:</h2>
                            <p className="leading-relaxed text-base">This tool helps users discover interior design products that match their style and budget. Users can specify their preferences, such as style, material, and price range, and the product finder will show them a curated selection of items that fit their criteria.</p>
                            <a className="mt-3 text-teal-900 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-teal-100 text-teal-900 mb-4 flex-shrink-0">
                        <FontAwesomeIcon icon={faLightbulb} size='xl'></FontAwesomeIcon>
                        </div>
                        <div className="flex-grow pl-6">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Inspiration Gallery:</h2>
                            <p className="leading-relaxed text-base"> A collection of professionally designed room photos and interior design ideas, organized by style, room type, and color scheme. Users can browse through the gallery, save their favorite images, and use them as inspiration for their own design projects.</p>
                            <a className="mt-3 text-teal-900 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Features;


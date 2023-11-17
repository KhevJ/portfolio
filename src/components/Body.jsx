import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import BodyContainer from "./BodyContainer";



export default function Body(){


    return (
        <main className="mx-5 mt-16 md:relative md:left-[48vw] md:top-0 md:mx-0 md:mt-0 md:w-[39.5vw] md:pl-[4vw] md:pt-[11vh]">
            <section id="skills-section">
                <h2 className="section-title mb-3 font-rajdhani text-3xl font-extrabold text-black  lg:mb-4 lg:text-4xl xl:mb-5 2xl:text-5xl">Technical Skills</h2>
                <table className="w-full border-separate border-spacing-x-0 border-spacing-y-1.5 xl:border-spacing-y-2">
                <tbody>
                    <tr>
                    <th className=" whitespace-nowrap rounded-l-lg pl-2.5 pr-2.5 text-left text-xs font-semibold text-white lg:pl-3 lg:pr-3 lg:text-sm xl:rounded-l-xl xl:pl-4 xl:pr-4 xl:text-base 2xl:pr-5 2xl:text-lg bg-black">
                        Programming Languages:
                    </th>
                    <td className="skills-table-data-cell skills-table-row-even  rounded-r-lg py-1.5 pr-1.5 xl:rounded-r-xl xl:py-2 xl:pr-2 bg-black">
                        <div className="skills-table-skill-list-container flex flex-row flex-wrap gap-1.5 xl:gap-2">
                        <span className='line-clamp-1 rounded-full border border-white px-1.5 py-0.5 text-xs font-normal text-white lg:px-2 lg:text-xs xl:px-2.5 xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm'>C/C++</span>
                        <span className='line-clamp-1 rounded-full border border-white px-1.5 py-0.5 text-xs font-normal text-white lg:px-2 lg:text-xs xl:px-2.5 xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm'>Java</span>
                        <span className='line-clamp-1 rounded-full border border-white px-1.5 py-0.5 text-xs font-normal text-white lg:px-2 lg:text-xs xl:px-2.5 xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm'>Python</span>
                        <span className='line-clamp-1 rounded-full border border-white px-1.5 py-0.5 text-xs font-normal text-white lg:px-2 lg:text-xs xl:px-2.5 xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm'>JavaScript</span>
                        <span className='line-clamp-1 rounded-full border border-white px-1.5 py-0.5 text-xs font-normal text-white lg:px-2 lg:text-xs xl:px-2.5 xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm'>TypeScript</span>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th className="skills-table-head-cell skills-table-row-odd whitespace-nowrap rounded-l-lg pl-2.5 pr-2.5 text-left text-xs font-semibold text-white lg:pl-3 lg:pr-3 lg:text-sm xl:rounded-l-xl xl:pl-4 xl:pr-4 xl:text-base 2xl:pr-5 2xl:text-lg bg-black">
                        Embedded Development:
                    </th>
                    <td className="skills-table-data-cell skills-table-row-odd  rounded-r-lg py-1.5 pr-1.5 xl:rounded-r-xl xl:py-2 xl:pr-2 bg-black">
                        <div className="skills-table-skill-list-container flex flex-row flex-wrap gap-1.5 xl:gap-2">
                        <span className='line-clamp-1 rounded-full border border-white px-1.5 py-0.5 text-xs font-normal text-white lg:px-2 lg:text-xs xl:px-2.5 xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm'>Arduino</span>
                        <span className='line-clamp-1 rounded-full border border-white px-1.5 py-0.5 text-xs font-normal text-white lg:px-2 lg:text-xs xl:px-2.5 xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm'>PICUART</span>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th className="skills-table-head-cell skills-table-row-even whitespace-nowrap rounded-l-lg pl-2.5 pr-2.5 text-left text-xs font-semibold text-white lg:pl-3 lg:pr-3 lg:text-sm xl:rounded-l-xl xl:pl-4 xl:pr-4 xl:text-base 2xl:pr-5 2xl:text-lg bg-black">
                        Web Development:
                    </th>
                    <td className="skills-table-data-cell skills-table-row-even rounded-r-lg py-1.5 pr-1.5 xl:rounded-r-xl xl:py-2 xl:pr-2 bg-black">
                        <div className="skills-table-skill-list-container flex flex-row flex-wrap gap-1.5 xl:gap-2">
                        <span className='line-clamp-1 rounded-full border border-white px-1.5 py-0.5 text-xs font-normal text-white lg:px-2 lg:text-xs xl:px-2.5 xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm'>HTML</span>
                        <span className='line-clamp-1 rounded-full border border-white px-1.5 py-0.5 text-xs font-normal text-white lg:px-2 lg:text-xs xl:px-2.5 xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm'>CSS</span>
                        <span className='line-clamp-1 rounded-full border border-white px-1.5 py-0.5 text-xs font-normal text-white lg:px-2 lg:text-xs xl:px-2.5 xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm'>React</span>
                        <span className='line-clamp-1 rounded-full border border-white px-1.5 py-0.5 text-xs font-normal text-white lg:px-2 lg:text-xs xl:px-2.5 xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm'>Next.js</span>
                        <span className='line-clamp-1 rounded-full border border-white px-1.5 py-0.5 text-xs font-normal text-white lg:px-2 lg:text-xs xl:px-2.5 xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm'>PHP</span>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th className="skills-table-head-cell skills-table-row-odd  whitespace-nowrap rounded-l-lg pl-2.5 pr-2.5 text-left text-xs font-semibold text-white lg:pl-3 lg:pr-3 lg:text-sm xl:rounded-l-xl xl:pl-4 xl:pr-4 xl:text-base 2xl:pr-5 2xl:text-lg bg-black">
                        Databases:
                    </th>
                    <td className="skills-table-data-cell skills-table-row-odd rounded-r-lg py-1.5 pr-1.5 xl:rounded-r-xl xl:py-2 xl:pr-2 bg-black">
                        <div className="skills-table-skill-list-container flex flex-row flex-wrap gap-1.5 xl:gap-2">
                        <span className='line-clamp-1 rounded-full border border-white px-1.5 py-0.5 text-xs font-normal text-white lg:px-2 lg:text-xs xl:px-2.5 xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm'>Relational Databases (SQL)</span>
                        <span className='line-clamp-1 rounded-full border border-white px-1.5 py-0.5 text-xs font-normal text-white lg:px-2 lg:text-xs xl:px-2.5 xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm'>MongoDB</span>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th className="skills-table-head-cell skills-table-row-even  whitespace-nowrap rounded-l-lg pl-2.5 pr-2.5 text-left text-xs font-semibold text-white lg:pl-3 lg:pr-3 lg:text-sm xl:rounded-l-xl xl:pl-4 xl:pr-4 xl:text-base 2xl:pr-5 2xl:text-lg bg-black">
                        Tools:
                    </th>
                    <td className="skills-table-data-cell skills-table-row-even rounded-r-lg py-1.5 pr-1.5 xl:rounded-r-xl xl:py-2 xl:pr-2 bg-black">
                        <div className="skills-table-skill-list-container  flex flex-row flex-wrap gap-1.5 xl:gap-2">
                        <span className='line-clamp-1 rounded-full border border-white px-1.5 py-0.5 text-xs font-normal text-white lg:px-2 lg:text-xs xl:px-2.5 xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm'>GitHub</span>
                        <span className='line-clamp-1 rounded-full border border-white px-1.5 py-0.5 text-xs font-normal text-white lg:px-2 lg:text-xs xl:px-2.5 xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm'>Visual Studio Code</span>
                        <span className='line-clamp-1 rounded-full border border-white px-1.5 py-0.5 text-xs font-normal text-white lg:px-2 lg:text-xs xl:px-2.5 xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm'>XCode</span>
                        <span className='line-clamp-1 rounded-full border border-white px-1.5 py-0.5 text-xs font-normal text-white lg:px-2 lg:text-xs xl:px-2.5 xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm'>Jira</span>
                        <span className='line-clamp-1 rounded-full border border-white px-1.5 py-0.5 text-xs font-normal text-white lg:px-2 lg:text-xs xl:px-2.5 xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm'>Eclipse</span>
                        </div>
                    </td>
                    </tr>
                    
                </tbody>
                </table>
            </section>
            <footer>
                <p className="mt-32 pb-16 text-center text-xs font-medium italic leading-normal text-black md:pb-[11vh] md:text-left lg:text-sm xl:text-base 2xl:text-lg">
                Thank you for visiting my website. It was built with ReactJs and
                Tailwind CSS–and deployed with Vercel. If you want to look at the
                source code, you can view it{" "}
                    <a
                        href="https://github.com/KhevJ/portfolio"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="font-bold hover:text-red-400"
                    >
                        here
                    </a>
                .
                </p>
            </footer>
        </main>
    )




}
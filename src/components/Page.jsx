import React from 'react';
import Navbar from "./Navbar";
import Resume from "../assets/Khevin_Jugessur_Resume.pdf"


export default function Page(){


    return (
        <div>
            <div className=" text-lg">
                <Navbar/>
                <header
                    id="header-section"
                    className="mx-5 pt-[4.5rem] md:fixed md:mx-0 md:ml-[12.5vw] md:h-[89vh] md:w-[35.5vw] md:pt-[11vh]"
                >
                    <h1 className=" font-rajdhani text-5xl font-black  lg:text-6xl xl:text-7xl 2xl:text-8xl">
                        Khevin Jugessur
                    </h1>
                    <p className="mt-4 text-xs font-semibold leading-normal text-off-black-900 dark:text-light-black-100 lg:mt-5 lg:text-sm 2xl:text-base">
                        I am currently pursuing a bachelor’s degree in software
                        engineering with a minor in mechatronics, and I am looking for an internship to grow my
                        skills as a software developer.
                    </p>
                    <div className="mt-4 flex flex-row gap-5 lg:mt-6 2xl:mt-8 2xl:gap-6">
                        <a
                        href= '../assets/Khevin_Jugessur_Resume.pdf'
                        target="_blank"
                        className="rounded bg-black px-4 py-1.5 text-xs font-semibold text-white hover:bg-light-red  lg:px-5 lg:py-2 lg:text-xs xl:rounded-md xl:px-6 2xl:rounded-lg 2xl:px-7 2xl:py-2.5 2xl:text-base"
                        >
                            Resume
                        </a>
                        <div className="rounded border border-black bg-white px-2 py-1 text-xs font-semibold text-black  lg:border-2 lg:px-5 lg:py-1.5 lg:text-xs xl:rounded-md xl:px-6 2xl:rounded-lg 2xl:px-7 2xl:py-2 2xl:text-base">
                            khevinjug@gmail.com
                        </div>
                    </div>
                    
                </header>
            </div>
        </div>
    )
}
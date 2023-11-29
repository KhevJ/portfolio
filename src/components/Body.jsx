import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import BodyContainer from "./BodyContainer";
import {Image} from 'react-native';
import ChessVideo from '../assets/chess-game-video.mp4'
import styles from "../modules/Body.module.css"



export default function Body(){

    //For keeping track of if projects is expanded
    const [sectionExpandedP1, setSectionExpandedP1] = useState(false);
    const [sectionExpandedP2, setSectionExpandedP2] = useState(false);
    const [sectionExpandedP3, setSectionExpandedP3] = useState(false);
    const [sectionExpandedPH1, setSectionExpandedPH1] = useState(false);

    // For keeping track of if education is expanded
    const [sectionExpandedE1, setSectionExpandedE1] = useState(false);

    const [otherProjectsVisible, setOtherProjectsVisible] = useState(false);



    const toggleUnhideOtherProjects = () => {
        // Pause any playing video players if you wanna add them in the future
        
        
    
        setOtherProjectsVisible((prevState) => {
          return !prevState;
        });
    };


    return (
        <main className="mx-5 mt-16 md:relative md:left-[48vw] md:top-0 md:mx-0 md:mt-0 md:w-[39.5vw] md:pl-[4vw] md:pt-[11vh]">
            <section id="projects-section">
                <h2 className="section-title mb-3 font-rajdhani text-3xl font-extrabold text-black lg:mb-4 lg:text-4xl xl:mb-5 2xl:text-5xl">Projects</h2>
                <BodyContainer
                expanded={sectionExpandedP1}
                expandFunction={setSectionExpandedP1}
                
                >
                <h3 className="section-header text-xs font-bold text-black  lg:text-sm xl:text-base 2xl:text-lg">Chess Multiplayer</h3>
                <div className="section-subheader-container mt-1 flex flex-row items-center gap-2 text-xs font-semibold text-black  lg:text-2xs xl:mt-1.5 xl:gap-2.5 xl:text-xs 2xl:mt-2 2xl:gap-3 2xl:text-base">
                    <span className="shrink-0">Full Stack Developer</span>
                    <div className="dot h-[2px] w-[2px] rounded-full bg-black xl:h-[3px] xl:w-[3px] 2xl:h-1 2xl:w-1"></div>
                    <span className="section-date truncate pr-1 italic">
                    October 2023 - November 2023
                    </span>
                </div>
                <div className="section-tag-container my-2 flex flex-row flex-wrap items-center gap-2 xl:my-2.5 xl:gap-2.5 2xl:my-3 2xl:gap-3">
                    <span className="section-tag border-black  rounded-full  bg-black px-2 py-0.5 text-center text-xs font-normal text-pink-300 lg:px-2.5 lg:text-2xs xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm">React</span>
                    <span className="section-tag rounded-full bg-black px-2 py-0.5 text-center text-xs font-normal text-pink-300 lg:px-2.5 lg:text-2xs xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm">Material UI</span>
                    <span className="section-tag rounded-full bg-black px-2 py-0.5 text-center text-xs font-normal text-pink-300 lg:px-2.5 lg:text-2xs xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm">ExpressJS</span>
                    <span className="section-tag rounded-full bg-black px-2 py-0.5 text-center text-xs font-normal text-pink-300 lg:px-2.5 lg:text-2xs xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm">NodeJS</span>
                    <span className="section-tag rounded-full bg-black px-2 py-0.5 text-center text-xs font-normal text-pink-300 lg:px-2.5 lg:text-2xs xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm">socket.io</span>
                    <span className="section-tag rounded-full bg-black px-2 py-0.5 text-center text-xs font-normal text-pink-300 lg:px-2.5 lg:text-2xs xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm">SeleniumIDE</span>
                </div>
                <p className="section-paragraph text-xs font-medium text-black lg:text-xs lg:leading-normal xl:text-sm 2xl:text-base mb-3 xl:mb-3.5 2xl:mb-4">
                    This is a chess game where you can challenge your friends to game of chess. The connection between the 2 players were done using a TCP connection using socket.io with expressJS and NodeJS . The front-end was made using ReactJS and Material UI library. The testing was done using the SeleniumIDE.
                </p>
                <div
                    className={`${
                        sectionExpandedP1 && styles.section_showcase_expanded 
                        } ${styles.section_showcase_container }`}
                >
                    <div className="overflow-hidden ">
                        <div
                            onClick={(event) => {
                            window.open("https://github.com/KhevJ/chess-app");
                            event.stopPropagation();
                            }}
                            className="github-link-button flex w-fit flex-row items-center gap-1.5 rounded bg-black py-1.5 pl-2 outline-none hover:bg-red-400  lg:gap-2 lg:py-2 lg:pl-3"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 256 256"
                            className='h-3 w-3 fill-white lg:h-3.5 lg:w-3.5 xl:h-4 xl:w-4'
                            >
                            <path d="M136.37 187.53a12 12 0 010 17l-5.94 5.94a60 60 0 01-84.88-84.88l24.12-24.11A60 60 0 01152 99a12 12 0 11-16 18 36 36 0 00-49.37 1.47l-24.1 24.08a36 36 0 0050.92 50.92l5.94-5.94a12 12 0 0116.98 0zm74.08-142a60.09 60.09 0 00-84.88 0l-5.94 5.94a12 12 0 0017 17l5.94-5.94a36 36 0 0150.92 50.92l-24.11 24.12A36 36 0 01120 139a12 12 0 10-16 18 60 60 0 0082.3-2.43l24.12-24.11a60.09 60.09 0 00.03-84.91z" />
                            </svg>
                            <span className='pr-3 text-2xs font-semibold text-white lg:pr-4 lg:text-xs xl:text-sm'>Link to Github repository</span>
                        </div>

                    
                    
                    </div>
                    <div
                    className={`${
                        sectionExpandedP1 && styles.section_showcase_expanded 
                        } ${styles.section_showcase_container }`}
                >
                    <div className='overflow-hidden '>
                        <div
                            onClick={(event) => {
                            window.open("https://chess-game-8e69b6359bbf.herokuapp.com");
                            event.stopPropagation();
                            }}
                            className="github-link-button flex w-fit flex-row items-center gap-1.5 rounded bg-black py-1.5 pl-2 outline-none hover:bg-red-400  lg:gap-2 lg:py-2 lg:pl-3"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 256 256"
                            className='h-3 w-3 fill-white lg:h-3.5 lg:w-3.5 xl:h-4 xl:w-4'
                            >
                            <path d="M136.37 187.53a12 12 0 010 17l-5.94 5.94a60 60 0 01-84.88-84.88l24.12-24.11A60 60 0 01152 99a12 12 0 11-16 18 36 36 0 00-49.37 1.47l-24.1 24.08a36 36 0 0050.92 50.92l5.94-5.94a12 12 0 0116.98 0zm74.08-142a60.09 60.09 0 00-84.88 0l-5.94 5.94a12 12 0 0017 17l5.94-5.94a36 36 0 0150.92 50.92l-24.11 24.12A36 36 0 01120 139a12 12 0 10-16 18 60 60 0 0082.3-2.43l24.12-24.11a60.09 60.09 0 00.03-84.91z" />
                            </svg>
                            <span className='pr-3 text-2xs font-semibold text-white lg:pr-4 lg:text-xs xl:text-sm'>App Link</span>
                        </div>
                    </div>
                    </div>
                    <div
                    className={`${
                        sectionExpandedP1 && styles.section_showcase_expanded 
                        } ${styles.section_showcase_container }`}
                     >
                    <div className='overflow-hidden '>
                    <h4 className="section-header-hidden mb-2 mt-4 text-xs font-semibold text-black  lg:text-sm xl:mt-5 xl:text-base 2xl:mt-6 2xl:text-lg">Video Demo</h4>
                    
                    <video src={ChessVideo} controls="controls"></video>
                    </div>
                    
                    
                    </div>
                </div>
              </BodyContainer>
                
              {/* Project 2 */}
              <BodyContainer
                expanded={sectionExpandedP2}
                expandFunction={setSectionExpandedP2}
                
                >
                <h3 className="section-header text-xs font-bold text-black  lg:text-sm xl:text-base 2xl:text-lg">Samurai Fight Game</h3>
                <div className="section-subheader-container mt-1 flex flex-row items-center gap-2 text-xs font-semibold text-black  lg:text-2xs xl:mt-1.5 xl:gap-2.5 xl:text-xs 2xl:mt-2 2xl:gap-3 2xl:text-base">
                    <span className="shrink-0">Frontend Developer</span>
                    <div className="dot h-[2px] w-[2px] rounded-full bg-black xl:h-[3px] xl:w-[3px] 2xl:h-1 2xl:w-1"></div>
                    <span className="section-date truncate pr-1 italic">
                    February 2023 - April 2023
                    </span>
                </div>
                <div className="section-tag-container my-2 flex flex-row flex-wrap items-center gap-2 xl:my-2.5 xl:gap-2.5 2xl:my-3 2xl:gap-3">
                    <span className="section-tag border-black  rounded-full  bg-black px-2 py-0.5 text-center text-xs font-normal text-pink-300 lg:px-2.5 lg:text-2xs xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm">HTML/CSS</span>
                    <span className="section-tag rounded-full bg-black px-2 py-0.5 text-center text-xs font-normal text-pink-300 lg:px-2.5 lg:text-2xs xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm">Javascript</span>
                    <span className="section-tag rounded-full bg-black px-2 py-0.5 text-center text-xs font-normal text-pink-300 lg:px-2.5 lg:text-2xs xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm">Jest</span>
        
                </div>
                <p className="section-paragraph text-xs font-medium text-black lg:text-xs lg:leading-normal xl:text-sm 2xl:text-base mb-3 xl:mb-3.5 2xl:mb-4">
                This is a simple browser-based game where two samurai characters battle it out. Players can move their characters and perform slashing attacks, with the goal of reducing their opponent's health to win the game. This game was made using Javascript and HTML/CSS. The testing was done using Jest. This game also has sprite animations.
                <div
                    className={`${
                        sectionExpandedP2 && styles.section_showcase_expanded 
                        } ${styles.section_showcase_container }`}
                >
                    <div className="overflow-hidden ">
                        <div
                            onClick={(event) => {
                            window.open("https://github.com/KhevJ/SamuraiFight");
                            event.stopPropagation();
                            }}
                            className="github-link-button flex w-fit flex-row items-center gap-1.5 rounded bg-black py-1.5 pl-2 outline-none hover:bg-red-400  lg:gap-2 lg:py-2 lg:pl-3"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 256 256"
                            className='h-3 w-3 fill-white lg:h-3.5 lg:w-3.5 xl:h-4 xl:w-4'
                            >
                            <path d="M136.37 187.53a12 12 0 010 17l-5.94 5.94a60 60 0 01-84.88-84.88l24.12-24.11A60 60 0 01152 99a12 12 0 11-16 18 36 36 0 00-49.37 1.47l-24.1 24.08a36 36 0 0050.92 50.92l5.94-5.94a12 12 0 0116.98 0zm74.08-142a60.09 60.09 0 00-84.88 0l-5.94 5.94a12 12 0 0017 17l5.94-5.94a36 36 0 0150.92 50.92l-24.11 24.12A36 36 0 01120 139a12 12 0 10-16 18 60 60 0 0082.3-2.43l24.12-24.11a60.09 60.09 0 00.03-84.91z" />
                            </svg>
                            <span className='pr-3 text-2xs font-semibold text-white lg:pr-4 lg:text-xs xl:text-sm'>Link to Github repository</span>
                        </div>

                    
                    
                    </div>
                    <div
                    className={`${
                        sectionExpandedP2 && styles.section_showcase_expanded 
                        } ${styles.section_showcase_container }`}
                >
                    <div className='overflow-hidden '>
                        <div
                            onClick={(event) => {
                            window.open("https://samurai-fight-khevj.vercel.app");
                            event.stopPropagation();
                            }}
                            className="github-link-button flex w-fit flex-row items-center gap-1.5 rounded bg-black py-1.5 pl-2 outline-none hover:bg-red-400  lg:gap-2 lg:py-2 lg:pl-3"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 256 256"
                            className='h-3 w-3 fill-white lg:h-3.5 lg:w-3.5 xl:h-4 xl:w-4'
                            >
                            <path d="M136.37 187.53a12 12 0 010 17l-5.94 5.94a60 60 0 01-84.88-84.88l24.12-24.11A60 60 0 01152 99a12 12 0 11-16 18 36 36 0 00-49.37 1.47l-24.1 24.08a36 36 0 0050.92 50.92l5.94-5.94a12 12 0 0116.98 0zm74.08-142a60.09 60.09 0 00-84.88 0l-5.94 5.94a12 12 0 0017 17l5.94-5.94a36 36 0 0150.92 50.92l-24.11 24.12A36 36 0 01120 139a12 12 0 10-16 18 60 60 0 0082.3-2.43l24.12-24.11a60.09 60.09 0 00.03-84.91z" />
                            </svg>
                            <span className='pr-3 text-2xs font-semibold text-white lg:pr-4 lg:text-xs xl:text-sm'>App Link</span>
                        </div>
                    </div>
                    </div>
                   
                </div>
                </BodyContainer>


            {/* Project 3 */}
            <BodyContainer
                expanded={sectionExpandedP3}
                expandFunction={setSectionExpandedP3}
                
                >
                <h3 className="section-header text-xs font-bold text-black  lg:text-sm xl:text-base 2xl:text-lg">Movie Theatre App</h3>
                <div className="section-subheader-container mt-1 flex flex-row items-center gap-2 text-xs font-semibold text-black  lg:text-2xs xl:mt-1.5 xl:gap-2.5 xl:text-xs 2xl:mt-2 2xl:gap-3 2xl:text-base">
                    <span className="shrink-0">Java Developer</span>
                    <div className="dot h-[2px] w-[2px] rounded-full bg-black xl:h-[3px] xl:w-[3px] 2xl:h-1 2xl:w-1"></div>
                    <span className="section-date truncate pr-1 italic">
                    Nov 2022 - Jan 2023
                    </span>
                </div>
                <div className="section-tag-container my-2 flex flex-row flex-wrap items-center gap-2 xl:my-2.5 xl:gap-2.5 2xl:my-3 2xl:gap-3">
                    <span className="section-tag border-black  rounded-full  bg-black px-2 py-0.5 text-center text-xs font-normal text-pink-300 lg:px-2.5 lg:text-2xs xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm">Java</span>
                    <span className="section-tag rounded-full bg-black px-2 py-0.5 text-center text-xs font-normal text-pink-300 lg:px-2.5 lg:text-2xs xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm">Spring</span>
                    <span className="section-tag rounded-full bg-black px-2 py-0.5 text-center text-xs font-normal text-pink-300 lg:px-2.5 lg:text-2xs xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm">Design Patterns</span>
                    <span className="section-tag rounded-full bg-black px-2 py-0.5 text-center text-xs font-normal text-pink-300 lg:px-2.5 lg:text-2xs xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm">OOP</span>
                    <span className="section-tag rounded-full bg-black px-2 py-0.5 text-center text-xs font-normal text-pink-300 lg:px-2.5 lg:text-2xs xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm">SQL</span>
                    <span className="section-tag rounded-full bg-black px-2 py-0.5 text-center text-xs font-normal text-pink-300 lg:px-2.5 lg:text-2xs xl:py-1 xl:text-xs 2xl:px-3 2xl:text-sm">MySQL</span>

                </div>
                <p className="section-paragraph text-xs font-medium text-black lg:text-xs lg:leading-normal xl:text-sm 2xl:text-base mb-3 xl:mb-3.5 2xl:mb-4">
                    This is a movie theatre app made with Java using the spring package for the GUI and SQL for the database. This project was made using OOP principles such as aggregation, composition and inheritance. This project uses two design patterns: singleton pattern for the database and decorators pattern for the GUI. The app allows 
                    people to either become a registered user or a regular user where a registered user will get a discount purchasing a movie ticket. It also allows user to select their movie and seat. All the information is stored in a database.</p>
                <div
                    className={`${
                        sectionExpandedP3 && styles.section_showcase_expanded 
                        } ${styles.section_showcase_container }`}
                >
                    <div className="overflow-hidden ">
                        <div
                            onClick={(event) => {
                            window.open("https://github.com/KhevJ/MovieTheatreProject");
                            event.stopPropagation();
                            }}
                            className="github-link-button flex w-fit flex-row items-center gap-1.5 rounded bg-black py-1.5 pl-2 outline-none hover:bg-red-400  lg:gap-2 lg:py-2 lg:pl-3"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 256 256"
                            className='h-3 w-3 fill-white lg:h-3.5 lg:w-3.5 xl:h-4 xl:w-4'
                            >
                            <path d="M136.37 187.53a12 12 0 010 17l-5.94 5.94a60 60 0 01-84.88-84.88l24.12-24.11A60 60 0 01152 99a12 12 0 11-16 18 36 36 0 00-49.37 1.47l-24.1 24.08a36 36 0 0050.92 50.92l5.94-5.94a12 12 0 0116.98 0zm74.08-142a60.09 60.09 0 00-84.88 0l-5.94 5.94a12 12 0 0017 17l5.94-5.94a36 36 0 0150.92 50.92l-24.11 24.12A36 36 0 01120 139a12 12 0 10-16 18 60 60 0 0082.3-2.43l24.12-24.11a60.09 60.09 0 00.03-84.91z" />
                            </svg>
                            <span className='pr-3 text-2xs font-semibold text-white lg:pr-4 lg:text-xs xl:text-sm'>Link to Github repository</span>
                        </div>

                    
                    
                    </div>
                    <div
                    className={`${
                        sectionExpandedP3 && styles.section_showcase_expanded 
                        } ${styles.section_showcase_container }`}
                >
                    
                    </div>
            
                </div>
              </BodyContainer>
            
        {/* Projects subsection (older projects) */}
            {/* <button
            onClick={toggleUnhideOtherProjects}
            className="mx-auto mb-5 flex flex-row items-center justify-center gap-2 outline-none lg:mb-6 lg:gap-2.5 xl:mb-7 xl:gap-3 2xl:mb-8 2xl:gap-4"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
                className={`${
                otherProjectsVisible
                    ? "rotate-180 fill-red-400 "
                    : "fill-black"
                } `}
            >
                <path d="M6.906 6.594l-.718.687-3.907 3.907-.687.718L16 26.312l14.406-14.406-.687-.719-3.907-3.906-.718-.687L16 15.687zm-.031 2.843l8.406 8.376.719.687.719-.688 8.406-8.375 2.438 2.438L16 23.469 4.437 11.875z" />
            </svg>
            <span
                className={`${
                otherProjectsVisible
                    ? "text-red-400 "
                    : "text-black"
                } `}
            >
                {otherProjectsVisible ? "Hide" : "View"} more projects
            </span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
                className={`${
                otherProjectsVisible
                    ? "rotate-180 fill-red-400"
                    : "fill-black"
                }`}
            >
                <path d="M6.906 6.594l-.718.687-3.907 3.907-.687.718L16 26.312l14.406-14.406-.687-.719-3.907-3.906-.718-.687L16 15.687zm-.031 2.843l8.406 8.376.719.687.719-.688 8.406-8.375 2.438 2.438L16 23.469 4.437 11.875z" />
            </svg>
            </button> */}
            </section>

            <section id="education-section">
                <h2 className="section-title mb-3 font-rajdhani text-3xl font-extrabold text-black  lg:mb-4 lg:text-4xl xl:mb-5 2xl:text-5xl;">Education</h2>
                <BodyContainer
                expanded={sectionExpandedE1}
                expandFunction={setSectionExpandedE1}
                >
                <h3 className="section-header text-xs font-bold text-black lg:text-sm xl:text-base 2xl:text-lg">
                    Bachelor of Science in Software Engineering
                </h3>
                <div className="section-subheader-container mt-1 flex flex-row items-center gap-2 text-3xs font-semibold text-black lg:text-2xs xl:mt-1.5 xl:gap-2.5 xl:text-xs 2xl:mt-2 2xl:gap-3 2xl:text-base">
                    <span className="shrink-0">University of Calgary</span>
                    <div className="h-[2px] w-[2px] rounded-full bg-black xl:h-[3px] xl:w-[3px] 2xl:h-1 2xl:w-1"></div>
                    <span className="section-date truncate pr-1 italic">
                    Current Student
                    </span>
                </div>
                <span className="mt-1 block text-2xs font-semibold text-black  lg:text-xs xl:mt-2 xl:text-sm 2xl:text-base">
                    Minor in mechatronics
                </span>

                <span className="mt-1 block text-2xs font-semibold text-black  lg:text-xs xl:mt-2 xl:text-sm 2xl:text-base">
                    Member of the competitive programming club
                </span>

                <span className="mt-1 block text-2xs font-semibold text-black  lg:text-xs xl:mt-2 xl:text-sm 2xl:text-base">
                    Member of the gaming club
                </span>


                <div
                    className={`${
                    sectionExpandedE1 && styles.section_showcase_expanded 
                    } ${styles.section_showcase_container }`}
                >
                    <div className="overflow-hidden">
                    <h4 className="mb-1 text-xs font-semibold text-black  lg:text-sm xl:mb-2 xl:text-base 2xl:text-lg">
                        Awards:
                    </h4>
                    <div className="awards-row-container flex flex-row items-start justify-between mb-1 xl:mb-2 ">
                        <span className='text-xs font-semibold lg:text-sm xl:text-base 2xl:text-lg'>
                        Prestigious Scholarship
                        </span>
                        
                    </div>
                    
                    <div className="awards-row-container flex flex-row items-start justify-between">
                        <span className='text-xs font-semibold lg:text-sm xl:text-base 2xl:text-lg'>
                        Dean's List
                        </span>
                        <span className='text-xs font-semibold lg:text-sm xl:text-base 2xl:text-lg'>2022-2023</span>
                    </div>
                    
                    </div>
                </div>
                </BodyContainer>
            </section>


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
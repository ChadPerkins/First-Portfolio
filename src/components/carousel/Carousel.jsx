import { useState } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiFillCode } from "react-icons/ai";
import { MdPageview } from "react-icons/md";

import { projects } from './CarouselData'
import './Carousel.css';

function Carousel() {
    const [activeSlide, setActiveSlide] = useState(0);
    
    return (
        <>
        <div className="carousel-container">
            <div className="carousel-slide">
                <div className="project-nav">
                            <BsFillArrowLeftCircleFill
                                className='nav-svg'
                                onClick={() => {
                                    if(activeSlide > 0) {
                                        setActiveSlide(activeSlide - 1)
                                    } else {
                                        setActiveSlide(projects.length - 1)
                                    }
                                }}
                            />
                </div>
                <div className="carousel-card">
                    <h2>{projects[activeSlide].title}</h2>
                    <img src={projects[activeSlide].img} alt="project" />
                    <p>{projects[activeSlide].description}</p>
                    <div className='project-links'>
                        <a className='project-svg' href={projects[activeSlide].github}>
                            <AiFillCode/>
                        </a>
                        <a className='project-svg' href={projects[activeSlide].url}>
                            <MdPageview />
                        </a>
                    </div>
                </div>
                <div className="project-nav">
                    <BsFillArrowRightCircleFill
                        className='nav-svg'
                        onClick={() => {
                            if(activeSlide > 0) {
                                setActiveSlide(activeSlide - 1)
                            } else {
                                setActiveSlide(projects.length - 1)
                            }
                        }}
                    />
                </div>
            </div>
        </div>
      </>
  )
}

export default Carousel